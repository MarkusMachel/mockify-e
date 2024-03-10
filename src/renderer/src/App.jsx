// import Button from './Button/Button'
// import Card from './Card'
// import Food from './Food'
// import Footer from './Footer'
// import Header from './Header'
// import Student from './Student'
// import UserGreeting from './UserGreeting'

import List from './List'
import Button from './Button'
import MyHookComp from './MyHookComp'
import Counter from './Counter'
import OnEventChange from './OnEventChange'
import Versions from './components/Versions'
import ColorPicker from './components/ColorPicker'
import Updater from './components/Updater'
import UpdaterArray from './components/UpdaterArray'
import UpdateArrayOfObjects from './components/UpdateArrayOfobjects'
import ToDoList from './components/ToDoList'
import UpdateUseEffect from './components/UpdateUseEffect'

// React hook = Special function that allows functional components
// to use React features withou writing class components (React v16.8)
// (useState, useEffect, useContext, useReducer, useCallback, and more...)

// useState() = A React hook that allows the creation of a stateful variable
// AND a setter function to update its value in the Virtual DOM.
// [name, setName]

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
      <UpdateUseEffect />
      <ToDoList />
      <UpdateArrayOfObjects />
      <UpdaterArray />
      <Updater />
      <ColorPicker />
      <OnEventChange />
      <Counter />
      <MyHookComp />
      <List items={fruits} category="Fruits" />
      <Button />
      {/* <Card />
      <Header />
      <Button />
      <Food />
      <Student name="spongebob" age={30} isStudent={true} />
      <UserGreeting isLoggedIn={true} username="BroCode" />
      <Footer /> */}
      <Versions />
    </>
  )
}

export default App
