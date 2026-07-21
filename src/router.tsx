import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.page'
import Layout from './layout/Layout'
// import Projects from './pages/projects/Projects.page'
import Senasa from './pages/projects/Senasa.page'
import Acerca from './pages/about-me/Acerca.page'
import ScrollToTop from './components/ScrollToTop'

const AppRouter = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/proyectos/senasa' element={<Senasa />} />
                    <Route path='/acerca-de-mi' element={<Acerca />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter