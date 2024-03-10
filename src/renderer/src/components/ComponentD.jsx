import { useContext } from 'react'
import { UserContext } from './ComponentA'

function ComponentD() {
  /* useContext() = React Hook that allows you to share values
  betwenn multiple levels of components
  without passing props through each level
  */
  const user = useContext(UserContext)

  return (
    <div className="box">
      <h1>ComponentD</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  )
}

export default ComponentD
