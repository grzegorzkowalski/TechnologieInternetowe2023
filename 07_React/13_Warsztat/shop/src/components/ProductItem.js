import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductItem = ({data, addToBasket}) => {
    console.log(data);
    const clickHandler = (e) => {
        e.preventDefault();
        if (typeof addToBasket === "function") {
            addToBasket(prev => [...prev, data]);
        }
    }
    return (
        <Card style={{ height: '400px' }}>
            <Card.Img className={'align-middle'} variant="top" src={data.thumb} style={{width: 'auto', height: '200px'}} />
            <Card.Body className={'p-0'}>
                <Card.Title className={'m-0'} style={{height: '100px'}}>{data.title}</Card.Title>
                <Card.Text className={'m-0'} style={{height: '30px'}}>
                    Cena: {data.price} zł
                </Card.Text>
                <Button style={{height: '50px'}} variant="primary" onClick={clickHandler}>Dodaj do koszyka</Button>
            </Card.Body>
        </Card>
    );
};

export default ProductItem;
