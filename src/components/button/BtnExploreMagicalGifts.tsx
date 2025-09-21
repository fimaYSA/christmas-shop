import {NavHashLink} from 'react-router-hash-link';

export function BtnExploreMagicalGifts() {
  return (
    <NavHashLink smooth
                 to={'/gifts#top'}>
      <button className='text-xs uppercase font-semibold tracking-wider px-8 py-5
                       rounded-[20px] bg-dark hover:bg-white hover:text-dark cursor-pointer
                       transition-colors duration-300'>
        Explore Magical Gifts
      </button>
    </NavHashLink>
  )
}
