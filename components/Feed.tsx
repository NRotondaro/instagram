import { Stories } from './Stories'

export const Feed = () => {
  return (
    <main className="mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
      <section>
        <Stories />
      </section>

      <section></section>
    </main>
  )
}
