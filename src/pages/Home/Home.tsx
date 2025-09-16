export function Home() {
  return (
    <div
      className='bg-primary px-2 rounded-t-[20px] font-montserrat text-white
                 bg-[url(./././assets/img-compressed/bg-snow.png)] bg-contain bg-repeat-y'
    >
      <section className='py-15 bg-[url(./././assets/img-compressed/bg-ball.png)] bg-cover bg-center bg-no-repeat'>
        <div className='w-[426px] py-15 mx-auto flex flex-col items-center gap-3'>
          <p className='font-allura tracking-wider text-2xl leading-none'>
            Merry Christmas
          </p>
          <h1 className='text-[32px] uppercase font-semibold tracking-[5.5px] text-center'>
            Gift yourself the magic of new possibilities
          </h1>
          <button className='text-xs uppercase font-semibold tracking-wider px-8 py-5
                       rounded-[20px] bg-dark hover:bg-white hover:text-dark cursor-pointer
                       transition-colors duration-300'>
            Explore Magical Gifts
          </button>
          <p className='font-allura tracking-wider text-2xl leading-none'>
            and Happy New Year
          </p>
        </div>
      </section>

      <section className='py-15'>
        <div className='mx-auto max-w-[1276px] bg-white flex rounded-[20px]'>
          <div className='px-15 w-1/2 flex flex-col gap-5 justify-center'>
            <p className='font-allura text-primary text-2xl tracking-wider leading-none'>About</p>
            <h2 className='text-dark text-2xl uppercase font-semibold tracking-widest'>Unleash your inner superhero!
            </h2>
            <p className='text-base text-dark max-w-[426px]'>This New Year marks the beginning of your journey to inner
                                                             harmony and new strengths. We offer unique
                                                             gifts that will help you improve your life.
            </p>
          </div>
          <div className='w-1/2 h-[528px] bg-[url(./././assets/img-compressed/santa.png)]
                         bg-center bg-no-repeat rounded-[20px]'></div>
        </div>
      </section>
    </div>
  )
}