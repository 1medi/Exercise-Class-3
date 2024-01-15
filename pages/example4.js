import { useEffect, useState } from "react"
import Footer from '@/components/Footer'
import Header from "@/components/Header"

export default function ExampleFour() {

  const [number, setNumber] = useState(0);
  const [color, setColor] = useState("gray")

  const [trigger, setTrigger] = useState(false);

  //function
  
  const HandleChange = () => {
    if (number > 2) {
      setColor("orange")
    }
    console.log(number)
  }
  useEffect(() => {
    var interval;
    if (trigger) {
      interval = setInterval(() => {
        HandleChange()
        setTrigger(false);
      }, 3000) // After 3 seconds it will console log the stuff below
    }
    console.log(number);
    console.log(trigger);

    //clearing interval so doesnt get stuck in loop

    return () => clearInterval(interval);
  }, [trigger])
  return (
    <>
      <Header />
      <main>
        <h1>Example 4</h1>
        <button onClick={() => {
          setNumber(number + 1);
          setTrigger(true);
        }}>Add Number</button>
        <h2 style={{ color: color }}>Change the text color</h2>
        {
          number > 1 && <div style={{
            backgroundColor: `${color}`,
            lineHeight: 20,
            padding: 20
          }}>
            box
          </div>
        }
        <div>
          {number}
        </div>
      </main>
      <Footer />
    </>
  )
}