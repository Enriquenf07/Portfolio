export default function Modal(props){
    return (
        <section className={"border border-black rounded-lg shadow shadow-black " + props.w + " " + props.h}>
            <div className="h-10 bg-red-300 border border-b-black rounded-t-lg flex justify-between pr-5 pl-5">
                <p className="text-base flex items-center">{props.label}</p>
                <button className="text-xl" onClick={props.event}>X</button>
            </div>
            {props.children}            
        </section>
    )
}