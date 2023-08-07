import Modal from "../Modal/Modal"
import Portrait from "../Modal/Portrait"

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiRedis } from "react-icons/di"
import { BiLogoPython, BiLogoJavascript, BiLogoReact, BiLogoMongodb,  BiLogoPostgresql, BiLogoDjango, BiLogoGoLang} from "react-icons/bi";
import ProjectContent from "./ProjectContent";
import { useEffect, useState } from "react";

export default function ProjectsView(){
    const [viewList, setViewList]= useState([
        <ProjectContent name={'Portfolio'} descList={['REACT']} url={'https://github.com/Enriquenf07/Portfolio'} next={() => next()} imgUrl={'https://github.com/Enriquenf07/Portfolio/blob/main/github-img/portfolio.png?raw=true'}></ProjectContent>,
        <ProjectContent name={'Search App'} descList={['REACT', 'FASTAPI', 'MONGODB']} url={'https://github.com/Enriquenf07/search-app-react'} next={() => next()} imgUrl={'https://github.com/Enriquenf07/search-app-fastapi/raw/main/F2jo6nHW8AA0LYZ.jpg'}></ProjectContent>
    ])
    const [counter, setCounter] = useState(0)
    const [isActiveProject, setIsActiveProject ]= useState(true)

    const next = () => {
        setCounter((prev) => (prev === viewList.length - 1 ? 0 : prev + 1))
        console.log(counter)
    }

    if (isActiveProject) {
        return (
            <div>
                <Modal label="Projects" w="w-[20rem] lg:w-[35rem]" h="h-fit lg:h-[36rem]" event={() => setIsActiveProject(false)}>
                    <div className="flex pl-4 lg:pl-10 pt-10 gap-1">
                       {viewList.map((_, i) => (
                            <div className={`w-[2rem] h-[0.7rem] border border-black  rounded-lg ${counter === i ? 'bg-purple-200' : null}`}></div>
                       ))}
                    </div>
                    <div className="overflow-hidden">
                        <div className="flex gap-4 lg:gap-10 transition-transform ease-out duration-500" style={{transform: `translateX(-${counter*100}%)`}}>
                            {viewList.map((item, i) => (
                                <div key={i}> {item} </div>
                            ))}
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
    return (
        <div>
            
        </div>
    )
}