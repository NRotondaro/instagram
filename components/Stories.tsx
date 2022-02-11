import { useEffect, useState } from 'react'
import faker from '@faker-js/faker'
import { Story } from './Story'

export interface SuggestionsProps {
  id?: number
  name?: string
  username?: string
  avatar?: string
  email?: string
  dob?: Date
  phone?: string
  address?: {
    street?: string
    suite?: string
    city?: string
    zipcode?: string
    geo?: {
      lat?: string
      lng?: string
    }
  }
  website?: string
  company?: {
    name?: string
    catchPhrase?: string
    bs?: string
  }
}

export const Stories = () => {
  const [suggestions, setSuggestions] = useState<SuggestionsProps[]>([])

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-8 flex flex-grow space-x-2 overflow-x-scroll rounded-sm border border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-black">
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          avatar={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}
