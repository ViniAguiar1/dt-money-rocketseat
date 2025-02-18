# DT Money

DT Money é uma aplicação de controle financeiro que permite gerenciar suas finanças de forma simples e eficiente.

## Instalação

Para instalar as dependências do projeto, execute:

```bash
npm install
```

## Execução

Para iniciar a aplicação, execute:

```bash
npm start
```

A aplicação estará disponível em `http://localhost:5173`.

## Estrutura do Projeto

- `src/`: Contém o código-fonte da aplicação.
  - `App.tsx`: Componente principal da aplicação.
  - `components/`: Contém os componentes reutilizáveis.
    - `Header/`: Componente de cabeçalho.
    - `Summary/`: Componente de resumo.
  - `pages/`: Contém as páginas da aplicação.
    - `Transactions/`: Página de transações.
  - `styles/`: Contém os estilos globais e temas.

## Tecnologias Utilizadas

- React
- Styled-components

## Requisitos Funcionais (RF)

- [x] O usuário deve poder criar uma nova transação.
- [x] O usuário deve poder obter um resumo da sua conta.
- [x] O usuário deve poder listar todas as transações que já ocorreram.
- [x] O usuário deve poder visualizar uma transação única.

## Regras de Negócio (RN)

- [x] A transação pode ser do tipo crédito, que somará ao valor total, ou débito, que subtrairá.
- [x] Deve ser possível identificar o usuário entre as requisições.
- [x] O usuário só pode visualizar transações que ele criou.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT.
