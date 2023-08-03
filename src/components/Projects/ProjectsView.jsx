import Modal from "../Modal/Modal"
import Portrait from "../Modal/Portrait"

export default function ProjectsView(){

    const redirect = () => {
        window.location.replace('https://www.github.com')
    }

    return (
        <div>
            <Modal label="Projects" w="w-[70rem]" h="h-[35rem]" event={() => a}>
                <div className="p-10 flex flex-wrap gap-4">
                    <Portrait event={() => redirect()} label="portfolio" langs="React"></Portrait>
                    <Portrait event={() => redirect()}></Portrait>
                    <Portrait event={() => redirect()}></Portrait>
                    <Portrait event={() => redirect()}></Portrait>
                </div>
            </Modal>
        </div>
    )
}