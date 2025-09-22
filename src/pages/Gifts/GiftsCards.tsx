import Card, {type CardT} from '../../components/Card.tsx';

const giftsCards: CardT[] = [
  {
    name: 'Console.log Guru',
    categories: 'work',
  },
  {
    name: 'Step Master',
    categories: 'health',
  },
  {
    name: 'Bug Magnet',
    categories: 'work',
  },
  {
    name: 'Shortcut Cheater',
    categories: 'work',
  },
  {
    name: 'Posture Levitation',
    categories: 'health',
  },
  {
    name: 'Bug Acceptance Guru',
    categories: 'harmony',
  },
  {
    name: 'Snack Resister',
    categories: 'health',
  },
  {
    name: 'Error Laugher',
    categories: 'harmony',
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
    name: 'Joy Charger',
    categories: 'harmony',
  },
  {
    name: 'Spontaneous Coding Philosopher',
    categories: 'harmony',
  },
]

export default function GiftsCards() {
  return (
    <div className='w-full grid grid-cols-[repeat(auto-fill,max(310px))] gap-3 justify-center'>
      {giftsCards.map(card => {

          return <Card name={card.name}
                       categories={card.categories}
                       key={card.name} />
        }
      )}
    </div>
  )
}