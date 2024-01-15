import { useEffect, useState } from "react"
import Footer from '@/components/Footer'
import Header from "@/components/Header"

// We want to setup a counter
// After every one second the number increases by one
// We want to display that number on the screen

export default function ExampleFive() {
  const [count,setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count +1)
    }, 1000)
    return() => clearInterval(interval)
  }, [count])

return (
  <>
  <Header/>
  <main>
    <div style={{
      display: "flex",
      margin: "auto",
      textAlign: "center"
    }}>
      <h1>Number Counter</h1>
      <h3>Example using setInterval</h3>
      <div>{count}</div>
    </div>
  </main>
  <Footer/>
  </>
)
  }

  