import {Logo} from "../components/Logo.tsx";
import {Menu} from "../components/Menu.tsx";

export function Header(){
  return (
    <header className='mx-auto max-w-[1276px] flex justify-between py-3 text-dark'>
      <Logo/>
      <Menu/>
    </header>
  )
}