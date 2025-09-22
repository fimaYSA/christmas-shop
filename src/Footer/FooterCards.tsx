import CardFooter, {type CardFooterT} from '../components/CardFooter.tsx';
import santaClaus from '../assets/images/img-footer/santa-claus.png'
import christmasTree from '../assets/images/img-footer/christmas-tree.png'
import snake from '../assets/images/img-footer/snake.png'

const cards: CardFooterT[] = [
  {
    name: '+375 (29) 111-22-33',
    categories: 'Call Us',
    img: santaClaus,
    href: 'tel:+375291112233'
  },
  {
    name: 'Magic forest',
    categories: 'meet us',
    img: christmasTree,
    href: 'https://www.google.com/maps/search/?api=1&query=Minsk'
  },
  {
    name: 'gifts@magic.com',
    categories: 'write us',
    img: snake,
    href: 'mailto:gifts@magic.com'
  },
]

export default function FooterCards() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
      {cards.map(card =>
        <CardFooter name={card.name}
                    categories={card.categories}
                    img={card.img}
                    href={card.href}
                    key={card.name} />)
      }
    </div>
  )
}
