import Card, {type CardT} from '../../components/Card.tsx';

type GiftsCardT = Omit<CardT, 'img'>

const BASE_PATH = '../../../src/assets/img-compressed/gift-for-'

const giftsCards: GiftsCardT[] = [
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
    <div className='w-full mt-5 grid grid-cols-[repeat(auto-fill,max(310px))] gap-3 justify-center'>
      {giftsCards.map(card => {
          let nameImg = card.categories === 'work' ? 'work.png' : card.categories === 'health' ? 'health.png' : 'harmony.png'
          return <Card name={card.name}
                       categories={card.categories}
                       img={BASE_PATH + nameImg}
                       key={card.name} />
        }
      )}
    </div>
  )
}