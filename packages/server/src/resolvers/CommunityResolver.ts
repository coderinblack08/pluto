import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Community } from '../entity/Community';
import { MyContext } from '../types/MyContext';
import { CommunityArgs } from '../types/graphql/community/CommunityArgs';
import { CommunityResponse } from '../types/graphql/community/CommunityResponse';

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

  @Query(() => [Community])
  async findCommunities(): Promise<Community[]> {
    return Community.find({ where: { isPrivate: false } });
  }
}
