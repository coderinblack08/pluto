import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Error {
  @Field()
  field: string;

  @Field()
  message: string;
}
