import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import { addToLS, getStoreCart, removeFromLS} from "../Utility/localStorage";
import Cart from "./Cart";
// import "../assets/style/Bottles.css"

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch("bottle.json")
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])



    // load data from local storage 
    useEffect(() => {
        console.log("second Time Data load call", bottles.length)
        
        if (bottles.length) {
            const storedCart = getStoreCart();
            console.log(storedCart, bottles)
            const saveCart = []
            for(const id of storedCart){
                console.log(id)
                const query = bottles.find(bottol=>bottol.id===id);
                if(query){
                    saveCart.push(query);
                }
            }

            console.log("saveCart", saveCart);
            setCart(saveCart)
        }
    }, [bottles])


    const handleAddtoCart = (bottle) => {
        const newCart = [...cart, bottle]
        setCart(newCart);
        addToLS(bottle.id)
    }


    const handleRemoveToCart = (id, index) =>{
        const remainningCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainningCart)
        removeFromLS(id)
    }



    return (
        <div>
            <h2>Bottles Available : {bottles.length}</h2>
            <Cart cart={cart} handleRemoveToCart = {handleRemoveToCart}></Cart>
            <div className="bottle-container">
                {
                    bottles.map((bottle, idx) => <Bottle
                        key={idx}
                        bottle={bottle}
                        handleAddtoCart={handleAddtoCart}
        
                    ></Bottle>)
                }
            </div>

        </div>
    );
};

export default Bottles;