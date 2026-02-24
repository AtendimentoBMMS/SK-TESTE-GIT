# 🚀 Documentação ERP - SK-TESTE-GIT

Este repositório é a base centralizada para o armazenamento e padronização de toda a documentação técnica e funcional do ERP. O objetivo é garantir que integrações, rotinas de banco de dados e customizações sigam o mesmo padrão de qualidade em todos os projetos.

---

## 📂 Organização do Repositório (Hierarquia)

A estrutura de pastas deve respeitar rigorosamente a ordem abaixo para facilitar a navegação:

1. **Interno - Base Para Uso** (Modelos genéricos e "produtos" de prateleira)
    * **Integracoes** (Pasta para cada integração genérica)
        * **Arquivos** (Exemplos de payloads e especificações técnicos)
        * **Anexos** (Prints e diagramas de fluxo)
        * **CHANGELOG.md** (Histórico de versões da integração)

2. **Clientes** (Customizações específicas por projeto)
    * **[NOME-DO-CLIENTE]** (Ex: SANKHYA_MATRIZ)
        * **[NOME-DO-SETOR]** (Ex: Financeiro, Comercial, WMS, Logistica)
            * **Dashboard** (Painéis e indicadores BI)
            * **Procedure** (Stored Procedures - STPs)
            * **Function** (Funções de banco de dados)
            * **Trigger** (Gatilhos de banco)
            * **View** (Visualizações de dados)
            * **Tela** (Telas customizadas no ERP)
            * **Integrações** (Fluxos n8n, APIs e webhooks específicos do setor)
            * **SQL** (Scripts de ajuste e consultas soltas)
            * **Relatorio** (Layouts de impressão)

3. **Templates** (Modelos para clonagem rápida)
    * **Cliente** (Estrutura base de pastas para novos projetos)
    * **Documentacao** (Arquivos .md pré-preenchidos para guiar o texto)

---

## 🏗️ Camadas Organizacionais

| Camada | Descrição |
| :--- | :--- |
| **Interno** | Soluções genéricas que servem como catálogo de padrões para a equipe. |
| **Clientes** | Espaço dedicado a customizações individuais e específicas de cada conta. |
| **Setores** | **Nível Obrigatório:** Organiza os artefatos pela área de negócio afetada. |
| **Objetos** | Subpasta final contendo o arquivo `Documentacao.md` e o histórico de alterações. |

---

## 🚀 Workflow de Documentação (Passo a Passo)

Siga este processo para garantir a padronização e aprovação técnica:

* **1. Preparação**: Copie a estrutura de `Templates/Cliente/` para dentro de `Clientes/[NOME-DO-CLIENTE]/`.
* **2. Classificação**: Organize as pastas de tipos de artefatos dentro da pasta do **Setor** correspondente.
* **3. Identificação**: Crie uma subpasta com o nome técnico exato do objeto (Ex: `Procedure/STP_FIN_RENEGOCIACAO/`).
* **4. Escrita**: Utilize os modelos de `Templates/Documentacao/` para preencher o `Documentacao.md`.
    * **Visão Funcional**: O que o objeto entrega para o usuário final.
    * **Visão Técnica**: Parâmetros, tabelas envolvidas e regras de código.
* **5. Histórico**: Mantenha o `CHANGELOG.md` atualizado com cada ajuste realizado.
* **6. Publicação**: Realize o commit e abra um **Pull Request** para revisão da equipe.

---

## 📝 Convenções de Nomenclatura

* **Clientes**: CAIXA_ALTA_COM_UNDERLINE (Ex: `CLIENTE_SANKHYA_LOG`).
* **Setores**: Nome funcional claro iniciando com maiúscula (Ex: `Financeiro`, `Expedicao`).
* **Objetos Técnicos**: Nome oficial presente no banco de dados ou ERP (Ex: `AD_FIN_CONCILIACAO`).

