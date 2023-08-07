export default function ProjectContent(props) {
    return(
        <div className="pl-4 pb-10 lg:pb-0 lg:pl-10 pt-2 flex flex-col gap-4">
                    <div className="flex justify-center items-center bg-purple-200 w-[18rem] lg:h-[20rem] lg:w-[30rem] rounded-lg border border-black border-b-4 border-r-4">
                        <img src={props.imgUrl} alt="" className="w-[26rem] object-contain bg-purple-200"/>
                    </div>
                    <div className="flex flex-col gap-1 w-[10rem] lg:w-[30rem]">
                        <h1 className="text-xl">{props.name}</h1>
                        <div className="flex gap-1 w-52 flex-wrap">
                            {props.descList.map((item, index) => <h2 key={index} className="text-xs bg-purple-200 rounded-lg w-fit px-2 h-[1.4rem] flex justify-center items-center">{item}</h2>)}
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <a className="w-[10rem] h-[2rem] bg-lime-200 rounded-lg border-4 border-t-2 border-l-2 border-black flex justify-center items-center" href={props.url} target="_blank">Repository</a>
                        <button className="rounded-lg w-fit h-[2rem] px-8 border-2 border-black border-b-4 border-r-4" onClick={props.next}> {'Next'} </button>
                    </div>
                    
        </div>
    )
}