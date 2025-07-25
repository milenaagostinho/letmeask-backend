# 🚀 NLW Agents - Server

> Sistema inteligente de Q&A com transcrição de áudio e IA, desenvolvido durante o evento **NLW** da Rocketseat.

## 📝 Descrição

API REST para gerenciamento de salas, perguntas e transcrição de áudio com integração ao Google Gemini AI. O sistema permite criar salas de estudo, fazer perguntas em texto ou áudio, e receber respostas inteligentes baseadas no contexto das transcrições.

## 🛠️ Principais Tecnologias e Bibliotecas

### Backend & Framework
- ⚡ **[Fastify](https://fastify.dev/)** - Framework web rápido para Node.js
- 🔷 **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para JavaScript
- 🛡️ **[Zod](https://zod.dev/)** - Validação de esquemas e tipagem runtime
- 🌐 **[@fastify/cors](https://github.com/fastify/fastify-cors)** - Configuração de CORS
- 📁 **[@fastify/multipart](https://github.com/fastify/fastify-multipart)** - Upload de arquivos
- 🔧 **[fastify-type-provider-zod](https://github.com/turkerdev/fastify-type-provider-zod)** - Integração Fastify + Zod

### Banco de Dados & ORM
- 🐘 **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional
- 🌧️ **[Drizzle ORM](https://orm.drizzle.team/)** - ORM moderno para TypeScript
- 🧩 **[drizzle-kit](https://orm.drizzle.team/docs/overview)** - Migrations e CLI
- 🌱 **[drizzle-seed](https://github.com/pmndrs/drizzle-seed)** - Seed de dados
- 🐳 **[pgvector](https://github.com/pgvector/pgvector)** - Extensão PostgreSQL para vetores (embeddings)

### IA & Machine Learning
- 🤖 **[@google/genai](https://www.npmjs.com/package/@google/genai)** - Google Gemini AI SDK
- 🎤 **Transcrição de áudio** - Conversão de áudio para texto
- 🧠 **Embeddings** - Geração de vetores semânticos
- 💬 **Q&A Inteligente** - Respostas baseadas em contexto

### Ferramentas de Desenvolvimento
- 🎨 **[Biome](https://biomejs.dev/)** - Linter e formatter moderno
- 🔥 **[ultracite](https://www.npmjs.com/package/ultracite)** - Ferramenta de desenvolvimento
- 🐳 **[Docker](https://www.docker.com/)** - Containerização

## 🏗️ Arquitetura do Projeto

```
src/
├── db/
│   ├── schema/           # Esquemas do banco de dados
│   │   ├── rooms.ts      # Schema das salas
│   │   ├── questions.ts  # Schema das perguntas
│   │   └── audio-chunks.ts # Schema dos áudios
│   ├── http/routes/      # Rotas da API
│   │   ├── create-room.ts
│   │   ├── get-rooms.ts
│   │   ├── create-question.ts
│   │   ├── get-room-questions.ts
│   │   └── upload-audio.ts
│   ├── migrations/       # Migrations do banco
│   ├── connection.ts     # Conexão com PostgreSQL
│   └── seed.ts          # Dados iniciais
├── services/
│   └── gemini.ts        # Integração com Google Gemini AI
├── env.ts               # Validação de variáveis de ambiente
└── server.ts            # Configuração do servidor
```

## ⚙️ Setup e Configuração

### Pré-requisitos

- 🟣 **Node.js 18+**
- 🐳 **Docker e Docker Compose** (para banco de dados)
- 🔑 **Google Gemini API Key** (para funcionalidades de IA)

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd server
```

### 2. Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Banco de dados
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents

# Servidor
PORT=3333

# Google Gemini AI
GEMINI_API_KEY=sua_api_key_aqui
```

### 3. Subindo o Banco de Dados

```bash
docker-compose up -d
```

### 4. Instalando dependências

```bash
npm install
```

### 5. Executando as migrations

```bash
npm run db:migrate
```

### 6. Populando o banco (opcional)

```bash
npm run db:seed
```

### 7. Iniciando o servidor

```bash
# Desenvolvimento (com hot reload)
npm run dev

# Produção
npm start
```

## 📚 API Endpoints

### Health Check
- `GET /health` - Verificação de saúde da API

### Salas
- `GET /rooms` - Lista todas as salas
- `POST /rooms` - Cria uma nova sala

### Perguntas
- `GET /rooms/:roomId/questions` - Lista perguntas de uma sala
- `POST /rooms/:roomId/questions` - Cria uma pergunta em uma sala

### Upload de Áudio
- `POST /rooms/:roomId/upload-audio` - Faz upload e transcreve áudio

## 🎤 Funcionalidades de IA

### Transcrição de Áudio
- Converte arquivos de áudio em texto usando Google Gemini
- Suporta múltiplos formatos de áudio
- Transcrição em português brasileiro

### Geração de Embeddings
- Converte texto em vetores semânticos
- Armazenamento eficiente no PostgreSQL com pgvector
- Busca por similaridade semântica

### Respostas Inteligentes
- Responde perguntas baseadas no contexto das transcrições
- Utiliza RAG (Retrieval-Augmented Generation)
- Respostas em português brasileiro

## 🧪 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Servidor com hot reload

# Produção
npm start               # Servidor local (TypeScript)
npm run build           # Compila o projeto para JavaScript
npm run start:prod      # Servidor em produção (JavaScript compilado)
npm run deploy:prepare  # Prepara o build para deploy (build + migrations)

# Banco de dados
npm run db:generate     # Gera migrations
npm run db:migrate      # Executa migrations
npm run db:seed         # Popula o banco com dados iniciais
```

## 🚀 Deploy e Produção

### Build para Produção

Para preparar o projeto para produção, siga os passos abaixo:

```bash
# 1. Instalar dependências
npm install --production=false

# 2. Compilar o TypeScript para JavaScript
npm run build

# 3. Executar migrations no banco de produção
npm run db:migrate

# 4. Iniciar o servidor em produção
npm run start:prod
```

### Script de Deploy Automatizado

```bash
# Executa build + migrations em um único comando
npm run deploy:prepare

# Depois inicia o servidor
npm run start:prod
```

### Variáveis de Ambiente para Produção

Configure as seguintes variáveis de ambiente no servidor de produção:

```env
# Banco de dados (URL de produção)
DATABASE_URL=postgresql://usuario:senha@host:5432/database_prod

# Servidor
PORT=3333
NODE_ENV=production

# Google Gemini AI
GEMINI_API_KEY=sua_api_key_de_producao
```

### Estrutura após Build

Após executar `npm run build`, o projeto compilado ficará em:

```
dist/
├── server.js           # Servidor principal
├── env.js              # Validação de ambiente
├── db/
│   ├── connection.js   # Conexão com banco
│   ├── schema/         # Esquemas compilados
│   └── migrations/     # Migrations
└── services/
    └── gemini.js       # Serviços de IA
```

### Deploy em Serviços Cloud

#### Railway, Render, ou similares:
```bash
# Comando de build
npm run deploy:prepare

# Comando de start
npm run start:prod
```

#### PM2 (Process Manager):
```bash
# Instalar PM2 globalmente
npm install -g pm2

# Iniciar com PM2
pm2 start dist/server.js --name "nlw-agents-server"

# Configurar para reiniciar automaticamente
pm2 startup
pm2 save
```

## 🐳 Docker

O projeto utiliza Docker Compose para o banco de dados PostgreSQL com a extensão pgvector:

```yaml
services:
  nlw-agents-pg:
    image: pgvector/pgvector:pg17
    environment:
      POSTGRES_USER: docker
      POSTGRES_PASSWORD: docker
      POSTGRES_DB: agents
    ports:
      - "5432:5432"
```

## 🔧 Configurações Importantes

### TypeScript
- Utiliza `--experimental-strip-types` do Node.js
- Configuração otimizada para desenvolvimento
- Type checking rigoroso com Zod

### Biome
- Linting e formatação automática
- Configurações personalizadas em `biome.json`
- Integração com VSCode

## 💡 Exemplo de Uso

### Criando uma sala
```bash
curl -X POST http://localhost:3333/rooms \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Aula de JavaScript",
    "description": "Conceitos fundamentais de JS"
  }'
```

### Fazendo uma pergunta
```bash
curl -X POST http://localhost:3333/rooms/{roomId}/questions \
  -H "Content-Type: application/json" \
  -d '{
    "question": "O que são closures em JavaScript?"
  }'
```

### Upload de áudio
```bash
curl -X POST http://localhost:3333/rooms/{roomId}/upload-audio \
  -F "audio=@audio.mp3"
```


**Desenvolvido com ❤️ durante o NLW da Rocketseat**
