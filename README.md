# Documentação ERP - SK-GITHUB-TST

Repositório centralizado para documentação técnica e funcional do ERP.

---

## Estrutura Principal

Interno/
- Integrações gerais (não ligadas a cliente ou que são produtos a parte)

Clientes/
- Customizações específicas por cliente

Templates/
- Modelos para replicar estrutura

---

## Detalhes Interno/Integracoes/

Pasta: Interno/Integracoes/NOME/
Contém:
- Arquivos/ (layouts, exemplos)
- Anexos/ (diagramas, extras)
- CHANGELOG.md (histórico)

---

## Detalhes Clientes/Cliente-X/

Cliente-X/
- Banco/ 
  - Rotinas/
  - Triggers/
  - Procedures/
- Reports/
- Dashboards/
- Integracoes/

**Dentro de Banco/Rotinas/NOME/:**
- Rotina.md (lógica técnica)
- Documentacao.md (contexto funcional) 
- CHANGELOG.md (histórico)

**Dentro de Reports/NOME/:**
- Report.ext (arquivo)
- Documentacao.md
- CHANGELOG.md

---

## Templates/

Templates/Cliente/
- Banco/
  - Rotinas/
  - Triggers/
  - Procedures/
- Reports/
- Dashboards/
- Integracoes/

**Como usar:**
1. Copie Templates/Cliente/ para Por-Clientes/Novo-Cliente/
2. Renomeie pastas "EXEMPLO" para nomes reais
3. Preencha arquivos .md

---

## Exemplos de Nomes

Por-Clientes/
- Cliente-ACME/
  - Banco/
    - Rotinas/
      - Calculo-Comissao/
      - Estoque-Diario/
  - Reports/
    - Vendas-Mensal/

---

## Workflow

1. Copiar template
2. Renomear pastas 
3. Preencher .md
4. git add/commit/push
5. Pull Request
