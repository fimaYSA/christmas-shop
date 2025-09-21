import CardFooter, {type CardFooterT} from '../components/CardFooter.tsx';

const cards: CardFooterT[] = [
  {
    name: '+375 (29) 111-22-33',
    categories: 'Call Us',
    img: '../../src/assets/img-footer/santa-claus.png',
    href: 'tel:+375291112233'
  },
  {
    name: 'Magic forest',
    categories: 'meet us',
    img: '../../src/assets/img-footer/christmas-tree.png',
    href: 'https://www.google.com/maps/search/?api=1&query=Minsk'
  },
  {
    name: 'gifts@magic.com',
    categories: 'write us',
    img: '../../src/assets/img-footer/snake.png',
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
