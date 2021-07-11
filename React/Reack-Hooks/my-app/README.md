# Hooks:

- useState = Serve para mudanças de estado dentro dos componentes do react.

- useEffect = Serve para renderizar algo na tela assim que a mesma é carregada.

- useRef = Retorna um objeto com a propriedade **current**. Esse objeto pode ser utilizado para guardarmos valores que irão persistir durante todo o ciclo de vida do elemento. Geralmente usamos o mesmo para nos referirmos a um elemento do DOM, sem precisarmos utilizar o querySelector ou similar. Com o useRef podemos ter acesso aos métodos do elemento.

# Desafios

1. 

- Mostre os dados da aplicação, como apresentado no vídeo. 

- Não utilize CSS externo.

- Use o style para mudar as cores.

- Se a situação estiver ativa pinte de ver, se for inativa pinte de vermelho.

- Se o gasto for maior que 10000 mostre uma mensagem.


Nesse desafio usamos apenas a lógica de programação e a linguagem JavaScript a nosso favor.
Teremos dados de um determinado objeto e com ele precisamos manipular as cores e o seu valor final. Então para resolver isso usamos condicionais e com o ES6 temos os ternários que além de deixar o código mais curto, nos ajuda a deixá-lo mais limpo.

- Primero precisamos mostrar os dados na tela: 

**Mas quais dados?**

```
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
```

Use esses dados ou então crie novos, você decide. :)

**Como fazemos para mostrar?**

Essa é a grande vantagem de usar o react, pois temos o famoso JSX, o qual nos auxília a colocar ações do JavaScript em elementos HTML.

```
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
```

Note que temos algumas condições, uma delas é para ditar qual vai ser a cor do elemento span. Por que fazemos isso? Primeiramente, porque é uma das condições pedidas no desafio, segundo para enfatizar, pois se pessoa estiver com a situação negativa verá um vermelho em sua tela, caso contrário verá uma cor mais amigável para situação: verde.

**Como fazemos essa condição?**

Primeiro a gente precisa ter um dado como base, nesse caso temos o Luana.active, que é um dado do objeto, se ele for true, ele terá a class active que por fim tem a cor verde, caso contrário, ou seja, se for falso, terá a class inactive que terá a cor vermelho.
