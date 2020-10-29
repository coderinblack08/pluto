import { Field, ObjectType } from 'type-graphql';
import { Post } from '../../../entity/Post';
import { FieldError } from '../shared/FieldError';

@ObjectType()
export class AnnouncementResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Post, { nullable: true })
  post?: Post;
}
