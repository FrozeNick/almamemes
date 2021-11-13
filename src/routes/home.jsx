import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useState } from 'react';
import SelectedMemes from "../lib/components/SelectedMemes";

export default function Home() {

    const [selectedMemes, setSelectedMemes] = useState(window.localStorage.getItem('my_memes'));

    const resetMyMemes = () => {
        window.localStorage.removeItem('my_memes');
        setSelectedMemes(null)
    }

    return (
        <Container>
            <div className="my-5 text-center">
                {selectedMemes === null ? <>
                    <h1 className="display-5 fw-normal">Welcome to Alma Memes!</h1>
                <p className="lead w-75 mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequuntur veniam adipisci aliquid non numquam, repudiandae quibusdam sed quo quia fugiat inventore tempora dolorum architecto natus recusandae fuga quam cupiditate.
                </p>
                <Link to="article" className="btn btn-lg btn-primary mt-3">Read our Awesome Article</Link>
                <span className="text-muted small d-block">Please?</span>
                </> : <>
                    <h1 className="display-5 fw-normal">Your Favourite Alma Memes</h1>
                    <SelectedMemes selected={JSON.parse(selectedMemes)} max={6} />
                    <button className="btn btn-lg btn-primary mt-3" onClick={resetMyMemes}>Reset My Memes</button>
                </>}
            </div>
        </Container>
    );
  }