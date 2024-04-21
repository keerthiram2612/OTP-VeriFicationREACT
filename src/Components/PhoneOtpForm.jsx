import React, { useState } from 'react'

function PhoneOtpform() {

  const [phoneNumber,setPhoneNumber]=useState("")
  const handlePhoneNumber=(event)=>{
    setPhoneNumber(event.target.value);
  }
  const handlePhoneSubmit=()=>{

  }
  return (
    <div>
      <form onSubmit={()=>{}}>
        <input type='text' value={phoneNumber}
        onChange={handlePhoneNumber} placeholder={"Enter Phone Number"}></input>
        <button type="submit"></button>
      </form>
    </div>
  )
}

export default PhoneOtpform
