import { Field, ObjectType } from 'type-graphql';
import { Community } from '../../../../entity/Community';
import { Paginated } from '../../shared/Paginated';

@ObjectType()
export class PaginatedCommunities extends Paginated {
  @Field(() => [Community])
  communities: Community[];
}
