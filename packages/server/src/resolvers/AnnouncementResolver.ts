import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from 'type-graphql';
import { getConnection } from 'typeorm';
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

    if (!community) {
      throw new Error('Community Not Found');
    }

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

    await getConnection().query(
      `
      update community
      set posts = posts + 1
      where id = $1;
    `,
      [options.communityId]
    );

    const joinedPost = {
      ...post,
      announcement,
    };

    return {
      post: joinedPost as Post,
    };
  }
}
