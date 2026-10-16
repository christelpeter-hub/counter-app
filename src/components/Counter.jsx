import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/slices/counterSlice'

function Counter() {


  const {count}=useSelector(state=>state.counterReducer)
  const dispatch=useDispatch()
  const  inputRef= useRef()

  const handleIncrement=()=>{
    const amount = inputRef.current.value 
    if (amount){
      dispatch(incrementByAmount(+amount))
      inputRef.current.value =""
    }else{
      alert("Enter valid amount!!!")
    }

  }

  return (
    <div style={{height:"100vh"}} className='bg-dark text-light d-flex justify-content-center align-items-center'>
      <div className='border rounded p-5 d-flex justify-content-center align-items-center flex-column'>
          <h1 style={{fontSize:'100px'}}>{count}</h1>
          <div style={{width:'500px'}} className='d-flex justify-content-between my-5'>
            <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>Decrement</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-success'>Increment</button>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <input ref={inputRef} type="text" placeholder='Enter the amount to be incremented' className='form-control'/>
              <button onClick={handleIncrement} className='btn btn-primary ms-3'>Increment by amount</button>    
                  </div>   

      </div>
    </div>
  )
}

export default Counter