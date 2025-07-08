# nlw-agents-api

API em desenvolvimento com [Fastify](https://www.fastify.io/) e [Drizzle ORM](https://orm.drizzle.team/), utilizando TypeScript, validações com Zod e suporte ao PostgreSQL.
Projeto criado do zero no NLW#20 da Rocketseat — evento 100% online e gratuito.

## 📦 Stack Principal

- [Fastify](https://www.fastify.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Zod](https://github.com/colinhacks/zod)
- [PostgreSQL](https://www.postgresql.org/)
- [Drizzle Kit](https://orm.drizzle.team/docs/overview/sql-schema)
- [drizzle-seed](https://www.npmjs.com/package/drizzle-seed)

---

## 🚀 Começando

Siga os passos abaixo para colocar a API rodando em sua máquina local.

### Pré-requisitos

Certifique-se de que você tem as seguintes ferramentas instaladas:

* **Node.js**: Versão 20 ou superior (recomendado).
* **npm** (ou Yarn/pnpm): Gerenciador de pacotes.
* **PostgreSQL**: Servidor de banco de dados rodando e acessível.

### Instalação

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/ismaelczar/agents-api.git
    cd agents-api
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    # ou yarn install
    # ou pnpm install
    ```

3.  **Configuração do Ambiente (`.env`)**:

    Crie um arquivo `.env` na raiz do projeto com suas variáveis de ambiente. É crucial configurar a string de conexão com o seu banco de dados PostgreSQL.

    Antes de iniciar o projeto, é necessário configurar as variáveis de ambiente. Para isso, copie o arquivo `.env.example` e renomeie para `.env`:

### 
```bash
# No Linux/macOS:
cp .env.example .env

# No Windows (cmd)
copy .env.example .env

```

## 🛠️ Como Usar

Você pode interagir com a API usando os seguintes comandos:

* ### `npm run dev`

    Inicia o servidor em **modo de desenvolvimento**. Ele inclui `hot-reloading`, o que significa que o servidor reiniciará automaticamente a cada alteração de código que você fizer.

    ```bash
    npm run dev
    ```

* ### `npm start`

    Inicia o servidor em **modo de produção**. Ideal para ambientes de deploy, com otimizações de performance.

    ```bash
    npm start
    ```

* ### `npm run db:seed`

    Popula seu banco de dados com dados iniciais. Útil para testar a API rapidamente sem precisar criar dados manualmente.

    ```bash
    npm run db:seed
    ```

---

## 💻 Exemplo de Uso (Consumindo a API)

Uma vez que a API esteja rodando (por exemplo, em `http://localhost:3333`), você pode começar a enviar requisições.

**Exemplo: Obter todos as salas**

```bash
curl http://localhost:3333/rooms
