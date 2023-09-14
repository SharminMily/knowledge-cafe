import './Cart.css'
// eslint-disable-next-line react/prop-types
const Cart = ({selectedActors, remaining, totalCost}) => {
    console.log(selectedActors)
    return (
        <div>
            <h2>Total Actor: {selectedActors.length}</h2>
            <h4>remaining: {remaining}</h4>
            <h3>Total Cost: {totalCost}</h3>
            {
                // eslint-disable-next-line react/prop-types
                selectedActors.map((actor) => (
                    <li key={actor.id}>{actor.name}</li>
                ))
            }
        </div>
    );
};

export default Cart;