import { ObjectType, Field } from 'type-graphql';
import { Community } from '../../../entity/Community';
import { Error } from '../shared/Error';

@ObjectType()
export class CommunityResponse {
  @Field(() => [Error], { nullable: true })
  errors?: Error[];

  @Field(() => Community, { nullable: true })
  community?: Community;
}
