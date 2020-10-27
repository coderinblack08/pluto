import classNames from 'classnames';
import { X } from 'heroicons-react';
import React, { InputHTMLAttributes, useState } from 'react';

type TagFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  initialTags?: any[];
  setFormikValues: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => void;
};

export const TagsField: React.FC<TagFieldProps> = ({
  name,
  initialTags,
  setFormikValues,
  ...props
}) => {
  const [tags, setTags] = useState(initialTags || []);
  const [tagString, setTagString] = useState('');

  return (
    <div>
      <label htmlFor="tags" className="capitalize">
        {name}
      </label>
      <div className="flex items-center mt-1 rounded-md border w-full transition ease duration-200 shadow-sm focus:border focus:border-blue-400">
        <div
          className={classNames(
            'flex overflow-x-scroll space-x-2 items-center',
            {
              'px-2': tags.length,
            }
          )}
        >
          {tags.map((tag, index) => (
            <span
              key={index}
              className="cursor-move inline-flex items-center px-2 bg-gradient-to-r to-blue-500 from-teal-500 whitespace-no-wrap text-white leading-7 font-medium rounded"
            >
              <p
                className="truncate"
                style={{
                  maxWidth: '6rem',
                }}
              >
                {tag}
              </p>
              <button
                type="button"
                className="ml-1 cursor-pointer hover:bg-blue-700 hover:bg-opacity-50 rounded-full p-1 focus:outline-none focus:shadow-outline"
                onClick={() => {
                  const newTags = [...tags];
                  newTags.splice(index, 1);
                  setTags(newTags);
                }}
              >
                <X size={12} />
              </button>
            </span>
          ))}
        </div>
        <input
          type="text"
          className={classNames(
            'rounded-r-md border-l px-3 py-2 focus:outline-none focus:shadow-outline text-gray-800 focus:placeholder-gray-500',
            {
              'rounded-md border-none': !tags.length,
            }
          )}
          style={{
            minWidth: '120px',
          }}
          {...props}
          name={name}
          onChange={(e) => setTagString(e.target.value)}
          value={tagString}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && tagString.trim()) {
              setTags([...tags, tagString]);
              setFormikValues(name, tags);
              setTagString('');
            }
          }}
        />
      </div>
    </div>
  );
};
