import { useEffect } from "react"

const About = () => {
    useEffect(() => {
        document.title = `${document.title} | About`
    }, [])
    return (
        <div>About</div>
    )
}

export default About