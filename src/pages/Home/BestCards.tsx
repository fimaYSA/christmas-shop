import Card, {type CardT} from '../../components/Card.tsx';

type BestCardT = Omit<CardT, 'img'>

const BASE_PATH = '../../../src/assets/img-compressed/gift-for-'
const bestCards: BestCardT[] = [
  {
    name: 'Console.log Guru',
    categories: 'work',
  },
  {
    name: 'Hydration Bot',
    categories: 'health',
  },
  {
    name: 'Merge Master',
    categories: 'work',
  },
  {
    name: 'Spontaneous Coding Philosopher',
    categories: 'harmony',
  }
]

export default function BestCards() {
  return (
    <div className='mx-auto mt-5 flex flex-wrap justify-center gap-3 '>
      {bestCards.map(card => {
          let img = card.categories === 'work' ? 'work.png' : card.categories === 'health' ? 'health.png' : 'harmony.png'

          return <Card name={card.name}
                       categories={card.categories}
                       img={BASE_PATH + img}
                       key={card.name} />
        }
      )}
    </div>
  )
}