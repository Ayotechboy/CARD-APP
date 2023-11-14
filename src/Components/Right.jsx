import React from 'react';
import { useFormik } from 'formik';
import "../App.css"
import { basicSchema } from '../Schemas';
import { useNavigate } from 'react-router-dom';
const Right = ({holderName,number,months,year,cvv}) => {

  const navigate = useNavigate()
  const onSubmit = async(data, actions)=>{
    await new Promise((resolve)=> setTimeout(resolve, 1000));
    actions.resetForm()

    holderName(values.holderName.toUpperCase())
    number(values.cardnumber)
    months(values.month.length === 1 ? '0' + values.month : values.month)
    console.log("0" + values.month);
    year(values.year.toString().slice(-2));
    cvv(values.cvv)

    navigate('/complete')
  }
  const {values, handleBlur, handleChange, handleSubmit, errors, touched, isSubmitting, setFieldValue} = useFormik({
    initialValues: {
      holderName:'',
      cardnumber: '',
      month: '',
      year: '',
      cvv: '',
      
    },
    validationSchema: basicSchema,onSubmit,
    
 })
 console.log(errors);

  return (
    <div className=' flex justify-center items-center tracking-widest font-medium text-[18px]'>  

      <form onSubmit={handleSubmit}className=' flex flex-col gap-[1rem] relative Ss:left-[6rem] Ts:left-[0rem] Ts:mt-[5rem] ' action="">

      <div className=' '>
      <label className=' text-[11px] font-bold' htmlFor="CARDHOLDER NAME">CARDHOLDER NAME</label> <br />
          <input className={`${errors.holderName && touched.holderName ? 'input-error':''} border-gray-300 border-[1px] tracking-widest rounded-[5px] w-[20rem] h-[2.5rem] pl-3`}
          value={values.holderName}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text" 
          name="" 
          placeholder='e.g Jane Appleseed' 
          id="holderName" />
          {errors.holderName && touched.holderName && <p className='error text-red-500 text-[12px] italic tracking-normal'>{errors.holderName}</p>}
        </div>

<div className=''>

<label className=' text-[11px] font-bold' htmlFor="CARD NUMBER">CARD NUMBER</label> <br />

          <input className={`${errors.cardnumber && touched.cardnumber ? 'input-error':''} border-gray-300 border-[1px] tracking-widest rounded-[5px] w-[20rem] h-[2.5rem] pl-3`}
          value={values.cardnumber.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim()}
          onChange={(e) => setFieldValue("cardnumber", e.target.value.slice(0, 19))}
          onBlur={handleBlur}

          type="text"
           name="" 
          placeholder='e.g 1234 5678 9874 0000' 
          id="cardnumber" />
          {errors.cardnumber && touched.cardnumber && <p className='error text-red-500 text-[12px] italic tracking-normal'>{errors.cardnumber}</p>}
</div>

<div className=' date'>

<div className=' text-[11px] font-bold flex gap-[4rem]'>
<label  htmlFor="AGE">EXP.DATE (MM/YY) </label>
<label  htmlFor="CVV">CVV </label> <br />
</div>

<div className=' dateinput flex gap-3'>

<div className='grid'>

<input className={`${errors.month && touched.month ? 'input-error':''} border-gray-300 border-[1px] tracking-widest rounded-[5px] w-[5rem] h-[2.5rem] pl-3`}
          value={values.month}
          onChange={(e) => setFieldValue("month", e.target.value.slice(0, 2))}
          onBlur={handleBlur}
          type="number"
          name=""
          placeholder='MM'
          id="month" />
          {errors.month && touched.month && <p className='error text-red-500 text-[12px] italic tracking-normal'>{errors.month}</p>} 
</div>
         


    <div className=' grid'>
<input className={`${errors.year && touched.year ? 'input-error':''} border-gray-300 border-[1px] tracking-widest rounded-[5px] w-[5rem] h-[2.5rem] pl-3`}
          value={values.year}
          onChange={(e) => setFieldValue("year", e.target.value.slice(0, 4))}
          onBlur={handleBlur}
          type="number" 
          name="" 
          placeholder='YY' 
          id="year" /> 
          {errors.year && touched.year && <p className='error text-red-500 text-[12px] italic tracking-normal'>{errors.year}</p>}
    </div>
          
<div className='grid'>
  
<input className={`${errors.cvv && touched.cvv ? 'input-error':''}  border-gray-300 border-[1px] tracking-widest rounded-[5px] w-[7.7rem] h-[2.5rem] pl-3`}
          value={values.cvv}
          onChange={(e) => setFieldValue("cvv", e.target.value.slice(0, 3))}
          onBlur={handleBlur}
          type="number" 
          name="" 
          placeholder='e.g 123' 
          id="cvv" />
          {errors.cvv && touched.cvv && <p className='error text-red-500 text-[12px] italic tracking-normal'>{errors.cvv}</p>}       
</div> 

</div>
</div>
    <button disabled={isSubmitting} className=' w-[20rem] h-[2.5rem] bg-purple-950 rounded-[5px] text-white tracking-widest text-[13px]' type="submit">Confirm</button>
      </form>
     
    </div>
  )
}

export default Right