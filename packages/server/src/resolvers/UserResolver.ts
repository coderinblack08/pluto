import argon2 from 'argon2';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { User } from '../entity/User';
import { LoginArgs, RegisterArgs } from '../types/graphql/UserArgs';
import { UserResponse } from '../types/graphql/UserResponse';
import { MyContext } from '../types/MyContext';

const generateError = (field: string, message: string): UserResponse => {
  return { errors: [{ field, message }] };
};

@Resolver()
export class UserResolver {
  @Mutation(() => UserResponse)
  async register(@Arg('options') options: RegisterArgs): Promise<UserResponse> {
    const hashedPassword = await argon2.hash(options.password);
    try {
      const user = await User.create({
        ...options,
        password: hashedPassword,
      }).save();

      return { user };
    } catch (error) {
      if (error.code === '23505' && error.detail.endsWith('already exists.')) {
        return generateError('email', 'Email already exists');
      }
    }
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg('options') options: LoginArgs,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const user = await User.findOne({
      where: { email: options.email },
    });

    if (!user) {
      return generateError('email', "Email doesn't exist");
    }

    const passwordMatches = await argon2.verify(
      user.password,
      options.password
    );

    if (!passwordMatches) {
      return generateError('password', 'Password incorrect');
    }

    req.session.userId = user.id;

    return { user };
  }
}
