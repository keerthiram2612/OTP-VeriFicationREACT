import React, { useState } from 'react'

function PhoneOtpform() {

  const [phoneNumber,setPhoneNumber]=useState("")
  const handlePhoneNumber=()=>{
    
  }
  return (
    <div>
      <form onSubmit={()=>{}}>
        <input type='text' value={phoneNumber}
        onChange={handlePhoneNumber} placeholder={"Enter Phone Number"}></input>
      </form>
    </div>
  )
}

export default PhoneOtpform