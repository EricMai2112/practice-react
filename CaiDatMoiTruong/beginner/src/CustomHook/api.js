export const getUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          name: 'Mai Cong Thanh',
          age: 20,
          address: 'Ho Chi Minh'
        },
        status: 200
      })
    }, 1500)
  })
}
