import classNames from 'classnames';
import {
  ChatOutline,
  Heart,
  HeartOutline,
  SpeakerphoneOutline,
  TrashOutline,
} from 'heroicons-react';
import React from 'react';
import {
  FindPostsDocument,
  FindPostsQuery,
  GetCommunityDocument,
  GetCommunityQuery,
  Post,
  useDeletePostMutation,
  useFindPostsQuery,
  useGetCommunityQuery,
  useLikePostMutation,
  useUnlikePostMutation,
} from '../../generated/graphql';

interface CardProps {
  id: number;
  index: number;
  communityId: string;
  title: string;
  announcement: string;
  likes: number;
  comments: number;
  type?: string;
  isFirst?: boolean;
  isLiked: boolean;
}

export const Card: React.FC<CardProps> = ({
  id,
  index,
  title,
  announcement,
  likes,
  comments,
  isLiked,
  communityId,
  isFirst = false,
  type = 'announcement',
}) => {
  const { data: community } = useGetCommunityQuery({
    variables: { id: communityId },
  });

  const { data: posts } = useFindPostsQuery({ variables: { communityId } });

  const [deletePost] = useDeletePostMutation();
  const [likePost] = useLikePostMutation();
  const [unlikePost] = useUnlikePostMutation();

  return (
    <div
      className={classNames(
        'hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400 px-6 py-8 hover:shadow-inner group',
        { 'shadow-sm rounded-md bg-white': isFirst }
      )}
    >
      <div className="flex items-start space-x-6">
        <div className="inline-flex items-center justify-center text-white bg-gradient-to-r from-orange-500 to-red-500 group-hover:shadow-md p-2 rounded">
          <SpeakerphoneOutline size={20} />
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-gray-800 group-hover:text-white leading-snug">
            {title}
          </h2>
          <p className="text-gray-600 group-hover:text-gray-100 mt-1 leading-relaxed">
            {announcement}
          </p>
          <div className="flex items-center mt-4 divide-x">
            <button
              className="focus:outline-none hover:text-red-600 group-hover:text-red-100 inline-flex items-center text-red-500 pr-5"
              onClick={async () => {
                const newPosts = JSON.parse(
                  JSON.stringify(posts.findPosts)
                ) as Post[];
                if (isLiked) {
                  newPosts[index].isLiked = false;
                  newPosts[index].likes -= 1;
                  await unlikePost({
                    variables: { postId: id },
                    update: (cache) => {
                      cache.writeQuery<FindPostsQuery>({
                        query: FindPostsDocument,
                        data: {
                          __typename: 'Query',
                          findPosts: newPosts,
                        },
                      });
                    },
                  });
                  isLiked = false;
                  return;
                }
                newPosts[index].isLiked = true;
                newPosts[index].likes += 1;
                await likePost({
                  variables: { postId: id },
                  update: (cache) => {
                    cache.writeQuery<FindPostsQuery>({
                      query: FindPostsDocument,
                      data: {
                        __typename: 'Query',
                        findPosts: newPosts,
                      },
                    });
                  },
                });
                isLiked = true;
              }}
            >
              {isLiked ? (
                <Heart size={18} className="mr-2" />
              ) : (
                <HeartOutline size={18} className="mr-2" />
              )}
              {posts.findPosts[index].likes} Like
              {posts.findPosts[index].likes !== 1 ? 's' : ''}
            </button>
            <div className="inline-flex items-center text-gray-600 group-hover:text-gray-100 pl-5 pr-5">
              <ChatOutline size={18} className="mr-2" />
              {comments} Comments
            </div>
            {community.getCommunity.isCreator ? (
              <div className="pl-5">
                <button
                  className="focus:outline-none inline-flex items-center focus:shadow-outline bg-red-100 leading-loose px-3 group-hover:bg-opacity-25 rounded text-red-500 hover:text-red-600 group-hover:text-red-100"
                  onClick={async () => {
                    await deletePost({
                      variables: { postId: id },
                      update: (cache) => {
                        cache.evict({ id: 'Post:' + id });
                        cache.writeQuery<GetCommunityQuery>({
                          query: GetCommunityDocument,
                          data: {
                            __typename: 'Query',
                            getCommunity: {
                              ...community.getCommunity,
                              posts: community.getCommunity.posts - 1,
                            },
                          },
                        });
                      },
                    });
                  }}
                >
                  <TrashOutline size={18} className="mr-2" /> Delete
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
