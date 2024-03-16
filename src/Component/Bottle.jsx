import "../assets/style/Bottles.css"

const Bottle = ({bottle, handleAddtoCart}) => {
    const {name, img, price} = bottle


    // console.log(handleButtonClick)


    return (
        <div className="bottle">
            <h3>Name : {name}</h3>
            <img src={img} alt="" />
            <h3>Price : {price}</h3>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, Lorem ipsum dolor sit amet.</p>

            <button onClick={()=>handleAddtoCart(bottle)} className="btn-bg">
                Add to Cart
            </button>
        </div>
    );
};

export default Bottle;