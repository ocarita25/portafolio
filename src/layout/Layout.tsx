import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <div className='bg-[#1a1c20] min-h-dvh transition-colors ease-linear duration-100 text-white'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout