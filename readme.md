# 📦 StockWise - Sistema de Gestão de Estoque

Aplicação web desenvolvida com **Angular 19** para gerenciamento de estoque, com foco em **boas práticas de frontend, arquitetura escalável e experiência do usuário**.

> ⚠️ Projeto em desenvolvimento contínuo como parte da minha transição para desenvolvimento frontend.

---

## 📸 Preview

<!-- Adicione prints aqui -->
<!-- Exemplo:
![Dashboard](./docs/dashboard.png)
-->

---

## 🚀 Demo

- 🌐 Deploy: (coloque aqui se tiver)
- 🎥 Vídeo: (opcional - recomendado)

---

## 💡 O que este projeto demonstra

### Angular & Frontend
- Angular 19 com **Standalone Components**
- Uso de **Signals** para gerenciamento de estado
- Estrutura escalável: `Core / Shared / Features`
- **Reactive Forms** com validações customizadas
- Integração com **PrimeNG** para UI

### Arquitetura & Boas práticas
- Separação de responsabilidades (services, components, guards)
- Uso de **Http Interceptors** para tratamento de requisições
- **Auth Guards** para controle de acesso
- Código organizado e reutilizável

### Integração e evolução
- Backend mockado com **JSON Server**
- Estrutura preparada para migração para **NestJS + Prisma**
- Integração inicial com automações (n8n)

---

## 🛠️ Tech Stack

**Frontend**
- Angular 19
- Tailwind CSS
- PrimeNG

**Backend (em evolução)**
- JSON Server (atual)
- NestJS + PostgreSQL + Prisma (planejado)

**Automação**
- n8n

---

## 📦 Estrutura do Projeto

```text
/stockwise
  ├── /frontend
  ├── /backend
  └── README.md
````

---

## 💻 Como rodar o projeto

### Pré-requisitos

* Node.js
* Angular CLI

### Backend (mock)

```bash
cd back
npx json-server --watch db.json --port 3000
```

### Frontend

```bash
cd front
npm install
ng serve
```

Acesse: [http://localhost:4200](http://localhost:4200)

---

## 🗺️ Roadmap

### ✅ Concluído

* Estrutura base do projeto
* Configuração do Angular 19
* Guards e Interceptors

### 🚧 Em desenvolvimento

* CRUD de produtos, lojas e fornecedores
* Formulários reativos

### 📌 Próximos passos

* Dashboard com gráficos
* Backend com NestJS
* Integração com automações

---

## 🎯 Objetivo

Este projeto faz parte da minha evolução como desenvolvedor frontend, com foco em criar aplicações reais, organizadas e escaláveis utilizando Angular.

---

## 👨‍💻 Autor

Rafael Honorato
