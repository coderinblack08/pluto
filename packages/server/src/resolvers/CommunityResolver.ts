import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql';
import { Community } from '../entity/Community';
import { MyContext } from '../types/MyContext';
import { CommunityArgs } from '../types/graphql/community/CommunityArgs';
import { CommunityResponse } from '../types/graphql/community/CommunityResponse';
import { PaginatedCommunitiesArgs } from '../types/graphql/community/pagination/PaginatedCommunitiesArgs';
import { getConnection } from 'typeorm';
import { PaginatedCommunities } from '../types/graphql/community/pagination/PaginatedCommunities';
import { communitySchema } from '@pluto/common';
import { parseYupErrors } from '../utils/parseYupErrors';
import { isAuth } from '../middlewares/isAuth';

@Resolver()
export class CommunityResolver {
  @Mutation(() => CommunityResponse)
  @UseMiddleware(isAuth)
  async createCommunity(
    @Arg('options', () => CommunityArgs) options: CommunityArgs,
    @Ctx() { req }: MyContext
  ): Promise<CommunityResponse> {
    try {
      await communitySchema.validate(options);
    } catch (error) {
      return { errors: [parseYupErrors(error)] };
    }

    try {
      const community = await Community.create({
        ...options,
        creatorId: req.session.userId,
      }).save();
      return { community };
    } catch (error) {
      console.error(error);
    }
  }

  @Query(() => Community)
  async getCommunity(@Arg('id') id: string) {
    const community = Community.findOne({ id }, { relations: ['creator'] });
    if (!community) {
      throw new Error('Community Not Found');
    }
    return community;
  }

  @Query(() => PaginatedCommunities)
  async findCommunities(
    @Arg('options', () => PaginatedCommunitiesArgs)
    options: PaginatedCommunitiesArgs
  ): Promise<PaginatedCommunities> {
    const cappedLimit = Math.min(50, options.limit);

    const replacements: any[] = [cappedLimit + 1];

    if (options.cursor) {
      replacements.push(new Date(parseInt(options.cursor)));
    }

    const communities = await getConnection().query(
      `
      select c.*
      from community c
      ${options.cursor ? `where c."createdAt" < $2` : ''}
      order by c."createdAt" DESC
      limit $1
    `,
      replacements
    );

    return {
      communities: communities.slice(0, cappedLimit),
      hasMore: communities.length === cappedLimit + 1,
    };
  }
}
