import { Field, InputType } from 'type-graphql';

@InputType()
export class RegisterArgs {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  confirmPassword?: string;

  @Field(() => Boolean)
  schoolAccount?: boolean;
}

@InputType()
export class LoginArgs {
  @Field()
  email: string;

  @Field()
  password: string;
}
