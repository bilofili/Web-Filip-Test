import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import web_icon from './web-development.png'

export const ThreeBlock = () => {

    const [ref, inView] = useInView({
        triggerOnce: true, // Анимация будет срабатывать только один раз, когда блок становится видимым
    });
 
        
    return (
        <div className="three-block">
            <motion.div
            ref={ref}  
            initial={{ x: 120, y: 0, opacity: 0 }}
            animate={inView ? {opacity: 1, x: 0, y: 0} : {opacity: 0, x: 0, y: 0 }}  
            transition={{ duration: 1.5 }}
            className="block">
            <p>I have over 3 of experience in web development.</p>
            </motion.div>

            <motion.div 
            ref={ref}
            initial={{ x: 120, y: 0, opacity: 0 }}
            animate={inView ? {opacity: 1, x: 0, y: 0} : {opacity: 0, x: 0, y: 0 }}  
            transition={{ duration: 2 }}
            className="block">
            <p>My specialization is in developing custom websites using modern technologies.</p>
            </motion.div>

            <motion.div
            ref={ref}
            initial={{ x: 120, y: 0, opacity: 0 }}
            animate={inView ? {opacity: 1, x: 0, y: 0} : {opacity: 0, x: 0, y: 0 }}  
            transition={{ duration: 2.5 }}
            className="block">
            <p>I have worked on a variety of projects, from small business websites to large web applications.</p>
            <img src={web_icon} alt="experienc" className='webIcon' />
            </motion.div>

        </div>
    );
}