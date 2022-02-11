import { useEffect, useState } from 'react'
import faker from '@faker-js/faker'

interface SuggestionsProps {
  [index: number]: {
    id: number
    name: string
    username: string
    avatar: string
    email: string
    dob: Date
    phone: string
    adress: {
      street: string
      suite: string
      city: string
      zipcode: string
      geo: {
        lat: string
        lng: string
      }
    }
    website: string
    company: {
      name: string
      catchPhrase: string
      bs: string
    }
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

  return <div>Olá</div>
}
