# Projeto My-Team

O objetivo deste projeto é buscar informações sobre um time selecionado, como país, temporada, liga e time. Além disso, você poderá visualizar todos os jogadores do time durante a temporada, a formação mais utilizada e o número de jogos (incluindo vitórias, empates, derrotas e o total de jogos). Também há um gráfico mostrando a quantidade de gols marcados ao longo do tempo. No entanto, para acessar essa aplicação, é necessário obter uma chave de acesso que será fornecida ao usuário na documentação da API. Durante o processo de login, haverá um link que redirecionará para a API.

## Features

- [x] Login com chave de acesso.
- [x] Selecionar o país do time.
- [x] Escolher a temporada desejada.
- [x] Selecionar a liga do time.
- [x] Escolher o time específico.
- [x] Visualizar a lista de jogadores do time selecionado.
- [x] Ver a formação mais utilizada pelo time.
- [x] Ver o número total de jogos disputados pelo time.
- [x] Gráfico com estatísticas de gols marcados ao longo do tempo.

## Tecnologias utilizadas

- [vite](https://www.npmjs.com/package/json-server)
- [typescript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [Styled-component](https://styled-components.com/docs)
- [vitest](https://vitest.dev/)
- [react-router-dom](https://reactrouter.com/en/main)
- [redux](https://redux-toolkit.js.org/)
- [apexcharts](https://apexcharts.com/)
- [react-apexcharts](https://www.npmjs.com/package/react-apexcharts)
- [react-icons](https://react-icons.github.io/react-icons/)
- [StoryBook](https://storybook.js.org/)

## ARCHITECTURE

1. ## Component
   - Armazena todos os componentes do projeto, tanto os reutilizáveis quanto os não reutilizáveis.
2. ## Types
   - Eu guardo todas os types utilizadas nos componentes.
3. ## Router
   - Responsável pelo roteamento geral do projeto.
4. ## Pages
   - Guardas as Páginas do projeto.
5. ## Images
   - Armazena todas as imagens utilizadas.
6. ## Template
   - Serve para combinar os componentes criados e transformá-los em um único elemento.
7. ## Context
   - Contém o contexto de autenticação da aplicação.
8. ## Styles
   - Armazena o CSS global da aplicação.
9. ## App
   - Contém todas as configurações do Redux.
10. ## Utils
   - Guarda funções reutilizáveis do projeto.

Essa organização visa facilitar o desenvolvimento e a manutenção do projeto, mantendo uma estrutura clara e modular.

## Project Setup

- Siga as instruções abaixo, por etapa, para rodar o projeto:
----

## OBS: Este Projeto contem variavel de ambiente adicione elas antes o usar o projeto

- VITE_URL_API=https://v3.football.api-sports.io

---------

## Como rodar o projeto

```bash
# instale as dependencias
$ npm install ou yarn

# iniciar o projeto
npm run dev
ou
yarn dev

```

### caso queira buildar o projeto

```sh
npm run build ou yarn build
```

### caso queira rodar os test

```sh
npm run test ou yarn test
```

### caso queira rodar o storyBook

```sh
npm run sb ou yarn sb
```
