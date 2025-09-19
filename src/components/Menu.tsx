import {Link} from 'react-router';

const BTN_MENU = [
  {
    name: 'gifts',
    link: '/gifts'
  },
  {
    name: 'about',
    link: '/home'
  },
  {
    name: 'best',
    link: '/home'
  },
  {
    name: 'contacts',
    link: '/home'
  },
]

export function Menu() {
  return (
    <div className='font-montserrat font-semibold uppercase text-xs tracking-wide
    inline-flex gap-2 cursor-pointer'>
      {BTN_MENU.map(btn =>
        <Link to={btn.link}
              key={btn.name}>
          <div className='px-5 py-3 rounded-xl hover:bg-primary/10
            hover:text-primary transition-colors duration-300'>
            {btn.name}
          </div>
        </Link>
      )}
    </div>
  )
}