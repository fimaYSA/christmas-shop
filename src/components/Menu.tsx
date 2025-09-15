const BTN_MENU = [
  {name:'gifts'},
  {name:'about'},
  {name:'best'},
  {name:'contacts'},
]

export function Menu() {
  return (
    <div className='font-montserrat font-semibold uppercase text-xs tracking-wide
    inline-flex gap-2 cursor-pointer'>
      {BTN_MENU.map(btn =>
        <div key={btn.name} className='px-5 py-3 rounded-xl hover:bg-primary/10
        hover:text-primary transition-colors duration-300'>
          {btn.name}
        </div>
      )}
    </div>
  )
}