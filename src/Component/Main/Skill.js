import html from '../Skill_Img/html.png';
import css from '../Skill_Img/css-3.png';
import javaScript from '../Skill_Img/js.png';
import typeScipt from  '../Skill_Img/typescript.png';
import react from '../Skill_Img/structure.png';
import cSharp from '../Skill_Img/c-sharp.png';
import bootstrap from '../Skill_Img/bootstrap.png'
import figma from '../Skill_Img/figma.png'


export const Skill = () => {
    return (
        <div className="skill">
            <h2>Skills</h2>
            <div className="skill-bl">
                <div>
                        <img src={html} alt="Html" className="icon-sk"/>
                        <img src={css} alt="Css" className="icon-sk"/>
                        <img src={javaScript} alt="javaScript" className="icon-sk"/>
                        <img src={typeScipt} alt="TypeScript" className="icon-sk"/>
                </div>

                <div>
                        <img src={react} alt="React" className="icon-sk"/>
                        <img src={cSharp} alt="C#" className="icon-sk"/>
                        <img src={bootstrap} alt="Bootstrap" className="icon-sk"/>
                        <img src={figma} alt="Figma" className="icon-sk"/>
                </div>
            </div>
        </div>
    );
}