import Link from 'next/link';
import React from 'react';

interface FeedCardProps {
  avatar : string;
  creator: string;
  title: string;
  description: string;
  language: string;
  id: string
}

const FeedCard: React.FC<FeedCardProps> = ({ id, creator ,title, description, language }) => {
  return (
    <Link href={`/post/${id}`} className='m-4 ' >
      <div className="flex flex-col justify-between border-[0.1px] rounded-t-xl rounded-b-xl shadow-md shadow-gray-600  border-gray-600 py-6 p-8 w-[340px] h-[220px] bg-neutral-950">
        <div>
          <h1 className='font-bold text-lg  line-clamp-1 '>{title}</h1>
          <button className=' text-xs border-[0.1px] rounded-[6px] bg-white text-gray-600 font-bold px-2 mt-2 py-[1px]' onClick={(e) => {e.stopPropagation(); window.location.href = '/';}}>
          {language}
          </button>
          <p className='text-md line-clamp-3 pt-1 text-gray-300'>{description}</p>
        </div>
        <div className='flex items-end w-full pt-1'>
        <h1 className='text-sm text-right'>By {creator}</h1>
        </div>
      </div>
    </Link>
  );
}

export default FeedCard;
