export default function Modal(props){
    return (
        <section className="border border-black rounded-lg shadow shadow-black w-[30rem] ">
            <div className="h-10 bg-red-300 border border-b-black rounded-t-lg flex justify-end gap-[23rem] pr-5">
                <p className="text-base flex items-center">About</p>
                <button className="text-xl" onClick={props.event}>X</button>
            </div>
            {props.children}            
        </section>
    )
}