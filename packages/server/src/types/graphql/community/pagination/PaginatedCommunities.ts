import { Field, ObjectType } from 'type-graphql';
import { Community } from '../../../../entity/Community';

@ObjectType()
export class PaginatedCommunities {
  @Field(() => [Community])
  communities: Community[];

  @Field()
  hasMore: boolean;
}
