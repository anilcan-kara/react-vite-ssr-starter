import { useData } from '../../renderer/useData'
import { Counter } from './Counter'

export function Page() {
  const { tckimlikno } = useData()

  console.log('tckimlikno', tckimlikno)
  console.log('new Date()', new Date())

  return (
    <>
      <h1>Welcomee</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  )
}
