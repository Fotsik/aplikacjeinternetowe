import React from 'react';


export default function Calculator(){

const liczba1 = document.getElementById('liczba1');
const liczba2 = document.getElementById('liczba2');
const wynik = document.getElementById('wynik');
const div1 = document.getElementById('div1');
const kolor = document.getElementById('kolor');


function Dodaj(e){
    const liczba1 = document.getElementById('liczba1');
const liczba2 = document.getElementById('liczba2');
const wynik = document.getElementById('wynik');
const div1 = document.getElementById('div1');
const kolor = document.getElementById('kolor');
    wynik.value =`${liczba1.value} + ${liczba2.value} = ${parseInt(liczba1.value) + parseInt(liczba2.value)}`;
    liczba1.value = '';
    liczba2.value = '';
};

const Odejmij = (e) =>{
    const liczba1 = document.getElementById('liczba1');
const liczba2 = document.getElementById('liczba2');
const wynik = document.getElementById('wynik');
const div1 = document.getElementById('div1');
const kolor = document.getElementById('kolor');
    wynik.value =`${liczba1.value} - ${liczba2.value} = ${parseInt(liczba1.value) - parseInt(liczba2.value)}`;
    liczba1.value = '';
    liczba2.value = '';
};
const Pomnoz = (e) =>{
    const liczba1 = document.getElementById('liczba1');
const liczba2 = document.getElementById('liczba2');
const wynik = document.getElementById('wynik');
const div1 = document.getElementById('div1');
const kolor = document.getElementById('kolor');
    wynik.value =`${liczba1.value} * ${liczba2.value} = ${parseInt(liczba1.value) * parseInt(liczba2.value)}`;
    liczba1.value = '';
    liczba2.value = '';
};
const Podziel = (e) =>{
    const liczba1 = document.getElementById('liczba1');
const liczba2 = document.getElementById('liczba2');
const wynik = document.getElementById('wynik');
const div1 = document.getElementById('div1');
const kolor = document.getElementById('kolor');
    wynik.value =`${liczba1.value} / ${liczba2.value} = ${parseInt(liczba1.value) / parseInt(liczba2.value)}`;
    liczba1.value = '';
    liczba2.value = '';
};

const Silnia = (e) => {
    const liczba1 = document.getElementById('liczba1');
const liczba2 = document.getElementById('liczba2');
const wynik = document.getElementById('wynik');
const div1 = document.getElementById('div1');
const kolor = document.getElementById('kolor');
    let x = prompt("Podaj liczbę", "")
    x = parseInt(x);
    let liczba = 1;
    for(let i = 1; i <= x; i++){
        liczba = liczba * i;
    }
    alert(`Silnia z ${x} to ${liczba}`);
}

const Pierwiastek = () => {
    const liczba1 = document.getElementById('liczba1');
const liczba2 = document.getElementById('liczba2');
const wynik = document.getElementById('wynik');
const div1 = document.getElementById('div1');
const kolor = document.getElementById('kolor');
    let x = prompt("Podaj liczbę", "")
    let y = parseInt(x);
    alert(`Pierwiastek z ${x} to ${Math.sqrt(y)}`);
}

const Spoteguj = () => {
    const liczba1 = document.getElementById('liczba1');
const liczba2 = document.getElementById('liczba2');
const wynik = document.getElementById('wynik');
const div1 = document.getElementById('div1');
const kolor = document.getElementById('kolor');
    let x = prompt("Podaj liczbę", "")
    x = parseInt(x);
    let liczba = 2;
    for(let i = 1; i < x; i++ ){
        liczba = liczba * 2;
    }
    alert(`2 do potęgi ${x} to ${liczba}`);
}

const zmienTlo = () => {
    const liczba1 = document.getElementById('liczba1');
const liczba2 = document.getElementById('liczba2');
const wynik = document.getElementById('wynik');
const div1 = document.getElementById('div1');
const kolor = document.getElementById('kolor');
    div1.style.backgroundColor =  kolor.value;
}

const zmienObramowanie = () => {
    const liczba1 = document.getElementById('liczba1');
const liczba2 = document.getElementById('liczba2');
const wynik = document.getElementById('wynik');
const div1 = document.getElementById('div1');
const kolor = document.getElementById('kolor');
    div1.style.borderColor = kolor.value;
}


const zmienWysokosc = () => {
    const liczba1 = document.getElementById('liczba1');
const liczba2 = document.getElementById('liczba2');
const wynik = document.getElementById('wynik');
const div1 = document.getElementById('div1');
const kolor = document.getElementById('kolor');
const wartosc = document.getElementById('wartosc');
    div1.style.height = wartosc.value + "px";
}

const zmienSzerokosc = () => {
    const liczba1 = document.getElementById('liczba1');
const liczba2 = document.getElementById('liczba2');
const wynik = document.getElementById('wynik');
const div1 = document.getElementById('div1');
const kolor = document.getElementById('kolor');
const wartosc = document.getElementById('wartosc');
    div1.style.width = wartosc.value + "px";
}

const zmienGrubosc = () => {
    const liczba1 = document.getElementById('liczba1');
const liczba2 = document.getElementById('liczba2');
const wynik = document.getElementById('wynik');
const div1 = document.getElementById('div1');
const kolor = document.getElementById('kolor');
const wartosc = document.getElementById('wartosc');
    div1.style.borderWidth = wartosc.value + "px";
}

const pozycjaZLewej = () => {
    const liczba1 = document.getElementById('liczba1');
const liczba2 = document.getElementById('liczba2');
const wynik = document.getElementById('wynik');
const div1 = document.getElementById('div1');
const kolor = document.getElementById('kolor');
const wartosc = document.getElementById('wartosc');
    div1.style.removeProperty('right');
    div1.style.left = wartosc.value + "px";
}

const pozycjaZGory = () => {
    const liczba1 = document.getElementById('liczba1');
const liczba2 = document.getElementById('liczba2');
const wynik = document.getElementById('wynik');
const div1 = document.getElementById('div1');
const kolor = document.getElementById('kolor');
const wartosc = document.getElementById('wartosc');
    div1.style.removeProperty('bottom');
    div1.style.top = wartosc.value + "px";
}

    return(
        <div className="kalkulator">
            <form id="forma1">
            <input type="text" type="number" id="wartosc"/>
            <button type="button" onClick={zmienWysokosc} >Wysokość</button>
            <button type="button" onClick={zmienSzerokosc}>Szerokość</button>
            <button type="button" onClick={zmienGrubosc}>Grubość ramki</button>
            <button type="button" onClick={pozycjaZLewej}>Pozycja z lewej</button>
            <button type="button" onClick={pozycjaZGory}>Pozycja z góry</button>
            <br/>
            <input type="color" id="kolor"/>
            <button type="button" onClick={zmienTlo}>Kolor tła</button>
            <button type="button" onClick={zmienObramowanie}>Kolor obramowania</button>
        </form>
        <div className="div1" id="div1"></div>
        <div className="div2" id="div2">
            <form id="froma2">
                <input placeholder="Liczba 1" id="liczba1" type="text"/>
                <button type="button" onClick={Dodaj}>+</button>
                <button type="button" onClick={Odejmij}>-</button>
                <button type="button" onClick={Pomnoz}>*</button>
                <button type="button" onClick={Podziel}>/</button>
                <input placeholder="Liczba 2" id="liczba2" type="text"/>
                <br/><hr/>
                <input readOnly id="wynik" value="Wynik" type="text" id="wynik"/>
                <br/><hr/>
                <button type="button" onClick={Silnia}>!</button>
                <button type="button" onClick={Pierwiastek}>pierwiastek</button>
                <button type="button" onclick={Spoteguj}>2^n</button>      
            </form>
        </div>
        </div>
    );
}