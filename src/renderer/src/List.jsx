/* eslint-disable react/prop-types */
function List(props) {
  const itemList = props.items

  const listItem = itemList.map((fruit, i) => (
    <li key={i}>
      {fruit.name}: &nbsp; {fruit.calories} calories
    </li>
  ))

  return <ul>{listItem}</ul>
}

export default List
