import {useState} from 'react';
import {NavHashLink} from 'react-router-hash-link';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Кнопка бургера */}
      <button
        onClick={toggleMenu}
        className='flex flex-col gap-2 justify-center items-center size-10 md:hidden cursor-pointer'
      >
        {/* Иконка бургера */}
        <div className='w-5 border-b-1 border-b-dark transition-all duration-300'
             style={{transform: isOpen ? 'rotate(45deg) translateY(3px) translateX(3px)' : 'rotate(0deg)'}}></div>
        <div className='w-5 border-b-1 border-b-dark transition-all duration-300'
             style={{transform: isOpen ? 'rotate(-45deg) translateY(-3px) translateX(3px)' : 'rotate(0deg)'}}></div>
      </button>

      {/* Меню */}
      <div
        className={`absolute right-0 top-16 w-full h-[100vh] bg-white overflow-hidden inline-flex flex-col
        justify-center gap-2 items-center font-montserrat text-2xl font-semibold uppercase tracking-[3.8px]
        leading-9 transition duration-300 delay-150
        ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      >
        <NavHashLink to={'/gifts'}
                     className={'px-5 py-3'}
                     onClick={toggleMenu}
                     smooth>
          gifts
        </NavHashLink>
        <NavHashLink to={'/#about'}
                     className={'px-5 py-3'}
                     onClick={toggleMenu}
                     smooth>
          about
        </NavHashLink>
        <NavHashLink to={'/#best'}
                     className={'px-5 py-3'}
                     onClick={toggleMenu}
                     smooth>
          best
        </NavHashLink>
        <NavHashLink to={'/footer'}
                     className={'px-5 py-3'}
                     onClick={toggleMenu}
                     smooth>
          contacts
        </NavHashLink>
      </div>
    </>
  );
}

export default BurgerMenu;