const socialMedia = [
  {
    svg: <svg className='stroke-current stroke-[1.5px]'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
      <path d='M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.2488 15.7229' />
    </svg>,
    href: 'https://telegram.org'
  },
  {
    svg: <svg className='stroke-current stroke-[1.5px]'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
      <path d='M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z' />
    </svg>,
    href: 'https://www.facebook.com'
  },
  {
    svg: <svg className='stroke-current stroke-[1.5px]'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
      <path d='M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z' />
      <path d='M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z' />
      <path d='M17.5 6.51L17.51 6.49889' />
    </svg>,
    href: 'https://www.instagram.com'
  },
  {
    svg: <svg className='stroke-current stroke-[1.5px]'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
      <path d='M16.8198 20.7684L3.75317 3.96836C3.44664 3.57425 3.72749 3 4.22678 3H6.70655C6.8917 3 7.06649 3.08548 7.18016 3.23164L20.2468 20.0316C20.5534 20.4258 20.2725 21 19.7732 21H17.2935C17.1083 21 16.9335 20.9145 16.8198 20.7684Z' />
      <path d='M20 3L4 21' />
    </svg>,
    href: 'https://x.com'
  },
]

export default function SocialMedia() {
  return (
    <div className='flex gap-3 justify-center'>
      {socialMedia.map((el, index) =>
        <a href={el.href}
           target='_blank'
           key={index}
           className='size-10 p-2 hover:text-primary cursor-pointer transition duration-300r'>
          {el.svg}
        </a>
      )}
    </div>
  )
}