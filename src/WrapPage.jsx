import { Outlet } from 'react-router-dom';
import {Header} from './pages/components/homepage-components/header.jsx';
import {FooterLarge, FooterSmall} from './pages/components/homepage-components/Footer.jsx';

const Wrapper = () => {
  return (
    <>
        <Header />
        <Outlet />   
        <FooterLarge />
        <FooterSmall />
    </>
  )
}

export default Wrapper;    