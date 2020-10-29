import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql';
import { Announcement } from '../entity/Announcement';
import { Community } from '../entity/Community';
import { Post } from '../entity/Post';
import { isAuth } from '../middlewares/isAuth';
import { AnnouncementArgs } from '../types/graphql/post/AnnouncementArgs';
import { AnnouncementResponse } from '../types/graphql/post/AnnouncementResponse';
import { MyContext } from '../types/MyContext';

@Resolver()
export class AnnouncementResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => AnnouncementResponse)
  async createAnnouncement(
    @Arg('options', () => AnnouncementArgs) options: AnnouncementArgs,
    @Ctx() { req }: MyContext
  ): Promise<AnnouncementResponse> {
    const community = await Community.findOne(options.communityId, {
      relations: ['creator'],
    });

    if (req.session.userId !== community.creator.id) {
      throw new Error('You are not the creator of this community');
    }

    const post = await Post.create({ communityId: options.communityId }).save();
    const announcement = await Announcement.create({
      title: options.title,
      announcement: options.announcement,
      postId: post.id,
    }).save();

    await Post.update(post.id, { announcementId: announcement.id });

    const joinedPost = {
      ...post,
      announcement,
    };

    return {
      post: joinedPost as Post,
    };
  }

  @Query(() => [Post])
  async findPosts(@Arg('communityId') communityId: string) {
    const posts = await Post.find({
      where: { communityId },
      relations: ['announcement'],
    });
    console.log(posts);
    return posts;
  }
}
