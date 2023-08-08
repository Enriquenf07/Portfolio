export default function Portrait(props){
    return(
        <div className="border border-b-4 border-r-4 border-black h-[12rem] w-[10rem] rounded-lg p-4 items-center" onClick={props.event}>
            <img src="https://github.com/Enriquenf07/Portfolio/blob/main/github-img/portfolio.png?raw=true" alt="" className="rounded-lg object-contain  w-44 h-24 border border-red-600"/>
            <div className="flex justify-between text-xs">
                <h1>Portfolio</h1>
                <h2>React</h2>
            </div>
        </div>
    )
}