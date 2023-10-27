import { useState, useEffect } from 'react';
import info from './data.json';
import './home.css';

const Home = () => {

    const [data, setData] = useState([]);
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        getData();
        
    },[]);

    const getData = async () => {
        setData(info);
        console.log(data);
    }

    const addShoppingCart = (item) => {
        setCarrito([...carrito, item]);
    }

    const removeShoppingCart = (item) => {
        const updatedCarrito = carrito.filter((cartItem) => cartItem.id !== item.id);
        setCarrito(updatedCarrito);
        console.log(updatedCarrito);
    }

    

    return (
        <section className="home">
            <div>
                <h1>Tienda online: </h1>
                <div className="home__container">
                
                    {data.map((item, index) => (
                        <div key={index} className="home__container__item">
                            <h2 className='home__container__item--title'>{item.product}</h2>
                            <p className='home__container__item--subtitle'>Precio: {item.price}$</p>
                            <button className="home__container__item--button" onClick={() => addShoppingCart(item)}>Agregar al Carrito</button>
                        </div>
                    ))}
                </div>
            </div>
            
            <aside>
                <div className='aside__container'>
                    <h2>Carrito de compras</h2>
                    {carrito ? carrito.map((item,index) => (
                        <div key={index} className="home__container__item">
                            <h2 className='home__container__item--title'>{item.product}</h2>
                            <p className='home__container__item--subtitle'>Precio: {item.price}$</p>
                            <button className="home__container__item--button" onClick={() => removeShoppingCart(item)}>Eliminar</button>
                    </div>
                    )): (
                        <div>Carrito vacío</div>
                    )}
                </div>


            </aside>
            
        </section>
    )

}
export default Home;