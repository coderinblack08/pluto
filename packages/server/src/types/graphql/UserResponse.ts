import { Field, ObjectType } from 'type-graphql';
import { User } from '../../entity/User';
import { Error } from './Error';

@ObjectType()
export class UserResponse {
  @Field(() => [Error], { nullable: true })
  errors?: Error[];

  @Field(() => User, { nullable: true })
  user?: User;
}
