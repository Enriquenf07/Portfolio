export default function NavBar(props){
    
    return (
    <nav className="h-[2rem] w-[4rem] flex items-center">
        {props.children}
    </nav>
    )
}