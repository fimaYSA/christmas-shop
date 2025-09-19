import {Header} from '../../Header/Header.tsx';
import {Footer} from '../../Footer/Footer.tsx';
import GiftsCards from './GiftsCards.tsx';

export default function Gifts() {
  return <>
    <Header />
    <main className='px-2 py-15 bg-primary
      bg-[url(../../../src/assets/img-compressed/bg-garland.png)] bg-no-repeat bg-contain'>
      <section className='max-w-319 mx-auto font-montserrat font-semibold uppercase text-white
        grid grid-cols-1 gap-5 place-items-center'>
        <h1 className='max-w-106.5 text-[32px] leading-12 tracking-[6px] text-center'>
          Achieve health, harmony, and inner strength
        </h1>
        <div className='max-w-118.5 grid auto-cols-max grid-flow-col gap-2 text-xs leading-4 tracking-wider'>
          <div className='px-5 py-3 hover:bg-white/20 rounded-xl'>All</div>
          <div className='px-5 py-3 hover:bg-white/20 rounded-xl'>for work</div>
          <div className='px-5 py-3 hover:bg-white/20 rounded-xl'>for health</div>
          <div className='px-5 py-3 hover:bg-white/20 rounded-xl'>for harmony</div>
        </div>
        <GiftsCards />
      </section>
    </main>
    <Footer />
  </>
}