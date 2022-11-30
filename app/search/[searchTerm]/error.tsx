'use client'

import { useEffect } from "react"

interface propsType {
  error: Error; 
  reset: () => void
}

const Error = ({error, reset}: propsType) => {

  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  )
}

export default Error