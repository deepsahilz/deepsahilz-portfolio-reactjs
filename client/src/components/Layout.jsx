import { useOutlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
  const outlet = useOutlet();
//   if (!outlet) return <div>loading</div>;
  return (
    <>
    <Navbar/>
    {outlet}
    <Footer/>
    </>
  )
}
// khkh
export default Layout