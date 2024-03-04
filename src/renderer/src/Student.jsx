/* eslint-disable react/prop-types */
function Student(props) {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
      // eslint-disable-next-line react/prop-types
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? 'Yes' : 'No'}</p>
    </div>
  )
}

export default Student
