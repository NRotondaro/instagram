import { useEffect } from 'react'
import faker from '@faker-js/faker'

export const Stories = () => {
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))

    console.log(suggestions);
  }, [])

  return <div>Olá</div>
}
