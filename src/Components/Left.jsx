import "../App.css"
import Back from '../Assets/images/bg-card-back.png'
import Front from '../Assets/images/bg-card-front.png'
import Logo from '../Assets/images/card-logo.svg'


const Left = ({holderName,number,month,year,cvv}) => {
 
  return (
    <div  className='cardWay grid place-content-center  text-white relative' >
      <div className=" w-[27rem] h-[14rem] Ts:w-[19rem] Ts:h-[9rem] relative left-[12rem] Fs:left-[6rem] Os:left-[20rem] Ps:left-[12rem] Ss:left-[7rem] Ts:top-[12.5rem] Ts:left-[0.1rem] Ts:z-[1]">
       <img className=" " src={Front} alt=""  />

          
       <div className=" w-full h-full grid absolute top-0">
          <div className=" w-full px-[2.5rem] py-[2rem] Ts:py-[1rem]">
          <img src={Logo} className=" Ts:w-[4rem]" alt="" /><br /> <br />
          <h1 className=" text-white text-[32px] Ts:text-[21px] font-medium tracking-widest">{number}</h1>
            </div>
      
         <div className=" text-white flex justify-between text-[15px] Ts:text-[10px] px-[2.5rem] my-[-2rem] Ts:my-[-1rem] tracking-widest"><p>{holderName}</p>
          <p>{month}/{year}</p></div> 
          
       </div>

      </div>
      
      <div className=" w-[27rem] h-[14rem] Ts:w-[19rem] Ts:h-[9rem] mt-[2rem] relative left-[20rem] Fs:left-[12rem] Os:left-[30rem] Ps:left-[20rem] Ss:left-[7rem] Ts:bottom-[5rem] Ts:left-[1rem]">
        <img className=" " src={Back} alt="" />
          <h1 className=" text-center absolute top-[6.5rem] left-[22rem] Ts:left-[15rem] Ts:top-[4.5rem]">{cvv}</h1>

      </div>

    </div>
  )
}

export default Left