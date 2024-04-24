import React, { useState } from 'react'
import OtpInput from './OtpInput'
function PhoneOtpform() {

  const [phoneNumber,setPhoneNumber]=useState("")
  const [showOtp,setShowOtp]=useState(false)
  const onOtpSubmit = (otp)=>{
    console.log("Login Successful",otp)
  }
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
      {!showOtp ?(  //when otp is not true
      <form onSubmit={handlePhoneSubmit}>
        <input type='text' value={phoneNumber}
        onChange={handlePhoneNumber} placeholder="Enter Phone Number"></input>
        <button type="submit">Submit</button>
      </form>):(<div>
        <p>Enter OTP sent to {phoneNumber} </p>
        <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </div>)}
    </div>
  )
}

export default PhoneOtpform
