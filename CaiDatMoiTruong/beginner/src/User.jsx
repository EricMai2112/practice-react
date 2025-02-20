import React, { createContext, useEffect, useState } from 'react'
import UserProfile from './UserProfile'

const getAddress = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        nation: 'USA',
        city: {
          street: '100 Califonia',
          house: 'Skywrapper'
        }
      })
    }, 3000)
  })
}

export const UserContext = createContext()

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

  // useEffect(() => {
  //   console.log(document.getElementsByTagName('li'))
  //   console.log('useEffect')
  // })

  useEffect(() => {
    getAddress().then((res) => {
      setAddress((prevAddress) => {
        const newAddress = { ...prevAddress }
        newAddress.city = res.city
        return newAddress
      })
    })
    // console.log('useEffect')
  }, [])

  return (
    <div>
      <h1>User class component</h1>
      <UserContext.Provider
        value={{
          firstName,
          age,
          address,
          increaseAge
        }}
      >
        <UserProfile />
      </UserContext.Provider>
      <button onClick={changeCity}>Change city</button>
    </div>
  )
}
