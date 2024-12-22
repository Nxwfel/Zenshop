import React from 'react';
import './body2.css';
import Pic3 from './Pic3.jpg'
import Pic4 from './image2.webp'
import Pic5 from './image3.jpg'
import Pic6 from './image4.jpg'

function Body2() {
    return(
        <div className='Body2'>
            <header className='Header2'>
                <h1 className='Title2'>we are</h1>
                <h1 className='Title2 Part2'>zens</h1>
            </header>
            <div className='Center-Elements'>
                <div className='Left-Element'><img src={Pic3} className='image3'/></div>
                <div className='Center-Element'>
                    <p> we make impermiable chairs that don't get wet at all u can use it as a surfboard or as a survival tool in case of boat drawning lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat quasi, repellendus eveniet tempore ratione veritatis ipsa aliquid omnis a nisi, dolores vero ullam iste labore soluta eum quidem moll</p>
                    <div className='images-wrapper'>
                      <div className='Box'><img src={Pic4} className='box-img'/></div> 
                      <div className='Box'><img src={Pic5} className='box-img'/> </div> 
                      <div className='Box'><img src={Pic6} className='box-img'/> </div>
                    </div>
                </div>
                <div className='Right-Element'><button className='button2'>
  <p>Subscribe</p>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="4"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    ></path>
  </svg>
</button></div>
            </div>
            
        </div>
    );}

export default Body2;  