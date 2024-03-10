/* useEffect() = React Hook that tells React to DO SOME CODE WHEN (pick one):
This component re-renders
This component mounts
The state of a value

useEffect(function,[dependencies])

1. useEffect(() => {}) Runs after every re-render
2. useEffect(() => {}, []) Runs only on mount
3. useEffect(() => {}, [value]) Runs on mount + when value changes

USES
#1 Event Listeners
#2 DOM manipulation
#3 Subscriptions (real-time updates)
#4 Fetching Data from Api
# Clean up when a component unmounts
*/

import { useEffect, useState } from 'react'

function UpdateUseEffect() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count ${count}`
  })

  function addCount() {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add</button>
    </>
  )
}

export default UpdateUseEffect
