import Image from 'next/image'
import { SuggestionsProps } from './Stories'

export const Story = ({ avatar, username }: SuggestionsProps) => {
  return (
    <div>
      <img
        className="h-14 w-14 transform cursor-pointer rounded-full border-2 border-red-500 object-contain p-[1.5px] transition duration-200 ease-out hover:scale-110"
        src={avatar}
        alt="profile-pic"
      />
      <p className="w-14 truncate text-center text-xs">{username}</p>
    </div>
  )
}
