export type CardFooterT = {
  name: string,
  categories: string,
  img: string,
  href: string
}

export default function CardFooter(props: CardFooterT) {
  return (
    <a href={props.href}
       target='_blank'
       className='p-5 bg-contentBg text-dark text-center rounded-[20px]
      cursor-pointer hover:text-primary transition duration-300'>
      <img className='size-20 mx-auto'
           src={props.img}
           alt='' />
      <div className='my-3 text-2xl tracking-widest leading-9 font-semibold'>
        {props.name}
      </div>
      <h3 className='text-base uppercase leading-6 tracking-widest font-semibold'>{props.categories}</h3>
    </a>
  )
}