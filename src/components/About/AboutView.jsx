import { useEffect, useState } from "react"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiRedis } from "react-icons/di"
import { BiLogoPython, BiLogoJavascript, BiLogoReact, BiLogoMongodb,  BiLogoPostgresql, BiLogoDjango, BiLogoGoLang} from "react-icons/bi";
import Modal from "../Modal/Modal";

export default function AboutView(props){
   const [isActiveAbout, setIsActiveAbout] = useState(true)
   const [isActiveSkills, setIsActiveSkills] = useState(true)

   useEffect(() => {
    setIsActiveAbout(true)
    setIsActiveSkills(true)
   }, [])
   

    if (isActiveAbout && isActiveSkills) {
        return (
            <div className="flex flex-wrap gap-16">
                <Modal event={() => setIsActiveAbout(false)} w={'w-[30rem]'} label="About">
                    <div className="p-10 flex flex-col gap-8">
                        <div>
                            <h1 className="text-4xl ">Enrique Ferreira</h1>
                            <h2 className="text-xl text-purple-300">Web Developer</h2>
                        </div>
                        <p className="">I have solid experience working with UI, Apis and Databases. Interested in functional programming, algorithms and software architecture.</p>
                        <button className="w-[10rem] h-[2rem] bg-lime-200 rounded-lg border-4 border-t-2 border-l-2 border-black" onClick={props.event}>Projects</button>
                        <div className="flex gap-2">
                        <a href="https://github.com/Enriquenf07" target="_blank" className="flex gap-1">
                            <AiFillGithub size={25}/>
                        </a>
                        <a href="https://www.linkedin.com/in/enrique-ferreira-05152b1b8/" target="_blank" className="flex gap-1">
                            <AiFillLinkedin size={25} />
                        </a>
                            
                        </div>
                    </div>
                </Modal>

                <Modal event={() => setIsActiveSkills(false)} w={'w-[14rem] lg:w-[19rem]'} h={'h-[25rem] lg:h-[20rem]'} label="Experience">
                    <div className="flex flex-wrap gap-10  p-10">
                        <BiLogoJavascript size={45} color={'#F0DB4F'}/>
                        <BiLogoReact size={45} color={'#61dbfb'} />
                        <BiLogoPython size={45} />
                        <BiLogoDjango size={45} color={'#092e20'}/>
                        <BiLogoGoLang size={45} color={'#61dbfb'} />
                        <BiLogoPostgresql size={45} color={'#0064a5'}/>
                        <BiLogoMongodb size={45} color={'#4DB33D'}/>
                        <DiRedis size={45} color={'#D82C20'}/>
                    </div>
                </Modal>
            </div>
        )
    }
    if (isActiveAbout) {
        return (
            <div className="flex flex-wrap gap-16">
                <Modal event={() => setIsActiveAbout(false)} w={'w-[30rem]'} label="About">
                    <div className="p-10 flex flex-col gap-8">
                        <div>
                            <h1 className="text-4xl ">Enrique Ferreira</h1>
                            <h2 className="text-xl text-purple-300">Web Developer</h2>
                        </div>
                        <p className="">I have solid experience working with UI, Apis and Databases. Interested in functional programming, algorithms and software architecture.</p>
                        <button className="w-[10rem] h-[2rem] bg-lime-200 rounded-lg border-4 border-t-2 border-l-2 border-black" onClick={props.event}>Projects</button>
                        <div className="flex gap-2">
                            <AiFillGithub size={25}/>
                            <AiFillLinkedin size={25} />
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
    if (isActiveSkills) {
        return (
            <div className="flex flex-wrap gap-16">
                <Modal event={() => setIsActiveSkills(false)} w={'w-[19rem]'} h={'h-[20rem]'} label="Experience">
                    <div className="flex flex-wrap gap-10 w-[20rem] p-10">
                        <BiLogoJavascript size={45} color={'#F0DB4F'}/>
                        <BiLogoReact size={45} color={'#61dbfb'} />
                        <BiLogoPython size={45} />
                        <BiLogoDjango size={45} color={'#092e20'}/>
                        <BiLogoGoLang size={45} color={'#61dbfb'} />
                        <BiLogoPostgresql size={45} color={'#0064a5'}/>
                        <BiLogoMongodb size={45} color={'#4DB33D'}/>
                        <DiRedis size={45} color={'#D82C20'}/>
                    </div>
                </Modal>
            </div>
        )
    }
    
}