import {Header} from "./Header/Header.tsx";
import {Home} from './pages/Home/Home.tsx'
import {Footer} from './Footer/Footer.tsx';

function App() {

  return (
    <div className='container max-w-360 mx-auto'>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
