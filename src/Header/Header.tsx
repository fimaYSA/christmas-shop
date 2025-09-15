import {Logo} from "../components/Logo.tsx";
import {Menu} from "../components/Menu.tsx";

export function Header(){
  return (
    <header className='flex justify-between px-20 py-3 text-dark'>
      <Logo/>
      <Menu/>
    </header>
  )
}