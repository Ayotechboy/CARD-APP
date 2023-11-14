import React from 'react'
import Icon from '../Assets/images/icon-complete.svg'
import { useNavigate } from 'react-router-dom'

const Complete = ({holderName,number,months, year, cvv}) => {
  
  const navigate = useNavigate();
  const resetCardDetails = async()=>{
        await new Promise((resolve)=> setTimeout(resolve, 1000));
        holderName('JANE APPLESEED')
        number('0000  0000  0000  0000')
        months('00')
        year('00')
        cvv('000')  
        
        navigate('/')
        

    }
  return (
    <div className=' flex justify-center flex-col items-center tracking-widest font-semibold relative Ss:left-[7rem] Us:left-[7rem] Ts:left-[0rem] mt-[5rem]'>
      <img className=' h-[5rem] w-[5rem]' src={Icon} alt="" /><br />
      <h1 className=' text-[2rem] font-medium'>THANK YOU!</h1>
      <p className=' text-gray-400 text-[1rem]'>We've added your card details</p><br /><br />
      <button onClick={resetCardDetails} className=' w-[23rem] h-[3.5rem] bg-[#21082f] rounded-[5px] text-white tracking-widest text-[15px] ' type="submit">Continue</button>

    </div>
  )
}

export default Complete