import { useData } from '../../../renderer/useData'

export function Page() {
  const { movies } = useData()

  return (
    <>
      <h1 className='text-3xl font-bold'>Star Wars Movies</h1>

      <ol className='list-decimal list-inside bg-gray-100 p-4 rounded-lg my-4'>
        {movies.map(({ id, title, release_date }) => (
          <li key={id}>
            <a href={`/star-wars/${id}`}>{title}</a> ({release_date})
          </li>
        ))}
      </ol>

      <p>
        Source: <a href="https://brillout.github.io/star-wars/">brillout.github.io/star-wars</a>.
      </p>
      <p>
        Data can be fetched by using the <code>data()</code> hook.
      </p>
    </>
  )
}
