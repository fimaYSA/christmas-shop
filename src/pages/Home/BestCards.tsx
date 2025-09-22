import Card, {type CardT} from '../../components/Card.tsx';

type BestCardT = Omit<CardT, 'img'>

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
          return <Card name={card.name}
                       categories={card.categories}
                       key={card.name} />
        }
      )}
    </div>
  )
}