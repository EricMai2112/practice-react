import React, { useEffect, useLayoutEffect, useState } from 'react'

export default function Count() {
  const [count, setCount] = useState<number>(0)

  const handleClick = () => {
    setCount((prev) => prev + 1)
  }

  useLayoutEffect(() => {
    if (count == 4) {
      setCount(0)
    }
  }, [count])

  return (
    <div>
      <section>Count: {count}</section>
      <button onClick={handleClick}>Click me to increase</button>
    </div>
  )
}
