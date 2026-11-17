import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    const [values, setValues] = useState({ first: "", last: "" })
    // const [values, setValues] = useState([])
    const add = () => {
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
    }

    const subtract = () => {
        setCount(prev => prev - 1)
        setCount(prev => prev - 1)
    }

    // const updateValues = (newVal) => {
    //     setValues(prev => [...prev, newVal])
    // }

    const updateValues = () => {
        setValues({ ...values, last: "Allaputa" })
        setValues(prev => ({ ...prev, last: "Allaputa" }))
    }


    return (
        <section>
            <h1>{count}</h1>
            <div className="row">
                <button onClick={add}>+</button>
                <button onClick={subtract}>-</button>
            </div>
            <div className="row">
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </section>
    )
}

export default Counter