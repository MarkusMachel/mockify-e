import ComponentD from './ComponentD'

function ComponentC() {
  /* useContext() = React Hook that allows you to share values
  betwenn multiple levels of components
  without passing props through each level
  */

  return (
    <div className="box">
      <h1>ComponentC</h1>
      <ComponentD />
    </div>
  )
}

export default ComponentC
