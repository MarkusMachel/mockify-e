import { useEffect, useRef } from 'react'

function UpdaterRef() {
  /* useState() = re-renders the component when the state value changes.

useRef() = 'use Reference' Does not cause re-renders when its value changes.
when you want a component to "remeber" some information,
but you dont want that information to trigger new renders.

1. Accessing/Interacting with DOM elemnts
2. Handling Focus, Animations, and Transitions
3. Managing Times and Invervals
*/

  const ref = useRef(0)

  useEffect(() => {
    console.log('COMPENENT RENDERED')
  })

  function handleClick() {
    ref.current++
    console.log(ref)
  }

  return <button onClick={handleClick}>Click me!</button>
}

export default UpdaterRef
