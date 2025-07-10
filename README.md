<h1 style="color:#a259f7">🚀 NLW Agents</h1>

<p>Este projeto foi desenvolvido durante o evento <b>NLW</b> da Rocketseat.</p>

<h2 style="color:#a259f7">📝 Descrição</h2>
<p>API para gerenciamento de salas, utilizando Fastify, Drizzle ORM e PostgreSQL.</p>

<h2 style="color:#a259f7">🛠️ Principais Tecnologias e Bibliotecas</h2>
<ul>
  <li>⚡ <a href="https://fastify.dev/">Fastify</a>: Framework web para Node.js</li>
  <li>🌧️ <a href="https://orm.drizzle.team/">Drizzle ORM</a>: ORM para TypeScript</li>
  <li>🐘 <a href="https://www.postgresql.org/">PostgreSQL</a>: Banco de dados relacional</li>
  <li>🛡️ <a href="https://zod.dev/">Zod</a>: Validação de esquemas</li>
  <li>🧩 <a href="https://orm.drizzle.team/docs/overview">drizzle-kit</a>: Migrations e geração de schemas</li>
  <li>🌱 <a href="https://github.com/pmndrs/drizzle-seed">drizzle-seed</a>: Seed de dados</li>
  <li>🎨 <a href="https://biomejs.dev/">Biome</a>: Linter e formatter</li>
  <li>🔷 <a href="https://www.typescriptlang.org/">TypeScript</a>: Tipagem estática</li>
</ul>

<h2 style="color:#a259f7">📐 Padrões de Projeto e Organização</h2>
<ul>
  <li>📁 Organização por domínio: <code>src/db/schema</code>, <code>src/db/http/routes</code></li>
  <li>🔗 Separação de rotas, schemas e conexão com banco</li>
  <li>🛡️ Uso de validação de ambiente com Zod</li>
</ul>

<h2 style="color:#a259f7">⚙️ Setup e Configuração</h2>

<h3>Pré-requisitos</h3>
<ul>
  <li>🟣 Node.js 18+</li>
  <li>🐳 Docker e Docker Compose (para banco de dados)</li>
</ul>

<h3>Variáveis de Ambiente</h3>
<p>Crie um arquivo <code>.env</code> na raiz com:</p>

```env
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
PORT=3333
```

<h3>Subindo o Banco de Dados</h3>

```sh
docker-compose up -d
```

<h3>Instalando dependências</h3>

```sh
npm install
```

<h3>Rodando as migrations</h3>

```sh
npx drizzle-kit push:pg
```

<h3>Rodando o seed do banco</h3>

```sh
npm run db:seed
```

<h3>Iniciando o servidor em modo desenvolvimento</h3>

```sh
npm run dev
```

<h2 style="color:#a259f7">📚 Endpoints principais</h2>
<ul>
  <li>✅ <code>GET /health</code> — Health check</li>
  <li>🏠 <code>GET /rooms</code> — Lista as salas</li>
</ul>

<h2 style="color:#a259f7">💡 Exemplo de requisição</h2>

```http
GET http://localhost:3333/rooms
```

<h2 style="color:#a259f7">�� Licença</h2>
ISC 