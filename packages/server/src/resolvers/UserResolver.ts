import argon2 from 'argon2';
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { cookie_name } from '../constants';
import { User } from '../entity/User';
import { LoginArgs, RegisterArgs } from '../types/graphql/UserArgs';
import { UserResponse } from '../types/graphql/UserResponse';
import { MyContext } from '../types/MyContext';

const generateError = (field: string, message: string): UserResponse => {
  return { errors: [{ field, message }] };
};

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: MyContext) {
    if (!req.session.userId) {
      return null;
    }

    const user = await User.findOne(req.session.userId);
    return user;
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg('options') options: RegisterArgs,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    console.log(options);

    if (options.confirmPassword !== options.password) {
      return generateError('confirmPassword', 'Passwords do not match');
    }

    const hashedPassword = await argon2.hash(options.password);
    delete options.confirmPassword;

    try {
      const user = await User.create({
        ...options,
        password: hashedPassword,
      }).save();

      console.log(user);

      req.session.userId = user.id;

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

  @Mutation(() => Boolean)
  async logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        res.clearCookie(cookie_name);
        if (err) {
          console.error(err);
          resolve(false);
          return;
        }
        resolve(true);
      })
    );
  }
}
