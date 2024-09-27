import { useEffect, useState } from "react";

export const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      console.count("Stopwatch")
      setSeconds((seconds) => seconds + 1)
    }, 1000);

    return () => {
      clearInterval(timerId)
    }
  }, [])

  return <div>{seconds} seconds have passed</div>
}
