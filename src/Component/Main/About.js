import { Link } from 'react-router-dom';
import myImg from './bilobrov.png';

export const About = () => {
    return (
        <div className="about">
            <div className="about-child">
                <h2>About me</h2>
                <p>Passionate JavaScript and React enthusiast with a strong desire to contribute to innovative projects. Proficient in leveraging the power of these technologies to create dynamic and engaging web applications. Adept at problem-solving and continuously enhancing skills through self-directed learning. Open-minded and adaptable, eagerly embracing new challenges in the ever-evolving tech landscape.</p>
                <Link to='/contact'>Contact</Link>
            </div>
        <img src={myImg} alt='myPhoto' className='img-my' />
        </div>
    )
}