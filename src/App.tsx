import {Home} from './pages/Home/Home.tsx'
import {Route, Routes} from 'react-router';
import Gifts from './pages/Gifts/Gigts.tsx';
import {Header} from './Header/Header.tsx';
import {Footer} from './Footer/Footer.tsx';

function App() {

  return (
    <div className='container max-w-360 mx-auto'>
      <Header />
      <Routes>
        {/*<Route element={<Layout />}>*/}
        <Route path='/'
               element={<Home />} />
        <Route path='gifts'
               element={<Gifts />} />
        {/*</Route>*/}
      </Routes>
      <Footer />
    </div>
  )
}

export default App

// const Layout = () => {
//   return <div className='border-4 border-emerald-500'>
//     <Outlet />
//   </div>
// }