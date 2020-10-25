import argon2 from 'argon2';
import { Arg, Mutation, Resolver } from 'type-graphql';
import { User } from '../entity/User';
import { RegisterArgs } from '../types/graphql/UserArgs';
import { UserResponse } from '../types/graphql/UserResponse';

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
}
