"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import {Section1} from './components/section1'
import Section2 from "./components/section1"

function page() {
    // 1.hooks
    // 2.states
    const[count,setCount]=useState(0)
    const handleClick =(c:number)=>setCount(c)
  return (
    <div className=''>
    
    <h1>Teams page</h1> 
   <div>
   {
      count  
    }
   </div>
    <Button onClick={()=>handleClick(20)} className='button1' id='btn2'> increase count</Button>
     <Section1/>
     <Section2/>
  
    </div>
  )
}

export default page
