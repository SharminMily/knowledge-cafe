import { useState } from 'react';
import './Home.css'
import { useEffect } from 'react';
import Cart from '../Cart';
const Home = () => {
    const [allActors, setActors] = useState([]);

    const [selectedActors, setSelectedActor] = useState([])

    const [remaining, setRemaining] = useState(0);
    const [totalCost, setTotalCost] = useState(0)

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setActors(data))
    }, [])
    // console.log(allActors)
    const handleSelectActor = (actor) => {
        const isExist = selectedActors.find((item) => item.id == actor.id)

        let count = actor.salary;

        if (isExist) {
            alert('selected')
        }
        else {
            selectedActors.forEach((item) => {
                count = count + item.salary;
                // count += item.salary;
            })
            const totalRemaining = 20000 - count
           
            if (count > 20000) {
               return alert('taka ses r hobe na')
            }
            else {
                setTotalCost(count)
                setRemaining(totalRemaining)

                const newActor = ([...selectedActors, actor])
                setSelectedActor(newActor)
            }

        }
        console.log(isExist)

    }
    console.log(selectedActors)
    return (
        <div className=''>
            <div className="home-container">
                <div className="card-container">
                    {
                        allActors.map(actor => (
                            // eslint-disable-next-line react/jsx-key
                            <div key={actor.id} className="card">
                                <div className="card-img">
                                    <img className="photo" src={actor.image} alt="" />
                                </div>
                                <h2>{actor.name}</h2>
                                <p>
                                    <small>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Debitis, iure?
                                    </small>
                                </p>
                                <div className="info">
                                    <p>salary:${actor.salary}</p>
                                    <p>{actor.role}</p>
                                </div>
                                <button onClick={() => handleSelectActor(actor)} className="card-btn">
                                    Select
                                </button>
                            </div>
                        ))
                    }


                </div>
                <div className="cart">
                    <Cart selectedActors={selectedActors}
                        remaining={remaining}
                        totalCost={totalCost}
                    ></Cart>
                </div>
            </div>

        </div>
    );
};

export default Home;