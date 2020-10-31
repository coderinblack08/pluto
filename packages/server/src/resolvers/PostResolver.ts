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
    return true;
  }

  @Query(() => [Post])
  async findPosts(@Arg('communityId') communityId: string) {
    const posts = await getConnection().query(
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
    console.log(posts);
    return posts;
  }
}
