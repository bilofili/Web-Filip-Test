import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import web_icon from './web-development.png'

export const ThreeBlock = () => {

    const [refOne, inViewOne] = useInView(true);
    const [refTwo, inViewTwo] = useInView(true);
    const [refThree, inViewThree] = useInView(true);
 
        
    return (
        <div className="three-block">
            <motion.div
            ref={refOne}  
            initial={{ x: 60, y: 0, opacity: 0 }}
            animate={inViewOne? {opacity: 1, x: 0, y: 0} : {opacity: 0, x: 60, y: 0 }}  
            transition={{ duration: 1 }}
            className="block">
            <p>I have over 3 of experience in web development.</p>
            </motion.div>

            <motion.div 
            ref={refTwo}
            initial={{ x: 60, y: 0, opacity: 0 }}
            animate={inViewTwo ? {opacity: 1, x: 0, y: 0} : {opacity: 0, x: 60, y: 0 }}  
            transition={{ duration: 1.3 }}
            className="block">
            <p>My specialization is in developing custom websites using modern technologies.</p>
            <img src={web_icon} alt="experienc" className='webIcon' />
            </motion.div>

            <motion.div
            ref={refThree}
            initial={{ x: 60, y: 0, opacity: 0 }}
            animate={inViewThree ? {opacity: 1, x: 0, y: 0} : {opacity: 0, x: 60, y: 0 }}  
            transition={{ duration: 1.6 }}
            className="block">
            <p>I have worked on a variety of projects, from small business websites to large web applications.</p>
            </motion.div>

        </div>
    );
}