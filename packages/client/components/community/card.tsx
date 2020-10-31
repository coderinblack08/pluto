import classNames from 'classnames';
import {
  ChatOutline,
  HeartOutline,
  SpeakerphoneOutline,
  TrashOutline,
} from 'heroicons-react';
import React from 'react';
import { useDeletePostMutation } from '../../generated/graphql';

interface CardProps {
  id: number;
  title: string;
  announcement: string;
  likes: number | string;
  comments: number | string;
  type?: string;
  isFirst?: boolean;
}

export const Card: React.FC<CardProps> = ({
  id,
  title,
  announcement,
  likes,
  comments,
  isFirst = false,
  type = 'announcement',
}) => {
  const [deletePost] = useDeletePostMutation();

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
            <button className="focus:outline-none hover:text-red-600 group-hover:text-red-100 inline-flex items-center text-red-500 pr-5">
              <HeartOutline size={18} className="mr-2" />
              {likes} Likes
            </button>
            <div className="inline-flex items-center text-gray-600 group-hover:text-gray-100 pl-5 pr-5">
              <ChatOutline size={18} className="mr-2" />
              {comments} Comments
            </div>
            <button
              className="focus:outline-none inline-flex items-center text-red-600 group-hover:text-red-100 pl-5"
              onClick={async () => {
                await deletePost({ variables: { postId: id } });
              }}
            >
              <TrashOutline size={18} className="mr-2" /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
