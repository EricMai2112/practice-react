import React, { useState } from 'react'

export default function User() {
  const [firstName, setFirstName] = useState('Alex')
  const [age, setAge] = useState(24)
  const [address, setAddress] = useState({
    nation: 'Viet Nam',
    city: {
      street: '100 bach dang',
      house: 'building'
    }
  })

  const increaseAge = () => {
    setAge((prevAge) => prevAge + 1)
  }

  // const changeCity = () => {
  //   setAddress({
  //     nation: 'Viet Nam',
  //     city: 'Ha Noi'
  //   })
  // }

  // const changeCity = () => {
  //   setAddress((prevAddress) => ({
  //     ...prevAddress,
  //     city: {
  //       street: '200 bach dang',
  //       house: 'building'
  //     }
  //   }))
  // }

  const changeCity = () => {
    setAddress((prevAddress) => {
      {
        const newCity = { ...prevAddress.city }
        newCity.street = '200 bach dang'
        return {
          ...prevAddress,
          city: newCity
        }
      }
    })
  }

  return (
    <div>
      <h1>User class component</h1>
      <ul>
        <li>First name: {firstName}</li>
        <li>First name: {age}</li>
        <li>Nation: {address.nation}</li>
        <li>Street: {address.city.street}</li>
        <li>House: {address.city.house}</li>
      </ul>
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={changeCity}>Change city</button>
    </div>
  )
}
