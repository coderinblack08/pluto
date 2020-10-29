import { Field, Resolver } from 'type-graphql';
import { Post } from '../../../entity/Post';
import { FieldError } from '../shared/FieldError';

@Resolver()
export class AnnouncementResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Post, { nullable: true })
  post?: Post;
}
