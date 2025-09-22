import BestCards from './BestCards.tsx';
import {BtnExploreMagicalGifts} from '../../components/button/BtnExploreMagicalGifts.tsx';
import {SoonNewYear} from '../../components/SoonNewYear.tsx';
import snowman from '../../assets/images/img-slider/snowman.png'
import christmasTreeBall from '../../assets/images/img-slider/christmas-tree-ball.png'
import christmasTrees from '../../assets/images/img-slider/christmas-trees.png'
import fairytaleHouse from '../../assets/images/img-slider/fairytale-house.png'

export function Home() {
  return <>
    <main
      className='bg-primary px-2 rounded-t-[20px] font-montserrat text-white
                 bg-[url(/img-bg/bg-snow.png)] bg-contain bg-repeat-y
                 overflow-hidden'
    >
      <section className='py-15 bg-[url(/img-bg/bg-ball.png)] bg-cover bg-center bg-no-repeat'>
        <div className='w-[426px] py-15 mx-auto flex flex-col items-center gap-3'>
          <p className='font-allura tracking-wider text-2xl leading-none'>
            Merry Christmas
          </p>
          <h1 className='text-[32px] uppercase font-semibold tracking-[5.6px] text-center'>
            Gift yourself the magic of new possibilities
          </h1>
          <BtnExploreMagicalGifts />
          <p className='font-allura tracking-wider text-2xl leading-none'>
            and Happy New Year
          </p>
        </div>
      </section>

      <section id='about'
               className='py-15'>
        <div className='mx-auto max-w-[1276px] bg-white flex rounded-[20px]'>
          <div className='px-15 w-1/2 flex flex-col gap-5 justify-center'>
            <p className='font-allura text-primary text-2xl tracking-wider leading-none'>About</p>
            <h2 className='text-dark text-2xl uppercase font-semibold tracking-[4.6px] leading-9'>Unleash your inner superhero!
            </h2>
            <p className='text-base text-dark max-w-[426px]'>This New Year marks the beginning of your journey to inner
                                                             harmony and new strengths. We offer unique
                                                             gifts that will help you improve your life.
            </p>
          </div>
          <div className='w-1/2 h-[528px] bg-[url(/santa.png)]
                         bg-center bg-no-repeat rounded-[20px]'></div>
        </div>
      </section>

      <section className='py-15'>
        <div className='max-w-[1276px] mx-auto'>
          <div className='text-center'>
            <p className='font-allura text-2xl tracking-wider leading-none mb-3'>Become Happier!</p>
            <h2 className='text-2xl uppercase font-semibold tracking-[4.6px] leading-9'>in the new 2025</h2>
          </div>
          <div className='inline-flex gap-5 items-center my-5'>
            <span className='font-semibold text-[80px] uppercase'>live</span>
            <img src={snowman}
                 alt=''
                 className='size-50 rounded-[20px]' />
            <span className='font-semibold text-[80px] uppercase'>create</span>
            <img src={christmasTrees}
                 alt=''
                 className='size-50 rounded-[20px]' />
            <span className='font-semibold text-[80px] uppercase'>Love</span>
            <img src={christmasTreeBall}
                 alt=''
                 className='size-50 rounded-[20px]' />
            <span className='font-semibold text-[80px] uppercase'>dream</span>
            <img src={fairytaleHouse}
                 alt=''
                 className='size-50 rounded-[20px]' />
          </div>
          <div className='flex gap-5 justify-end'>
            <button className='size-14 border rounded-[20px] text-white/40 rotate-180'>
              <svg className='mx-auto stroke-current'
                   width='14'
                   height='14'
                   viewBox='0 0 14 14'
                   fill='none'
                   xmlns='http://www.w3.org/2000/svg'>
                <path d='M1 7H13.5M13.5 7L7.5 1M13.5 7L7.5 13' />
              </svg>
            </button>
            <button className='size-14 border rounded-[20px] text-white cursor-pointer
                              hover:text-primary hover:bg-white transition-colors duration-300'>
              <svg className='mx-auto stroke-current'
                   width='14'
                   height='14'
                   viewBox='0 0 14 14'
                   fill='none'
                   xmlns='http://www.w3.org/2000/svg'>
                <path d='M1 7H13.5M13.5 7L7.5 1M13.5 7L7.5 13' />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section id='best'
               className='py-15'>
        <div className='max-w-[1276px] mx-auto'>
          <div className='text-center'>
            <p className='font-allura text-2xl tracking-wider leading-none mb-3'>Best Gifts</p>
            <h2 className='text-2xl uppercase font-semibold tracking-[4.6px] leading-9'>especially for you</h2>
          </div>
          <BestCards />
        </div>
      </section>

      <section className='w-full py-30 bg-[url(/img-bg/bg-forest.png)] bg-no-repeat bg-cover bg-center'>
        <div className='max-w-[426px] mx-auto py-15 flex flex-col gap-5 items-center text-center'>
          <h2 className='text-2xl uppercase font-semibold tracking-[4.6px] leading-9'>Ready to start your journey to a better
                                                                           version of yourself?
          </h2>
          <BtnExploreMagicalGifts />
          <SoonNewYear />
        </div>
      </section>
    </main>
  </>
}