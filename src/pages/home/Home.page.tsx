import Hero from './components/Hero'
import Tech from './components/Tech'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'

const Home = () => {
    return (
        <div className='xl:max-w-[60rem] mx-auto'>
            <Hero />
            <Tech />
            <Projects />
            <ContactMe />
        </div>
    )
}

export default Home