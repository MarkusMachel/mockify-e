import ComponentC from './ComponentC'

function ComponentB() {
  /* useContext() = React Hook that allows you to share values
  betwenn multiple levels of components
  without passing props through each level
  */

  return (
    <div className="box">
      <h1>ComponentB</h1>
      <ComponentC />
    </div>
  )
}

export default ComponentB
