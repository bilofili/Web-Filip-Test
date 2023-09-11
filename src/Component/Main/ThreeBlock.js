import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import barber from "./IMG_2931.JPG";
import reviews from "./2023-09-10 21.21.56.jpg";
import recept from "./Recipe.jpg";

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
            <img src={barber} alt="" className='link-img' />
            <h3>Barber Shop</h3>
            </motion.div>

            <motion.div 
            ref={refTwo}
            initial={{ x: 60, y: 0, opacity: 0 }}
            animate={inViewTwo ? {opacity: 1, x: 0, y: 0} : {opacity: 0, x: 60, y: 0 }}  
            transition={{ duration: 1.3 }}
            className="block">
            <img src={reviews} alt="" className='link-img' />
            <h3>Reviews App</h3>
            </motion.div>

            <motion.div
            ref={refThree}
            initial={{ x: 60, y: 0, opacity: 0 }}
            animate={inViewThree ? {opacity: 1, x: 0, y: 0} : {opacity: 0, x: 60, y: 0 }}  
            transition={{ duration: 1.6 }}
            className="block">
            <img src={recept} alt="" className='link-img' />
            <h3>Recipes App</h3>
            </motion.div>
        </div>
    );
}