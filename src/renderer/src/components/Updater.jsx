/* updater function = a function passed as an argument to useState() usually
  ex. setYear(arrow function)
  Allows for safe updates based on the previous state
  Used with multiple state updates and asynchronous functions
  Good practice to use updater functions
*/

import { useState } from 'react'

function Updater() {
  const [count, setCount] = useState(0)
  //update object in react
  const [car, setCar] = useState({ year: 2024, make: 'Mercedes-Benz', model: 'GLB 35 AMG' })

  function handleYearChange(event) {
    setCar((prevCar) => ({ ...prevCar, year: event.target.value }))
  }

  function handleModelChange(event) {
    setCar((prevCar) => ({ ...prevCar, model: event.target.value }))
  }

  function handleMakeChange(event) {
    setCar((prevCar) => ({ ...prevCar, make: event.target.value }))
  }

  function increment() {
    setCount((c) => c + 1)
  }

  return (
    <>
      <div>
        <p>
          Your favorite car is: {car.make} {car.model} {car.year}
        </p>
        <input type="number" value={car.year} onChange={handleYearChange} />
        <br />
        <input type="text" value={car.make} onChange={handleMakeChange} />
        <br />
        <input type="text" value={car.model} onChange={handleModelChange} />
        <br />
      </div>
      <div>
        <p>Current count: {count}</p>
        <button onClick={increment}>increment</button>
      </div>
    </>
  )
}

export default Updater
