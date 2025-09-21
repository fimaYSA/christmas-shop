import GiftsCards from './GiftsCards.tsx';
import GiftsMenuSorting from './GiftsMenuSorting.tsx';

export default function Gifts() {
  return <>
    <main className='px-2 py-15 bg-primary
      bg-[url(../../../src/assets/img-compressed/bg-garland.png)] bg-no-repeat bg-contain'>
      <section className='max-w-319 mx-auto font-montserrat font-semibold uppercase text-white
        grid grid-cols-1 gap-5 place-items-center'>
        <h1 className='max-w-106.5 text-[32px] leading-12 tracking-[6px] text-center'>
          Achieve health, harmony, and inner strength
        </h1>
        <GiftsMenuSorting />
        <GiftsCards />
      </section>
    </main>
  </>
}