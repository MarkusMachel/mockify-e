// import Button from './Button/Button'
// import Card from './Card'
// import Food from './Food'
// import Footer from './Footer'
// import Header from './Header'
// import Student from './Student'
// import UserGreeting from './UserGreeting'

import List from './List'
import Button from './Button'

function App() {
  const fruits = [
    { name: 'apple', calories: 95 },
    { name: 'orange', calories: 45 },
    { name: 'banana', calories: 105 },
    { name: 'coconut', calories: 159 },
    { name: 'pineapple', calories: 37 }
  ]

  return (
    <>
      <List items={fruits} category="Fruits" />
      <Button />
      {/* <Card />
      <Header />
      <Button />
      <Food />
      <Student name="spongebob" age={30} isStudent={true} />
      <UserGreeting isLoggedIn={true} username="BroCode" />
      <Footer /> */}
    </>
  )
}

export default App
