import './Counter.css'
import { useState } from 'react'


export default function Counter() {
    const [counter , setCounter]= useState(0)
    const increament = ()=>{
        setCounter(counter +1)
    }
    const decreament = ()=>{
        setCounter(counter - 1)
    }
    const reset = ()=>{
        setCounter(0)
    }
    return (

        
        <div className='MAIN'>
            <div className='btndiv'>
                <button 
                onClick={increament}
                className='btn'
                >+</button>
                <h1>{counter}</h1>
                <button className='btn'
                onClick={decreament}
                >-</button>


            </div>
            <button
            onClick={reset}
            >Reset</button>


        </div>
    )
}


