# Sobre o projeto:

Esse projeto é focado em aprender React do básico ao avançado. 

# Iniciando o projeto:

Diferente dos demais projetos, esse não será iniciado com create-react-app(como todos estão acostumados), pois o intuito dele é repassar a vocês e a mim o React em si desde o básico.

### Para iniciar digite o seguinte comando:

```
npm init -y 
```

### Agora precisamos configurar o webpack

**O que é o webpack?**

É um module bundler(empacotador de módulos) para JavaScript, ele junta os arquivos JS(e também outros formatos) da sua aplicação(sendo arquivos seus ou dependências externas) em um arquivo só(ou até mesmo mais de um), de uma forma otimizada. Os arquivos são unificados na ordem certa, sem duplicação e podem ser minificados(na programação esse termo refere-se a remoção de partes do código que não são obrigatórios) para reduzir o tamanho.

Para estudar mais sobre webpack leia esse artigo:

 ```
 https://www.webdevdrops.com/webpack-sem-medo-introducao-af889eb659e7/

 https://medium.com/rocketseat/entendendo-e-dominando-o-webpack-4b2e8b3e02da
 ```

 Para saber mais sobre minificação: 
 ```
 https://www.mundojs.com.br/2018/01/10/o-que-e-minificacao/
 ```

O webpack possui alguns conceitos fundamentais que precisamos para seguir a configurar ele. São eles: entry, output, loaders e plugins.

- Entry: O webpack possui um gráfico de dependências e para montá-lo precisamos de um arquivo inicial.

- Output: Define o nome e o local do pacote gerado pelo webpack. Geralmente o diretório padrão é o ./dist.

- Loaders: Por padrão o webpack só entende arquivos JavaScript e para que ele possa entender outros tipos de arquivos devemos usar os Loaders que são módulos que podem ser instalados separadamente possibilitando que o webpack converta esses arquivos em módulos válidos e os adicione ao gráfico de dependência.

- Plugins: Os plugins servem para executar uma variedade de tarefas como otimização de pacotes, gerenciamento de asserts e injeção de variáveis de ambiente.

### Agora podemos enfim configurar o webpack, siga as seguintes estruções:

Primeiro precisamos instalar as seguintes dependências:

```
npm install -D webpack webpack-cli
```

Depois disso, precisamos criar uma pasta na raiz do projeto nomeada como src e dentro dela criar um arquivo index.js.

```
mdkir src
touch src/index.js
```
**OBS: O webpack 4, por padrão, irá procurar um aquivo ```index.js``` dentro da pasta ```src``` como ponto de entrada para o build do projeto.**

Agora vamos adicionar no arquivo ```package.json``` um script de build

```
"scripts": {
    "build": "webpack --mode production"
  },
```

Esse código irá procurar pela pasta src e o arquivo index.js e logo em seguida vai gerar uma pasta chamada dist com o gráfico de dependências, porém nesse momento estará vazio, pois não há nada no index.js.

**Agora antes de prosseguirmos precisamos configurar um transpilador que permite escrever JS de uma maneira mais moderna, ele é o Babel.**

- O que é o Babel?

O babel é um transpilador que nos ajuda a escrever códigos JavaScript de uma maneira moderna. Ele usa um conjunto de plugins para transpilar seu código ECMAScript6 para ECMAScript5 e isso faz com que seu código possa funcionar em browsers atuais, que ainda não implementaram certas funcionalidades do ESNext.

Para continuar configurando precisamos adicionar as seguintes depedências:

```
npm install -D babel-core babel-loader babel-preset-env
```

O ```babel-core``` é a lib que contêm as fundações do babel para realizar a transpilação do código ES6 para ES5.

O ```babel-loader``` é um plugin para webpack, ele serve para você utilizar o babel durante o seu processo de build/bundle com o webpack.

O ```babel-preset-env``` é um plugin do babel que sabe como transformar as funcionalidades do ES6 em código ES5 de forma a dar suporte a uma grade de browsers.

Para que possamos adicionar as dependências que instalamos precisamos continuar a configurar o webpack para utilizar o babel durante o process de bundling(empacotamento). Dito isso, precisamos criar um novo arquivi nomeado como webpack.config.js que conterá os seguintes comandos:

```
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}
```


Esse arquivo nos diz que seguiremos algumas regras, uma delas é usar o babel-loader nos arquivos que possuem .js como extensão. Isso fazer com que o babel seja acionado para transpilar cada arquivo JS antes do webpack realizar o bundle.

Depois disso vamos adicionar mais um arquivo na raiz do projeto nomeado: .babelrc. Isso porque precisamos dele para que o babel utilize o preset env. Ele terá os seguintes comandos:

```
{
    "presets": [
        "env"
    ]
}
```

### Adicionando o react no arquivo.

```
npm install react react-dom
```

Vamos adicionar também o babel-preset-rect para que o babel seja capaz de transpilar códigos com sintaxe JSX.

```
npm install -D babel-preset-react
```

E logo em seguida precisamos modificar o arquivo .babelrc para adicionarmos o preset do react. Ele ficará assim:

```
{
    "presets": [
        "env",
        "react"
    ]
}
```
E então enfim concluímos as configurações necessárias para podermos rodar o nosso react com JSX.

Agora vamos começar criando o arquivo src/App.js

Para fins de exemplo irei fazer uma estrutura simples.

```
import React from 'react';

const App = () => {
    return (
        <div> 
            <p>Welcome, friend</p>
        </div>
    )
}

export default App;
```

Feito isso, precisamos renderizar nossa app no DOM.  