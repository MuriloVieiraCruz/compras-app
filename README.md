# Aplicativo Compras

Este é um aplicativo mobile desenvolvido com **React Native (via Expo)** usando **TypeScript**, com foco em registrar e listar itens de compras. Ele utiliza bibliotecas modernas e uma estrutura de projeto limpa, ideal para estudos e expansão.

---

## Tabela de Conteúdo

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Execução](#instalação-e-execução)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Contato](#contato)

---

## Sobre o Projeto

O projeto **Compras** tem como objetivo permitir o controle simples de itens que precisam ser comprados, simulando uma lista de tarefas. É ideal para estudos de React Native com Expo e boas práticas em desenvolvimento mobile.

Funcionalidades previstas:
- Adicionar itens à lista de compras;
- Marcar itens como comprados;
- Persistência local com Async Storage.

---

## 🛠 Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Async Storage](https://react-native-async-storage.github.io/async-storage/)
- [React Native SVG](https://github.com/software-mansion/react-native-svg)
- [Lucide React Native Icons](https://lucide.dev/icons)
- [ESLint + Prettier](https://prettier.io/)

---

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Um emulador Android/iOS ou o app **Expo Go** em seu celular.

---

## Instalação e Execução

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/compras.git
cd compras
Instale as dependências:

npm install
# ou
yarn
Inicie o projeto com o Expo:

npx expo start
Use a câmera do celular com o app Expo Go ou emule em um simulador Android/iOS.

Estrutura de Pastas
A organização segue a estrutura mostrada na imagem que você enviou. Dentro de src:

src/
├── app/
│   └── Home/
│       ├── index.tsx      # Tela principal
│       └── styles.ts      # Estilos da tela
│
├── assets/                # Imagens, fontes, etc.
│
├── components/            # Componentes reutilizáveis
│   ├── Button/
│   ├── Filter/
│   ├── Input/
│   ├── Item/
│   └── StatusIcon/
│
├── storage/               # Camada de acesso ao Async Storage
│   └── index.ts           # Funções utilitárias de salvar/buscar dados
│
├── types/                 # Definições globais de tipos/interfaces
│   └── ...
│
└── index.ts               # Ponto de entrada que agrupa rotas ou providers

Contribuindo
Contribuições são sempre bem-vindas!

Faça um fork;

Crie uma branch com sua feature: git checkout -b minha-feature;

Faça commit das suas alterações: git commit -m 'feat: minha nova feature';

Faça push para a sua branch: git push origin minha-feature;

Abra um Pull Request.

Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

📬 Contato
Feito por Murilo Vieira Cruz — entre em contato!

GitHub: github.com/MuriloVieiraCruz

Se quiser, posso gerar esse `README.md` automaticamente no seu projeto ou customizar com seu
