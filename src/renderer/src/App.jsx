import Button from './Button/Button'
import Card from './Card'
import Food from './Food'
import Footer from './Footer'
import Header from './Header'
import Student from './Student'
import UserGreeting from './UserGreeting'

function App() {
  return (
    <>
      <Card />
      <Header />
      <Button />
      <Food />
      <Student name="spongebob" age={30} isStudent={true} />
      <UserGreeting isLoggedIn={true} username="BroCode" />
      <Footer />
    </>
  )
}

export default App
