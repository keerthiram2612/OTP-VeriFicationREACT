import React, { useState } from 'react'

function PhoneOtpform() {

  const [phoneNumber,setPhoneNumber]=useState("")
  const [showOtp,setShowOtp]=useState(false)

  const handlePhoneNumber=(event)=>{
    setPhoneNumber(event.target.value);
  }
  const handlePhoneSubmit=(event)=>{
    event.preventDefault();

    //phone validations
    const regex = /[^0-9]/g;
    if(phoneNumber.length<10|| regex.test(phoneNumber)){
      alert("Invalid Phone Number");
      return;
    }
    //call api
    //show otp field
    setShowOtp(true);

  }
  return (
    <div>
      {!showOtp ?(
      <form onSubmit={handlePhoneSubmit}>
        <input type='text' value={phoneNumber}
        onChange={handlePhoneNumber} placeholder="Enter Phone Number"></input>
        <button type="submit">Submit</button>
      </form>):(<div>
        <p>Enter OTP sent to {phoneNumber} </p></div>)}
    </div>
  )
}

export default PhoneOtpform
