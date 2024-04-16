import React, { useState } from 'react'

function PhoneOtpform() {

  const [phoneNumber,setPhoneNumber]=useState("")
  return (
    <div>
      <form onSubmit={()=>{}}>
        <input type='text' value={phoneNumber}></input>
      </form>
    </div>
  )
}

export default PhoneOtpform
