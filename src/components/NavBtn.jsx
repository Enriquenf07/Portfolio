export default function NavBtn(props){
    const style = "border border-black p-2 "

    return ( 
        <button className={style + props.color} onClick={props.event}>{props.label}</button>
    )
}