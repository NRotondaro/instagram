import { Post } from './Post'

export interface PostProps {
  id: string
  username: string
  userImg: string
  img: string
  caption: string
}

const posts: PostProps[] = [
  {
    id: '123',
    username: 'niksonrotondaro',
    userImg:
      'https://media-exp1.licdn.com/dms/image/C5603AQFzINjYeGqjow/profile-displayphoto-shrink_200_200/0/1639086160833?e=1648080000&v=beta&t=zoVmr9RmTaySZJHUPX2D9VLUvaZNVG3MQfhrP2wGD6o',
    img: 'https://links.papareact.com/ocw',
    caption: 'This is DOPE!',
  },
  {
    id: '34',
    username: 'niksonrotondaro',
    userImg:
      'https://media-exp1.licdn.com/dms/image/C5603AQFzINjYeGqjow/profile-displayphoto-shrink_200_200/0/1639086160833?e=1648080000&v=beta&t=zoVmr9RmTaySZJHUPX2D9VLUvaZNVG3MQfhrP2wGD6o',
    img: 'https://links.papareact.com/ocw',
    caption: 'This is DOPE!',
  },
]

export const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}
