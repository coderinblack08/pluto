import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Paginated {
  @Field()
  hasMore: boolean;
}
