import React from 'react';
import './body.css';
import App from './App';
import Pic from './Pic-face-removebg.png';
import Pic2 from './Pic-pile-removebg-preview.png';
import { useTransform , motion } from 'framer-motion';
function Body({scrollYProgress}) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);
  return (
    <motion.div style={{scale , rotate}} className="Body">
        <App />
     <h1 className='Title1'>zenspace</h1>
     <img id='Center' src={Pic} />  
     <div 
     className='Pics-wrapper'
     >
      <div
       className='Pic-wrapper'
       role='button'
        onClick={() => {
          let Main_Pic = document.getElementById('Center');
          Main_Pic.src = Pic ;
        }}
       >
      <img
       src={Pic} 
       className='Pic'
       />
       </div>
      <div 
      className='Pic-wrapper'
      role='button'
      onClick={() => {
        let Main_Pic = document.getElementById('Center');
        Main_Pic.src = Pic2;
      }}
      >
      <img src={Pic2} className='Pic'/></div>
     </div>
     <div className='text-wrapper'>
      <button class="button type1">
      <span class="btn-txt">Hello</span>
      </button>
      <p>The impermiable chair is one of the best chairs,u can take a shower and swim with it without damaging or making it wet </p>
     </div>
    </motion.div>
  );
}
export default Body;