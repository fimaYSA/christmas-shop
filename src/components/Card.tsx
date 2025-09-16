export type CardT = {
  name: string
  categories: string
  img: string
}

export default function Card(props: CardT) {
  const color = props.categories === 'for work' ? 'text-purple-400' : props.categories === 'for health' ? 'text-green-400' : 'text-pink-400'

  return (
    <div className='w-[310px] font-semibold uppercase rounded-[20px] bg-contentBg'>
      <img src={props.img}
           alt='image'
           className=' h-[230px]' />
      <div className='h-[112px] p-5 bg-white rounded-[20px]'>
        <h4 className={`text-xs tracking-wide ${color}`}>{props.categories}</h4>
        <h3 className='text-base text-dark  tracking-wider mt-2'>{props.name}</h3>
      </div>
    </div>
  )
}