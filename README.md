# Documentação ERP - SK-TESTE-GIT

Este repositório é a base centralizada para o armazenamento e padronização de toda a documentação técnica e funcional do ERP. Ele serve como um template vivo para garantir que integrações, rotinas de banco de dados e customizações sejam documentadas de forma idêntica em todos os projetos, facilitando a manutenção e o onboarding de novos membros.

---

## 📂 Estrutura do Repositório (Mapa de Navegação)

A hierarquia segue a lógica: **Origem > Cliente > Setor > Tipo de Artefato > Objeto**.

Interno - Base Para Uso/  (Modelos genéricos e "produtos")
└── Integracoes/
    └── [NOME-DA-INTEGRACAO]/
        ├── Arquivos/ (Payloads JSON e especificações)
        ├── Anexos/ (Prints e diagramas)
        └── CHANGELOG.md (Histórico da integração)

Clientes/ (Customizações específicas)
└── [NOME-DO-CLIENTE]/ (Ex: ACME_SA)
    └── [NOME-DO-SETOR]/ (Ex: Financeiro, Comercial, WMS)
        ├── Dashboard/ (Painéis e BI)
        ├── Procedure/ (Stored Procedures)
        ├── Function/ (Funções de banco)
        ├── Trigger/ (Gatilhos)
        ├── View/ (Visualizações)
        ├── Tela/ (Telas customizadas no ERP)
        ├── Integrações/ (Fluxos n8n e APIs específicas)
        ├── SQL/ (Scripts de ajuste)
        ├── Relatorio/ (Layouts de impressão)
        └── Outros/ (Artefatos diversos)

Templates/ (Modelos para clonagem rápida)
├── Cliente/ (Estrutura base de pastas)
└── Documentacao/ (Modelos de arquivos .md)

---

## 🏗️ Definição das Camadas Organizacionais

### 1. Interno - Base Para Uso
Reservado para soluções genéricas desenvolvidas internamente que podem ser replicadas em qualquer cliente (catálogo de padrões).
* **Padrão**: Deve conter obrigatoriamente a pasta `Arquivos/` com exemplos reais de payloads de entrada e saída.
* **Documentação**: Deve seguir os modelos presentes na pasta de `Templates/`.

### 2. Clientes e Setores (Organização por Negócio)
Esta é a camada mais importante para a organização lógica das customizações do ERP.
* **Camada de Setor**: Toda documentação deve ser classificada por setor (Ex: **Financeiro**, **RH**, **Comercial**, **Logística**). Isso isola as regras de negócio e evita conflitos entre áreas distintas.
* **Camada de Objeto**: Dentro de cada setor, cada artefato técnico deve possuir sua própria pasta exclusiva contendo o arquivo `Documentacao.md` e o histórico de alterações no `CHANGELOG.md`.

---

## 🚀 Workflow de Documentação (Passo a Passo)

Siga este processo para garantir que a documentação seja aprovada e versionada corretamente:

1.  **Início**: Copie a estrutura de pastas de `Templates/Cliente/` para o diretório `Clientes/[NOME-DO-CLIENTE]/`.
2.  **Organização**: Mova as pastas de tipos de artefatos (Procedure, Dashboard, etc.) para dentro da pasta do **Setor** correspondente.
3.  **Identificação**: Dentro da pasta do tipo, crie uma subpasta com o nome técnico exato do objeto (Ex: `Procedure/STP_FIN_CUSTO_MEDIO/`).
4.  **Preenchimento**: Utilize os modelos de `Templates/Documentacao/` para redigir o `Documentacao.md`.
    * **Funcional**: Explique o valor entregue ao usuário final.
    * **Técnico**: Detalhe parâmetros, tabelas Sankhya envolvidas e lógica de código.
5.  **Histórico**: Registre a versão inicial ou as modificações no arquivo `CHANGELOG.md`.
6.  **Publicação e Revisão**:
    * Execute os comandos `git add .` e `git commit -m "docs(setor): adiciona documentação do objeto X"`.
    * Faça o `git push` para o repositório remoto.
    * Abra um **Pull Request** para revisão técnica pela equipe.

---

## 📝 Convenções de Nomenclatura

* **Pastas de Clientes**: CAIXA_ALTA_COM_UNDERLINE (Ex: `MATRIZ_SANKHYA`).
* **Pastas de Setores**: Nome funcional claro, iniciando com maiúscula (Ex: `Comercial`, `Financeiro`, `WMS`).
* **Pastas de Objetos**: Devem utilizar o nome oficial presente no banco de dados ou no sistema (Ex: `AD_FIN_RENEGOCIACAO`).
