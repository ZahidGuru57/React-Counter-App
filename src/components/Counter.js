import  { useState } from 'react';

export default function Counter() {

    const [count, setCount] = useState(0);

    const handleIncrement = () => (
        setCount (count + 1)
    )

    const handleDecrement = () => {
        if(count > 0){
            setCount (count - 1)
        }
    }

  return (
    <div className='d-flex justify-content-center align-items-center' style = {{height: "100vh"}}>
        <div  style={{padding: "100px 20px 120px 20px", backgroundColor: "orangeRed", border: "3px dashed black", borderRadius: "30px"}}>
        <h1 style={{color: "white"}}>Counter App</h1>
            <h1 className='text-center' style={{fontSize: "50px", color: "white"}}>{count}</h1>
            <div className='d-flex'>
                <button onClick={handleIncrement} className='btn btn-success me-3'>Increment</button>
                <button onClick={handleDecrement} className='btn btn-danger ms-3'>Decrement</button>
            </div>
        </div>
    </div>
  )
}
