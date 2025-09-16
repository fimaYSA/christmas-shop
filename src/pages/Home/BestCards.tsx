import Card, {type CardT} from '../../components/Card.tsx';

const bestCards: CardT[] = [
  {
    name: 'Console.log Guru',
    categories: 'for work',
    img: '../../../src/assets/img-compressed/gift-for-work.png'
  },
  {
    name: 'Hydration Bot',
    categories: 'for health',
    img: '../../../src/assets/img-compressed/gift-for-health.png'
  },
  {
    name: 'Merge Master',
    categories: 'for work',
    img: '../../../src/assets/img-compressed/gift-for-work.png'
  },
  {
    name: 'Spontaneous Coding Philosopher',
    categories: 'for harmony',
    img: '../../../src/assets/img-compressed/gift-for-harmony.png'
  }
]

export default function BestCards() {
  return (
    <div className='mx-auto mt-5 flex flex-wrap justify-center gap-3 '>
      {bestCards.map(card =>
        <Card name={card.name}
              categories={card.categories}
              img={card.img} key={card.name}/>
      )}
    </div>
  )
}