import { ObjectType, Field } from 'type-graphql';
import { Community } from '../../../entity/Community';
import { FieldError } from '../shared/FieldError';

@ObjectType()
export class CommunityResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Community, { nullable: true })
  community?: Community;
}
