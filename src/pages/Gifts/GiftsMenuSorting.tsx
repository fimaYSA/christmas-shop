import * as React from 'react';
import {useState} from 'react';

export default function GiftsMenuSorting() {
  const [selected, setSelected] = useState('all')
  const SEARCH_BTN = ['all', 'for work', 'for health', 'for harmony']

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement
    setSelected(target.innerHTML)
  }

  return (
    <nav className='max-w-118.5 grid auto-cols-max grid-flow-col gap-2 text-xs leading-4 tracking-wider'>
      {SEARCH_BTN.map(btn =>
        <div className={`px-5 py-3 rounded-xl cursor-default
        ${btn === selected ? 'text-dark bg-white/10' : 'hover:bg-white/20 cursor-pointer'}`}
             onClick={handleClick}>{btn}</div>
      )}
    </nav>)
}