import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import MemesDropdown from './MemesDropdown';
import SelectedMemes from './SelectedMemes';

export default function Popup() {
    const maxSelected = 6;
    const maxShownSelected = 3;

    const [show, setShow] = useState(false);
    const [selectedMemes, setSelectedMemes] = useState([]);
    const [memes, setMemes] = useState([]);
    const [inputKeyword, setInputKeyword] = useState(null);
    let navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getMemes = () => {
      return new Promise((resolve) => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then((result) => {
          resolve(result.data.memes)
        })
      })
    }

    const saveMemes = () => {
      window.localStorage.setItem('my_memes', JSON.stringify(selectedMemes));
      navigate("/", { replace: true });
    }

    useEffect(() => {
      if(show === true && memes.length === 0) {
        getMemes()
        .then((res) => {
          setMemes(res.slice(0, 10))
        })
      }
    }, [show])

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Configure my Memes!
        </Button>
  
        <Modal contentClassName="min-vh-50 max-vh-50" dialogClassName="mw-50" centered show={show} onHide={handleClose}>
            <Modal.Body style={{overflowY: 'scroll'}}>
              <div className="bg-light p-5 w-100">
                <div className="d-flex align-items-center">
                  <div>
                    <h4 className="mb-0">My Favorite Memes</h4>
                    <p>Selected {selectedMemes.length}/{maxSelected}</p>
                  </div>

                  <div className="d-flex align-items-center ms-auto gap-3">
                    <form onSubmit={(e) => {
                      e.preventDefault()
                      if(inputKeyword !== null && inputKeyword.length > 0) {
                        const alreadyExists = selectedMemes.filter(m => m.name.toLowerCase() === inputKeyword).length > 0;
                        if(!alreadyExists) {
                          setSelectedMemes([...selectedMemes, {
                            name: inputKeyword
                          }]);

                          e.target.reset()
                        } else {
                          alert(`Meme with the name ${inputKeyword} already exists. Please use a different name`)
                        }
                      } else {
                        alert('Cannot add a meme with an empty meme')
                      }
                    }} className="d-flex w-50 position-relative">
                      <input type="text" className="form-control ms-auto form-control-lg" placeholder="Type to filter memes.." onInput={(e) => {
                        setInputKeyword(e.target.value.toLowerCase());
                      }} />
                      <button type="submit" className="btn btn-primary position-absolute end-0 h-100 px-3" style={inputKeyword !== null && inputKeyword.length > 0 ? {opacity: 1} : {opacity: 0, zIndex: -1}}>+</button>
                    </form>
                    <MemesDropdown 
                      label="Select Memes From Dropdown"
                      memes={memes.filter(m => selectedMemes.indexOf(m) == -1)}
                      inputKeyword={inputKeyword}
                      onSelect={(meme) => {
                        selectedMemes.length < maxSelected ? setSelectedMemes([...selectedMemes, meme]) : alert(`You can only add ${maxSelected} memes. Please remove a meme from your favourites to add this meme.`)
                      }}
                    />
                  </div>                    
                </div>

                <SelectedMemes 
                    selected={selectedMemes}
                    set={setSelectedMemes}
                    max={maxShownSelected}
                />
                
              </div>

            </Modal.Body>
            <Modal.Footer className="px-5">
              <div className="d-flex">
                  <button onClick={(e) => {
                    saveMemes()
                  }} className="btn btn-lg btn-primary ms-auto">Save My Memes :)</button>
              </div>
            </Modal.Footer>
        </Modal>
      </>
    );
  }