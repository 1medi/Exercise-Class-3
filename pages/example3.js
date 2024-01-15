import { useEffect, useState } from "react"
import Footer from '@/components/Footer'
import Header from "@/components/Header"

export default function ExampleThree() {

  const [number, setNumber] = useState(0);
  const colors = ["red", "orange", "green", "aqua", "violet", "blue"];
  useEffect(() => {
    if (number > colors.length - 1) {
      setNumber(0);
      console.log("Changing number back to 0" + colors[0]);
    } else {
      console.log("Changing number value" + colors[(number)]);
    }
  }, [number])
  return (
    <>
      <Header />
      <main>
        <h1>Example 3</h1>
        <button style={{ backgroundColor: colors[number] }} onClick={() => setNumber(number + 1)}>Increment Number</button>
        <div>
          {number}
        </div>
      </main>
      <Footer />
    </>
  )
}