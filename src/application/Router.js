import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Home from '../pages/Home';
//import LocalsDatos from '../pages/LocalsDatos';
import LocalsRank from '../pages/LocalsRank'
import ErrPage from '../pages/ErrPage';

import NavBar from '../components/NavBar';

const Router = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route element={<LayoutHome />}>
                <Route path="/" element={<Home />} />
                <Route path="/ranks" element={<LocalsRank />} />
                {/* <Route path="/mapa" element={<LocalsDatos />} /> */}
            </Route>
            <Route element={<Layout />}>

                <Route path="*" element={<ErrPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
export default Router;

const Layout = () => {
    return (
        <>
            <NavBar />
            <div className='contentGrid'>
                <Outlet />
            </div>
        </>
    )
}

const LayoutHome = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}