import React from 'react';
import './styles/clients.css';

const App = () => {
  const Luana = {
    client: 'Luana',
    age: 27,
    purchase: [
      { name: 'Notebook', price: 'R$:2500' },
      { name: 'Geladeira', price: 'R$:3000' },
      { name: 'Smartphone', price: 'R$:1500' }
    ],
    active: true
  }

  const Mario = {
    client: 'Mario',
    age: 31,
    purchase: [
      { name: 'Notebook', price: 'R$:2500' },
      { name: 'Geladeira', price: 'R$:3000' },
      { name: 'Smartphone', price: 'R$:1500' },
      { name: 'Guitarra', price: 'R$:3500' }
    ],
    active: false
  }

  const datas = Mario;
  
  const totalPricePurchase = datas.purchase.map((item) => {
    return Number(item.price.replace('R$:', ''));
  }).reduce((previous, next) => {
    return previous + next;
  })
    
  return (
    <div>
      <div className="clients">
        <p>Nome: {Luana.client}</p>
        <p>Idade: {Luana.age}</p>
        <p>
          Situação: <span className = {Luana.active ? 'active' : 'inactive'}>{Luana.active ? 'Ativa' : 'Inativa'}</span>
        </p>
        <p>Total de gastos: R$ {totalPricePurchase} {totalPricePurchase > 10000 ? 'Você está gastando demais' : ''}</p>
      </div>
    </div>
  )
}

export default App;
