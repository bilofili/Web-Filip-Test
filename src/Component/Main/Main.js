import { Footer } from "../Footer"
import Head from "../Head"
import { About } from "./About"
import { Skill } from "./Skill"
import { ThreeBlock } from "./ThreeBlock"

export const Main = () => {
    return (
        <main>
            <Head />
            <About /> 
            <ThreeBlock />
            <Skill /> 
            <Footer /> 
        </main>
    )
}