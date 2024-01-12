import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import artist from "./data/artist";
import ImageUrl from "./components/Chapter02/ImageUrl";
import RGBBoxes from "./components/Chapter02/RGBBoxes";
import Hello from "./components/Chapter05/Hello";
import CurrencyConverter from "./components/Chapter05/CurrencyConverter";
import ParentComponent from "./components/Chapter06/ParentComponent.jsx";
import ShopItem from "./components/Chapter06/ShopItem.jsx";
import product from "./data/product.js";
import './App.css';
import HelloWorld from "./components/Chapter07/HelloWorld.jsx";
import Modal from "./components/Chapter07/Modal.jsx";
import StrobeLight from "./components/Chapter07/StrobeLight.jsx";
import Clock from "./components/Chapter07/Clock.jsx";
import Buttons from "./components/Chapter08/Buttons.jsx";
import TextTyper from "./components/Chapter08/TextTyper.jsx";
import Shop from "./components/Chapter09/Shop.jsx";
import BookInfo from "./components/Chapter12/BookInfo.jsx";
import NumberInfo from "./components/Chapter10/NumberInfo.jsx";

function App() {
  const [count, setCount] = useState(0);

  // const numA = parseInt(prompt("Podaj liczbę A?"));
  // const numB = parseInt(prompt("Podaj liczbę B?"));
  // const age =  parseInt(prompt("Podaj rok urodzenia?"));

  // const mapObjToArray = (artist) => {
  //     const tab = [];
  //     for (const value of Object.values(artist)) {
  //         tab.push(value);
  //     }
  //     return tab;
  // }
  // mapObjToArray(artist);
  //
  //   const numA = parseInt(prompt("Podaj liczbę A?"));
  //   const numB = parseInt(prompt("Podaj liczbę B?"));
  //   const operator =  prompt("Wybierz operator (+, -, *, /)?");
  //
  //   const obj = {
  //       "+": () => <h1>{numA} + {numB} = {numA+numB}</h1>,
  //       "-": () => <h2>{numA} - {numB} = {numA-numB}</h2>,
  //       "*": () => <h4>{numA} * {numB} = {numA*numB}</h4>,
  //       "/": () => <h4>{numA} / {numB} = {numA/numB}</h4>
  //   }
  //   console.log(obj[operator]());
  return (
    <>
        {/*<p>{numA + numB}</p>*/}
        {/*<h1>Masz: { new Date().getFullYear() - age } lat</h1>*/}
        {/*{obj[operator]()}*/}
        <ul>
            {/*{*/}
            {/*    mapObjToArray(artist).map((el) => <li key={uuidv4()}>{el}</li>)*/}
            {/*}*/}
            {/*<li>{artist.firstName}</li>*/}
            {/*<li>{artist.lastName}</li>*/}
            {/*<li>{artist.nickname}</li>*/}
            {/*<li>{artist.age}</li>*/}
        </ul>
        <ImageUrl />
        <RGBBoxes />
        <Hello name="Grzegorz" surname="Kowalski" />
        <CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275} />
        <CurrencyConverter from="PLN" to="USD" value={200} rate={0.25} />
        <ParentComponent>
            <p>Hej</p>
        </ParentComponent>
        <ShopItem product={product} />
        <HelloWorld />
        <Modal heading="Zapisz się do newslettera"/>

        {/*<StrobeLight frequency={500} bgColor="magenta" />*/}
        {/*<StrobeLight frequency={100} bgColor="yellow" />*/}
        {/*<StrobeLight frequency={200} bgColor="red" />*/}
        {/*<StrobeLight frequency={50} bgColor="silver" />*/}

        <Clock />
        <Buttons />
        <TextTyper text="Witaj!" />
        <Shop />
        <BookInfo isbn="0747532699" />
        <NumberInfo number={1} />
        <NumberInfo number={2} />
        <NumberInfo number={5} />
        <NumberInfo number={7} />
        <NumberInfo number={10} />
        <NumberInfo number={16} />
    </>
  )
}

export default App
