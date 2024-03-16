import "../assets/style/Cart.css"
const Cart = ({ cart, handleRemoveToCart }) => {
    return (
        <div className="">
            <h2>Cart : {cart.length}</h2>
            <div className="cart-container">
                {cart.map((bottle, idx) => <div key={idx}>
                    <img src={bottle.img}></img>
                    <button className="btn-bg" onClick={()=>handleRemoveToCart(bottle.id)}>Remove</button>
                </div>)}
            </div>
        </div>
    );
};

export default Cart;