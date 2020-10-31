import { Post } from '../entity/Post';
import { isAuth } from '../middlewares/isAuth';
import { MyContext } from '../types/MyContext';
import {
  Resolver,
  Mutation,
  UseMiddleware,
  Arg,
  Ctx,
  Query,
} from 'type-graphql';
import { getConnection } from 'typeorm';
import { Like } from '../entity/Like';

@Resolver()
export class PostResolver {
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deletePost(@Arg('postId') postId: number, @Ctx() { req }: MyContext) {
    const postJoined = await Post.findOne(postId, { relations: ['community'] });

    if (!postJoined) {
      throw new Error("Post doesn't exist");
    }

    if (postJoined?.community.creatorId !== req.session.userId) {
      throw new Error('You are not the creator');
    }

    await Post.delete(postId);
    await getConnection().query(
      `
      update community
      set posts = posts - 1
      where id = $1;
    `,
      [postJoined.communityId]
    );

    return true;
  }

  @Query(() => [Post])
  async findPosts(
    @Arg('communityId') communityId: string,
    @Ctx() { req }: MyContext
  ) {
    let posts = await getConnection().query(
      `
        select p.*,
        json_build_object(
          'id', a.id,
          'title', a.title,
          'announcement', a.announcement,
          'postId', a."postId"
        ) announcement
        from post p
        inner join announcement a on a.id = p."announcementId"
        where p."communityId" = $1
        order by p."createdAt" DESC
      `,
      [communityId]
    );

    posts = posts.map(async (post: Post) => {
      const isLiked = await Like.findOne({
        postId: post.id,
        userId: req.session.userId,
      });
      post.isLiked = isLiked !== undefined;
      return post;
    });

    return posts;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async likePost(@Arg('postId') postId: number, @Ctx() { req }: MyContext) {
    await Like.create({ postId, userId: req.session.userId }).save();
    await getConnection().query(
      `
      update post
      set likes = likes + 1
      where id = $1;
    `,
      [postId]
    );
    return true;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async unlikePost(@Arg('postId') postId: number, @Ctx() { req }: MyContext) {
    await Like.delete({ postId, userId: req.session.userId });
    await getConnection().query(
      `
      update post
      set likes = likes - 1
      where id = $1;
    `,
      [postId]
    );
    return true;
  }
}
