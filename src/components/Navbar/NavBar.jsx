export default function NavBar(props){
    
    return (
    <nav className="h-[2rem] w-[4rem] flex items-center gap-1">
        {props.children}
    </nav>
    )
}