import {useState, useEffect} from "react";
import {Row} from "react-bootstrap";
import {Link} from "react-router-dom"
import ProductItem from "../components/ProductItem";

const Home = () => {
    const [pens, setPens] = useState([]);
    const [basket, setBasket] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/products")
            .then(res => res.json())
            .then(res => setPens(res))
            .catch(error => console.log(error))
    }, [])
    return (
        <>
            <Row>
                <ul>
                    {
                        basket.map((el, i) => <li key={i}>{el.title}</li>)
                    }
                </ul>
                {
                    Boolean(basket.length)
                    &&
                    <>
                        <h2 style={{color: "magenta"}}>Suma: {basket.reduce((prev, curr) => prev + curr.price, 0)} zł</h2>
                        <Link to={`/summary/${basket.reduce((prev, curr) => prev + curr.price, 0)}`}>Podsumowanie</Link>
                    </>
                }
            </Row>
            <Row className={'text-center'}>
                {
                    pens.map((el) => <Link className={'col-3 mb-2 p-2'} to={`/product/${el.id}`}><ProductItem data={el} addToBasket={setBasket} key={el.id} /></Link>)
                }
            </Row>
            
        </>

    );
};

export default Home;
