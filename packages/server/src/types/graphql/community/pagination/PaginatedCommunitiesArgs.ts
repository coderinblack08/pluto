import { Field, InputType } from 'type-graphql';

@InputType()
export class PaginatedCommunitiesArgs {
  @Field()
  limit: number;

  @Field(() => String, { nullable: true })
  cursor?: string | null;
}
