import { PostProps } from './Posts'
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'

export const Post = ({ id, username, userImg, img, caption }: PostProps) => {
  const { data: session } = useSession()

  return (
    <div className="my-7 rounded-sm border bg-white">
      <div className="flex items-center p-5">
        <img
          src={userImg}
          className="mr-3 h-12 w-12 rounded-full border object-contain p-1"
          alt="user-pic"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <div>
        <img className="w-full object-cover" src={img} alt="post-pic" />
      </div>
      <div>
        {session && (
          <div className="flex justify-between px-4 pt-4">
            <div className="flex space-x-4">
              <HeartIcon className="btn" />
              <ChatIcon className="btn" />
              <PaperAirplaneIcon className="btn rotate-90" />
            </div>
            <div>
              <BookmarkIcon className="btn" />
            </div>
          </div>
        )}
        <p className="truncate p-5">
          <span className="mr-1 font-bold">{username}</span>
          {caption}
        </p>
      </div>
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            className="flex-1 border-none focus:ring-0"
            placeholder="Adicione um comentário..."
            type="text"
          />
          <button className="font-semibold text-blue-400">Post</button>
        </form>
      )}
    </div>
  )
}
