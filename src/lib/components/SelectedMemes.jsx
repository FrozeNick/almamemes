import { useState, useEffect, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function SelectedMemes(props) {
  const [showAll, setShowAll] = useState(false);
   const {selected, set, max} = props;

   return (
     <>
        <div className="py-3">
        {selected.map((meme, i) => {
        return <div className={(i > (max - 1) && showAll === false) ? 'd-none' : 'd-block'} key={`selected-meme-${i}`}>
          <div className="meme bg-white shadow-sm px-3 py-2 border d-flex align-items-center">
            {typeof(meme.url) === 'string' ? <img src={meme.url} width={32} height={32} className="rounded me-3 shadow" /> : <div className="rounded me-3 shadow bg-info" style={{width:64, height: 64}}></div>}
            <div className="me-auto fw-bold">{meme.name}</div>
            {set !== undefined ? <button className="btn btn-danger" onClick={() => {
              set(selected.filter(m => m.id !== meme.id))
            }}>×</button> : <></>}
          </div>
        </div>
        })}
        </div>
        {selected.length > max ? showAll === false ? <button className="btn btn-outline-primary mt-3" onClick={() => {
          setShowAll(true)
        }}>Show {selected.length - max} More</button> : <button className="btn btn-outline-primary mt-3" onClick={() => {
          setShowAll(false)
        }}>Show Less</button> : <></>
      }
      </>
   )
}