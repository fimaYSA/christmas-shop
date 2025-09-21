import FooterCards from './FooterCards.tsx';
import SocialMedia from './SocialMedia.tsx';

export function Footer() {
  return (
    <footer id='footer'
            className='px-2 py-15 text-dark font-montserrat'>
      <div className='max-w-319 mx-auto flex flex-col gap-15'>
        <FooterCards />
        <div className='self-center'>
          <SocialMedia />
          <p className='text-base my-3'>
            © Copyright 2025, All Rights Reserved
          </p>
          <a href='https://rs.school/'
             target='_blank'
             className='font-allura text-2xl tracking-wider leading-none hover:text-primary transition duration-300
            cursor-pointer'>
            Made in Rolling Scopes School
          </a>
        </div>
      </div>
    </footer>
  )
}