import { useEffect, useRef, useState } from "react"

const OtpInput = ({length = 4, onOtpSubmit=()=>{}})=>{
    const [otp,setOtp]=useState(new Array(length).fill(""));
    const inputRefs = useRef([]);

    useEffect(()=>{
        if(inputRefs.current[0]){
            inputRefs.current[0].focus();
        }
    })
    
    console.log(otp);
    const handleChange =(index,e)=>{
       const value = e.target.value;
       if(isNaN(value))return

       const newOtp = [...otp];
       //allow only one input 
       newOtp[index] = value.substring(value.length-1);
       setOtp(newOtp);
       //submit trigger 
       const combinedOtp = newOtp.join("");
       console.log(newOtp,combinedOtp);
    }
    const handleClick =()=>{

    }
    const handleKey =()=>{

    }
   console.log(otp);
   return<div>
    {
        otp.map((value,index)=>{
            return<input
             key ={index} type="text"
             ref = {(input)=>(inputRefs.current[input]=input)} value={value}
            onChange={(e)=>handleChange(index,e)}
            onClick={()=>handleClick(index)}
            onKeyDown={(e)=>handleKey(index,e)}
            className="otpInput"/>
        })
    }
   </div>
}
export default OtpInput;

