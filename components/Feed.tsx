import { Posts } from './Posts'
import { Stories } from './Stories'

export const Feed = () => {
  return (
    <main className="mx-auto grid grid-cols-1 md:max-w-5xl md:grid-cols-2 xl:max-w-7xl xl:grid-cols-3">
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>

      <section></section>
    </main>
  )
}
