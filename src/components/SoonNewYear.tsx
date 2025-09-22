export function SoonNewYear() {
  return (
    <div className='max-w-[426-px] text-center'>
      <p className='font-allura text-2xl tracking-wider leading-none mb-3'>The New Year is Coming Soon...</p>
      <div className='w-[344px] mx-auto pt-2 pb-3 flex justify-center items-center bg-white/40 rounded-[20px] table-auto' >
        <div className='w-20 h-13 relative after:content-["|"] after:absolute after:top-3.5 after:right-0
        after:text-white/40'>
          <h2 className='text-2xl uppercase font-semibold tracking-[4.6px] leading-9'>47</h2>
          <h4 className='text-xs font-semibold tracking-wide'>DAYS</h4>
        </div>
        <div className='w-20 h-13 relative after:content-["|"] after:absolute after:top-3.5 after:right-0
        after:text-white/40'>
          <h2 className='text-2xl uppercase font-semibold tracking-[4.6px] leading-9'>5</h2>
          <h4 className='text-xs font-semibold tracking-wide'>HOURS</h4>
        </div>
        <div className='w-20 h-13 relative after:content-["|"] after:absolute after:top-3.5 after:right-0
        after:text-white/40'>
          <h2 className='text-2xl uppercase font-semibold tracking-[4.6px] leading-9'>34</h2>
          <h4 className='text-xs font-semibold tracking-wide'>MINUTES</h4>
        </div>
        <div className='w-20 h-13'>
          <h2 className='text-2xl uppercase font-semibold tracking-[4.6px] leading-9'>12</h2>
          <h4 className='text-xs font-semibold tracking-wide'>SECONDS</h4>
        </div>
      </div>
    </div>
  )
}