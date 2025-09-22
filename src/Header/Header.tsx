import {Logo} from "../components/Logo.tsx";
import {Menu} from "../components/Menu.tsx";
import BurgerMenu from '../components/BurgerMenu.tsx';

export function Header(){
  return (
    <header className='mx-auto max-w-[1276px] flex justify-between py-3 px-2 lg:px-0 text-dark'>
      <Logo/>
      <Menu/>
      <BurgerMenu/>
    </header>
  )
}