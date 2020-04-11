import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import A, {CompB as B} from './componentes/DoisComponentes'
// import MultiElementos from'./componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from'./componentes/Familia'
import Membro from './componentes/Membro'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Familia>
            <Membro nome = "André" sobrenome = "Pereira"/>
            <Membro nome = "Marina" sobrenome = "Pereira"/>
        </Familia>
        {/* <FamiliaSilva/> */}
        {/* <MultiElementos/> */}
        {/* <A valor = "Oi, eu sou o A"/>
        <B valor = "Oi, eu sou o B"/>  */}

        {/* <PrimeiroComponente valor = "bom dia"/> */}
    </div>
, elemento)




// ReactDOM.render(
// <ul>
//     <li>1 - Kelvin</li>
//     <li>2 - Kelson</li>
// </ul>
//     , elemento)