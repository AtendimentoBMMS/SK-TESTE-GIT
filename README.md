# Documentação ERP - SK-TESTE-GIT

Repositório de **modelos de documentação** para ERP: integrações, clientes, telas, rotinas de banco, procedures, functions, triggers, views, relatórios, dashboards e atividades.  
A ideia é usar este repo como base/template para outros repositórios ou projetos internos.

---

## Estrutura principal

- `Interno - Base Para Uso/`  
  Modelos e exemplos **genéricos**, não ligados a um cliente específico.  
  Usado como referência para reproduzir integrações, telas, rotinas, objetos de banco, etc.

- `Clientes/`  
  Exemplos de estrutura para **customizações por cliente** (dashboard, telas, integrações, procedures, functions, triggers, views, SQL, relatórios, outros).

- `Templates/`  
  Modelos prontos de pastas e arquivos `.md` para serem copiados e usados em outros repositórios ou novos clientes.

---

## Interno - Base Para Uso/

`Interno - Base Para Uso/Integracoes/`  
- Exemplos de integrações genéricas do ERP (sem vínculo com cliente).  
- Serve como “catálogo de padrões” de documentação.

Dentro de cada integração em `Interno - Base Para Uso/Integracoes/NOME/` recomenda-se ter:

- `Arquivos/` – layouts, exemplos de arquivos, payloads, especificações técnicas.  
- `Anexos/` – diagramas, prints de tela, documentos extras.  
- `CHANGELOG.md` – histórico de alterações daquela integração.  

Outras pastas internas podem seguir o mesmo padrão (por exemplo, telas ou rotinas genéricas), reaproveitando os templates da pasta `Templates/`.

---

## Clientes/

Cada cliente fica em `Clientes/NOME-DO-CLIENTE/`.  
Um exemplo de estrutura é:

- `Clientes/Cliente X/`  
  - `Dashboard/`  
  - `Function/`  
  - `Integrações/`  
  - `Outros/`  
  - `Procedure/`  
  - `Relatorio/`  
  - `SQL/`  
  - `Tela/`  
  - `Trigger/`  
  - `View/`  

A ideia é que cada pasta agrupe os **artefatos daquele tipo** para o cliente:

- `Dashboard/` – dashboards e painéis;  
- `Function/` – functions de banco;  
- `Integrações/` – integrações específicas desse cliente;  
- `Outros/` – itens que não se encaixam em nenhuma categoria padrão;  
- `Procedure/` – stored procedures;  
- `Relatorio/` – relatórios do cliente;  
- `SQL/` – scripts SQL soltos (ajustes pontuais, consultas auxiliares);  
- `Tela/` – telas customizadas para o cliente;  
- `Trigger/` – triggers de banco;  
- `View/` – views criadas para o cliente.

Dentro de cada subpasta, recomenda-se que **cada objeto** (tela, procedure, trigger, relatório etc.) tenha a sua própria pasta, contendo:

- Arquivo(s) fonte ou identificador do objeto (se aplicável);  
- `Documentacao.md` – visão funcional e técnica, usando o template correspondente (tela, integração, rotina, etc.);  
- `CHANGELOG.md` – histórico de criação/ajustes.

---

## Templates/

A pasta `Templates/` concentra os **modelos de estrutura** para serem copiados quando surgir um novo cliente, integração, rotina, tela ou atividade.

### Templates de cliente

`Templates/Cliente/` (sugestão)  
- `Dashboard/`  
- `Function/`  
- `Integrações/`  
- `Outros/`  
- `Procedure/`  
- `Relatorio/`  
- `SQL/`  
- `Tela/`  
- `Trigger/`  
- `View/`  

**Como usar:**

1. Copiar `Templates/Cliente/` para `Clientes/NOME-DO-CLIENTE/`.  
2. Renomear pastas genéricas (ex.: `NOME`, `EXEMPLO`) para nomes reais.  
3. Criar, dentro de cada pasta, subpastas para cada objeto (tela, procedure, view, etc.) e preencher os arquivos `.md` seguindo os modelos.

### Templates de documentação (exemplos recomendados)

Sugestão de arquivos dentro de `Templates/` (podem variar conforme você for adicionando):

- `TEMPLATE_INTEGRACAO_EXTERNA.md` – especificação de integrações (API/arquivo).  
- `TEMPLATE_ROTINA_BANCO.md` – documentação de rotinas de banco (procedures/triggers/functions/SQL).  
- `TEMPLATE_REPORT.md` – documentação de relatórios.  
- `TEMPLATE_TELA_ERP.md` – especificação de telas dentro do ERP (campos, ações, regras de negócio).  
- `TEMPLATE_ATIVIDADE_*.md` – modelos para atividades do workflow (levantamento, desenvolvimento, homologação, etc.).  

Esses arquivos são usados como base para criar `Documentacao.md` ou docs específicos em cada pasta de cliente ou interno.

---

## Exemplos de nomes

Exemplo de organização em `Clientes/Cliente-ACME/` (apenas ilustração):

- `Clientes/Cliente-ACME/`  
  - `Procedure/`  
    - `Proc-Calcula-Comissao/`  
    - `Proc-Atualiza-Estoque/`  
  - `Relatorio/`  
    - `Rel-Vendas-Mensal/`  
  - `Tela/`  
    - `Tela-Consulta-Estoque/`  
  - `Dashboard/`  
    - `Dash-Vendas-Gerenciais/`  

Cada pasta de objeto (`Proc-…`, `Rel-…`, `Tela-…`, etc.) deve conter seus `.md` seguindo os templates de `Templates/`.

---

## Workflow recomendado

1. Copiar o template adequado da pasta `Templates/` (cliente, integração, rotina, tela, atividade).  
2. Criar/renomear subpastas para cada objeto real (procedure, view, tela, relatório, etc.).  
3. Preencher o conteúdo dos `.md` com a documentação técnica e funcional.  
4. Executar `git add` / `git commit` com mensagem descritiva.  
5. Fazer `git push` e, se estiver usando, abrir Pull Request para revisão da documentação.  
