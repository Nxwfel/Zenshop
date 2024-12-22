import React from "react";
import Body from "./body";
import Body2 from "./body2";
import { useRef } from "react";   
import { useScroll } from 'framer-motion';

;
export default function Page() {
 const container = useRef();
 const {scrollYProgress} = useScroll({
    target: container,
    offset:['start start', 'end end']
 });

    return (

      <main ref={container}>

        <Body scrollYProgress={scrollYProgress}/>

        <Body2 scrollYProgress={scrollYProgress}/>

      </main>

    );
}