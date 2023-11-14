import React, { useState } from 'react';
import Left from './Components/Left';
import Right from './Components/Right';
import Complete from './Components/Complete';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';






const App = () => {
  const [holderName, setHolderName] = useState('JANE APPLESEED')
  const [number, setnumber] = useState('0000  0000  0000  0000')
  const [month, setMonth] = useState('00')
  const [year, setYear] = useState('00')
  const [cvv, setCvv] = useState('000')
  return (
    
    <div className=' min-h-[100svh] grid grid-cols-[30%_1fr]  Ts:grid-cols-[unset] Ts:grid-rows-[30%_1fr]'>
      <Left holderName={holderName} number={number} month={month} year={year} cvv={cvv}/>
      <Router>
        <Routes>
          <Route path='/' element= {<Right  holderName={setHolderName} number={setnumber} months={setMonth} year={setYear} cvv={setCvv} />}/>
          <Route path='/complete' element= {< Complete holderName={setHolderName} number={setnumber} months={setMonth} year={setYear} cvv={setCvv}/>}/>
        </Routes>
      </Router>
     
      
    </div>
    
  )
}

export default App