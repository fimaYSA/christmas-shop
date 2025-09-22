import {NavHashLink} from 'react-router-hash-link';
import {useLocation} from 'react-router';

const BTN_MENU = [
  {
    name: 'gifts',
    link: '/gifts'
  },
  {
    name: 'about',
    link: '/#about'
  },
  {
    name: 'best',
    link: '/#best'
  },
  {
    name: 'contacts',
    link: '/footer'
  },
]

export function Menu() {
  const {pathname} = useLocation()

  return (
    <nav className='font-montserrat font-semibold uppercase text-xs tracking-wide
      md:inline-flex gap-2 hidden'>
      {BTN_MENU.map(btn =>
        <NavHashLink smooth
                     to={btn.link}
                     key={btn.name}
                     end>
          <div className={`px-5 py-3 rounded-xl 
            ${pathname !== btn.link
            ? 'hover:bg-primary/10 hover:text-primary transition-colors duration-300'
            : 'cursor-default'}`}>
            {btn.name}
          </div>
        </NavHashLink>
      )}
    </nav>
  )
}