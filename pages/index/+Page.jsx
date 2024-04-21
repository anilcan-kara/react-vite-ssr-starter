import { Counter } from './Counter'

export function Page() {
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
