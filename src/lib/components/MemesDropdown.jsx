import { useState, useEffect, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function MemesDropdown(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenByFilter, setIsOpenByFilter] = useState(false)
    const [maxMenuHeight, setMaxMenuHeight] = useState(null);
    const {memes, onSelect, label, inputKeyword} = props
    const maxItemsToShow = 5;
    const dropRef = useRef()
    const selectRef = useRef()

    const handleClickOutside = (e) => {
      if(isOpen === true) {
        if (dropRef.current && !dropRef.current.contains(e.target)) {
          setIsOpen(false)
        }
      }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    useEffect(() => {
      if(maxMenuHeight === null) {
        if(selectRef.current.clientHeight > 0) {
          const heightPerItem = selectRef.current.clientHeight / memes.length;
          setMaxMenuHeight(heightPerItem * maxItemsToShow);
        }
      }
    }, [selectRef.current])

    useEffect(() => {
      if(inputKeyword !== null && inputKeyword !== undefined && inputKeyword.length !== 0) {
        setIsOpen(true)
        setIsOpenByFilter(true)
      } else {
        setIsOpen(false)
      }
    }, [inputKeyword])

    useEffect(() => {
      if(isOpen === false) {
        setIsOpenByFilter(false)
      }
    }, [isOpen])

    return (
      <div style={{maxWidth: 500, minWidth: 400}} className="position-relative" ref={dropRef}>
        <button className="ms-auto btn btn-lg btn-secondary w-100" onClick={() => {
          setIsOpen(true)
        }}>{label} <small className="opacity-75 ms-3 fs-6">{!isOpen ? '▼' : '▲'}</small></button>
        <div className="position-absolute dropdown-list bg-white shadow-sm mt-3 w-100" style={isOpen ? {} : {opacity: 0, zIndex: -1}}>
          <div ref={selectRef} className="select-list" style={maxMenuHeight > 0 ? {maxHeight: `${maxMenuHeight}px`, overflowY: 'scroll'} : {}}>
            {memes.filter((m) => {
              if(inputKeyword !== null && inputKeyword.length > 0 && isOpenByFilter === true) {
                return m.name.toLowerCase().includes(inputKeyword)
              }

              return true
            }).map((meme, i) => {
              return <div key={`meme-${i}`} className="meme p-3 border" type="button" onClick={() => {
                onSelect(meme)
              }}>
                {meme.name}
              </div>
            })}
          </div>
        </div>
      </div>
    )
  }