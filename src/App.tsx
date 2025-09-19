import {Home} from './pages/Home/Home.tsx'
import {Route, Routes} from 'react-router';
import Gifts from './pages/Gifts/Gigts.tsx';

function App() {

  return (
    <div className='container max-w-360 mx-auto'>
      <Routes>
        <Route path='home'
               element={<Home />} />
        <Route path='gifts'
               element={<Gifts />} />
      </Routes>
    </div>
  )
}

export default App
