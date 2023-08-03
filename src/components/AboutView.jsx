import { useEffect, useState } from "react"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiRedis } from "react-icons/di"
import { BiLogoPython, BiLogoJavascript, BiLogoReact, BiLogoMongodb,  BiLogoPostgresql, BiLogoDjango, BiLogoGoLang} from "react-icons/bi";

export default function AboutView(){
   const [isActiveAbout, setIsActiveAbout] = useState(true)
   const [isActiveSkills, setIsActiveSkills] = useState(true)

   useEffect(() => {
    setIsActiveAbout(true)
    setIsActiveSkills(true)
   }, [])
   

    if (isActiveAbout && isActiveSkills) {
        return (
            <div className="flex gap-16">
                <section className="border border-black rounded-lg shadow shadow-black w-[30rem] ">
                    <div className="h-10 bg-red-300 border border-b-black rounded-t-lg flex justify-end gap-[23rem] pr-5">
                        <p className="text-base flex items-center">About</p>
                        <button className="text-xl" onClick={() => setIsActiveAbout(false)}>X</button>
                    </div>
                    <div className="p-10 flex flex-col gap-8">
                        <div>
                            <h1 className="text-4xl ">Enrique Ferreira</h1>
                            <h2 className="text-xl text-purple-300">Web Developer</h2>
                        </div>
                        <p className="">I have solid experience working with UI, Apis and Databases. Interested in functional programming, algorithms and software architecture.</p>
                        <button className="w-[10rem] h-[2rem] bg-lime-200 rounded-lg border-4 border-t-2 border-l-2 border-black">Projects</button>
                        <div className="flex gap-2">
                            <AiFillGithub size={25}/>
                            <AiFillLinkedin size={25} />
                        </div>
                    </div>
                </section>

            <section className="border border-black rounded-lg shadow shadow-black w-[19rem] h-[20rem]">
                <div className="h-10 bg-red-300 border border-b-black rounded-t-lg flex justify-end gap-[9.8rem] pr-5">
                        <p className="text-base flex items-center">Experience</p>
                        <button className="text-xl" onClick={() => setIsActiveSkills(false)}>X</button>
                    </div>
                    <div className="flex flex-wrap gap-10 w-[20rem] p-10">
                        <BiLogoJavascript size={45} color={'#F0DB4F'}/>
                        <BiLogoReact size={45} color={'#61dbfb'} />
                        <BiLogoPython size={45} style={{"--fa-primary-color": "#7efff5","--fa-secondary-color":"#ffcccc"}}/>
                        <BiLogoDjango size={45} color={'#092e20'}/>
                        <BiLogoGoLang size={45} color={'#61dbfb'} />
                        <BiLogoPostgresql size={45} color={'#0064a5'}/>
                        <BiLogoMongodb size={45} color={'#4DB33D'}/>
                        <DiRedis size={45} color={'#D82C20'}/>
                    </div>
            </section>
            </div>
            
        )
    }
}