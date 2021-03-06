import React from 'react'
import './Dropdown.css'

import { useState } from 'react'

export default function Dropdown({ title, itemsArr, onItemClick }) {
  const [isOpen, setOpen] = useState(false)

  const handleItemClick = (it) => {
    setOpen(false)

    console.log(it)
    onItemClick(it)
  }

  return (
    <div className="dropdown">
      <div className="dropdown__title">
        <button
          className="dropdown__btn dropdown__btn--title"
          onClick={() => (isOpen ? setOpen(false) : setOpen(true))}
        >
          {title}
        </button>
      </div>

      <div className="dropdown__items" hidden={!isOpen}>
        {itemsArr.map((it, idx) => {
          return (
            <div className="dropdown__item" key={idx}>
              <button
                className="dropdown__btn dropdown__btn--item"
                onClick={() => handleItemClick(it)}
              >
                {it.title}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
