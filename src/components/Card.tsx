import work from '../assets/images/gifts-for/work.png'
import health from '../assets/images/gifts-for/health.png'
import harmony from '../assets/images/gifts-for/harmony.png'

export type CardT = {
  name: string
  categories: 'work' | 'health' | 'harmony'
}

export default function Card(props: CardT) {
  const color = props.categories === 'work'
    ? 'text-purple-400' : props.categories === 'health'
      ? 'text-green-400' : 'text-pink-400'

  let img = props.categories === 'work'
    ? work : props.categories === 'health'
      ? health : harmony

  return (
    <div className='w-[310px] text-dark font-semibold uppercase rounded-[20px] bg-contentBg cursor-pointer
      hover:text-primary transition duration-300'>
      <img src={img}
           alt='image'
           className=' h-[230px]' />
      <div className='h-[112px] p-5 bg-white rounded-[20px]'>
        <h4 className={`text-xs tracking-wide ${color}`}>{'for ' + props.categories}</h4>
        <h3 className='text-base tracking-[1.2px] mt-2'>{props.name}</h3>
      </div>
    </div>
  )
}