# Pokédex TypeScript Lite

## Sobre o Projeto

O Pokédex TypeScript Lite é uma aplicação desenvolvida em Node.js com TypeScript que realiza consultas à PokeAPI e permite organizar Pokémon em um catálogo local durante a execução do programa.

## Objetivo

Praticar conceitos fundamentais de desenvolvimento Back-End utilizando:

* Node.js
* TypeScript
* Interfaces
* Classes
* Métodos de Array
* Consumo de API com Fetch
* Async/Await
* Tratamento de Erros
* Git e GitHub
* GitFlow
* Kanban

## Tecnologias Utilizadas

* Node.js
* TypeScript
* TSX
* PokeAPI
* Git
* GitHub

## Pré-requisitos

Antes de executar o projeto é necessário possuir instalado:

* Node.js
* npm
* Git

## Estrutura do Projeto

src/
├── controllers/
├── models/
├── services/
├── utils/
└── main.ts

## Como Instalar

Clone o repositório:

```bash
git clone LINK_DO_REPOSITORIO
```

Acesse a pasta:

```bash
cd pokedex-typescript-lite
```

Instale as dependências:

```bash
npm install
```

## Como Executar

```bash
npx tsx src/main.ts
```

## Funcionalidades

* Buscar Pokémon por nome
* Buscar Pokémon por ID
* Consumir dados da PokeAPI
* Tratar erro para Pokémon inexistente
* Adicionar Pokémon ao catálogo
* Impedir duplicidade
* Buscar Pokémon no catálogo por ID
* Remover Pokémon do catálogo
* Listar Pokémon cadastrados

## Exemplos de Execução

### Busca válida

Entrada:

```text
pikachu
```

Saída:

```text
#25 - pikachu
```

### Busca inválida

Entrada:

```text
pokemon-inexistente
```

Saída:

```text
[ERRO] Pokémon não encontrado: pokemon-inexistente
```

### Duplicidade

Entrada:

```text
Adicionar pikachu duas vezes
```

Saída:

```text
[AVISO] pikachu já está no catálogo.
```

### Remoção

Entrada:

```text
Remover ID 25
```

Saída:

```text
[OK] Pokémon removido do catálogo.
```

## Conceitos Aplicados

### Interfaces

Foram utilizadas interfaces para representar os dados simplificados dos Pokémon e a resposta da API.

### Fetch e Async/Await

A consulta à PokeAPI é realizada utilizando fetch com funções assíncronas.

### Tratamento de Erros

Foi utilizado try/catch para tratar erros de conexão e Pokémon inexistentes.

### Métodos de Array

Foram utilizados:

* map
* some
* filter
* find

### Classe CatalogoService

Responsável por:

* adicionar Pokémon
* listar Pokémon
* buscar por ID
* remover Pokémon
* evitar duplicidades

## Kanban

Link do Kanban:

COLE_AQUI_O_LINK_DO_GITHUB_PROJECT

## Branches Utilizadas

* principal (main)
* develop
* feat/pokedex

## Melhorias Futuras

* Criar menu interativo no terminal
* Persistir catálogo em arquivo JSON
* Exibir HP, Attack e Defense
* Filtrar Pokémon por tipo

## Autor

Daniele Costa
