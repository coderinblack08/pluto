import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from 'type-graphql';
import { Announcement } from '../entity/Announcement';
import { Community } from '../entity/Community';
import { Post } from '../entity/Post';
import { isAuth } from '../middlewares/isAuth';
import { AnnouncementArgs } from '../types/graphql/post/AnnouncementArgs';
import { AnnouncementResponse } from '../types/graphql/post/AnnouncementResponse';
import { MyContext } from '../types/MyContext';

@Resolver()
export class AnnouncementResolver {
  @Mutation(() => AnnouncementResponse)
  @UseMiddleware(isAuth)
  async createAnnouncement(
    @Arg('options', () => AnnouncementArgs) options: AnnouncementArgs,
    @Ctx() { req }: MyContext
  ): Promise<AnnouncementResponse> {
    const community = await Community.findOne(options.communityId, {
      relations: ['creator'],
    });

    if (req.session.userId !== community.creator.id) {
      throw new Error('You are not the creator of this contest');
    }

    const post = await Post.create({ communityId: options.communityId }).save();
    const announcement = await Announcement.create({
      title: options.title,
      announcement: options.announcement,
      postId: post.id,
    }).save();

    const joinedPost = {
      ...post,
      announcement,
    };

    return {
      post: joinedPost as Post,
    };
  }
}
