import {useState} from 'react';
import {NavHashLink} from 'react-router-hash-link';
import {BTN_MENU} from './Menu.tsx';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='md:hidden'>
      {/* Кнопка бургера */}
      <button
        onClick={toggleMenu}
        className=' absolute top-3 right-2 flex flex-col gap-2 justify-center items-center size-10 cursor-pointer z-2'
      >
        {/* Иконка бургера */}
        <div className='w-5 border-b-1 border-b-dark transition-all duration-300'
             style={{transform: isOpen ? 'rotate(45deg) translateY(3px) translateX(3px)' : 'rotate(0deg)'}}></div>
        <div className='w-5 border-b-1 border-b-dark transition-all duration-300'
             style={{transform: isOpen ? 'rotate(-45deg) translateY(-3px) translateX(3px)' : 'rotate(0deg)'}}></div>
      </button>

      {/* Меню */}
      <div
        className={`absolute top-0 right-0 w-full h-full bg-white flex-col inline-flex 
        justify-center gap-2 items-center font-montserrat text-2xl font-semibold uppercase tracking-[3.8px]
        leading-9 transition duration-300 delay-150 -translate-y-full z-1
        ${isOpen ? 'translate-y-0' : ''}`}
      >
        {BTN_MENU.map(b =>
          <NavHashLink to={b.link}
                       className={'px-5 py-3'}
                       onClick={toggleMenu}
                       smooth
                       key={b.name}>
            {b.name}
          </NavHashLink>
        )}
      </div>
    </div>
  );
}

export default BurgerMenu;