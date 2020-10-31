import { Field, InputType } from 'type-graphql';

@InputType()
export class AnnouncementArgs {
  @Field()
  title: string;

  @Field()
  announcement: string;

  @Field()
  communityId: string;

  @Field()
  pinned: boolean;
}
