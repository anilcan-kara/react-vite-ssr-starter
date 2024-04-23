import { useState } from 'react'

import { useData } from '../../renderer/useData'

export function Counter() {
  const { tckimlikno } = useData()
  const [count, setCount] = useState(tckimlikno ?? 0)

  return (
    <button type="button" onClick={() => setCount((count) => count + 1)}>
      Counter {count}
    </button>
  )
}
