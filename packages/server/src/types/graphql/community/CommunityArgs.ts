import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class CommunityArgs {
  @Field()
  name: string;

  @Field()
  about: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  website: string;

  @Field({ nullable: true })
  location?: string;

  @Field({ nullable: true })
  category: string;

  @Field(() => Int, { nullable: true })
  maxParticipants?: number;

  @Field(() => Boolean, { nullable: true })
  isSchool?: boolean;

  @Field(() => Boolean, { nullable: true })
  isPrivate?: boolean;

  @Field(() => Boolean, { nullable: true })
  emailNotifications?: boolean;
}
