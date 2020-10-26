import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Community } from '../entity/Community';
import { MyContext } from '../types/MyContext';
import { CommunityArgs } from '../types/graphql/community/CommunityArgs';
import { CommunityResponse } from '../types/graphql/community/CommunityResponse';
import { PaginatedCommunitiesArgs } from '../types/graphql/community/pagination/PaginatedCommunitiesArgs';
import { getConnection } from 'typeorm';
import { PaginatedCommunities } from '../types/graphql/community/pagination/PaginatedCommunities';

@Resolver()
export class CommunityResolver {
  @Mutation(() => CommunityResponse)
  async createCommunity(
    @Arg('options', () => CommunityArgs) options: CommunityArgs,
    @Ctx() { req }: MyContext
  ): Promise<CommunityResponse> {
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

  @Query(() => PaginatedCommunities)
  async findCommunities(
    @Arg('options', () => PaginatedCommunitiesArgs)
    options: PaginatedCommunitiesArgs
  ): Promise<PaginatedCommunities> {
    const cappedLimit = Math.min(50, options.limit);
    const queryBuilder = getConnection()
      .getRepository(Community)
      .createQueryBuilder('c');

    if (options.cursor) {
      queryBuilder.where('"createdAt" > :cursor', {
        cursor: new Date(parseInt(options.cursor)),
      });
    }

    const communities = await queryBuilder
      .orderBy('"createdAt"', 'DESC')
      .take(cappedLimit + 1)
      .getMany();

    return {
      communities: communities.slice(0, cappedLimit),
      hasMore: communities.length === cappedLimit + 1,
    };
  }
}
