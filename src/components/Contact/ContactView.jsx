import { useState } from "react";
import Modal from "../Modal/Modal"
import { AiFillGithub, AiFillLinkedin, AiOutlineCopy } from "react-icons/ai";

export default function ContactView(props){
    const [isActiveContact, setIsActiveContact] = useState(true)

    if (isActiveContact) {
        return(
            <div>
                <Modal w='w-[20rem]' label='Contact' event={() => setIsActiveContact(false)}>
                    <div className="p-10 flex flex-col gap-8">
                        <h1 className="text-2xl text-purple-300">Let's talk!</h1>
                        <div className="flex flex-wrap gap-1 w-52">
                            <p>email:</p>
                            <p className="text-blue-800">enriquenf.dev@gmail.com</p>
                            <button onClick={() =>  navigator.clipboard.writeText('enriquenf.dev@gmail.com')}><AiOutlineCopy /></button>
                        </div>
                        <div className="flex gap-4">
                            <a href="https://github.com/Enriquenf07" target="_blank" className="flex gap-1">
                                <AiFillGithub size={25}/>
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/enrique-ferreira-05152b1b8/" target="_blank" className="flex gap-1">
                            <AiFillLinkedin size={25} />
                            Linkedin 
                            </a>
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