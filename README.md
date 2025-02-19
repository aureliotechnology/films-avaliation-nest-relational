# Projeto Avaliador de Filmes: Simplicidade e Escalabilidade em Ação

Este projeto tem como objetivo demonstrar como é simples construir uma aplicação escalável utilizando boas práticas de arquitetura. Usando um avaliador de filmes como exemplo, iremos desenvolver um sistema robusto, organizado e de fácil manutenção.

Através deste exemplo, você aprenderá a:
- **Isolar a lógica de negócio** das dependências tecnológicas;
- **Organizar o código** em camadas bem definidas;
- **Facilitar testes e evoluções**, tornando a aplicação mais modular e escalável.

Vamos começar a construir um sistema que, além de avaliar filmes, servirá de base para um mecanismo de busca. Ressaltamos que, neste projeto, estaremos construindo **apenas a API**, que poderá ser integrada futuramente a outras interfaces e serviços.

## Arquitetura Hexagonal

A ideia central é separar o sistema em camadas bem definidas:

- **Domínio**:
  Contém as regras de negócio e as entidades (modelos) do sistema, sem dependências de frameworks externos.

- **Ports (Portas)**:
  São contratos que definem como o domínio se comunica com o mundo exterior.
  - **Input Ports**: Especificam como os comandos entram no sistema (ex.: via HTTP).
  - **Output Ports**: Definem como o sistema se comunica com serviços externos (ex.: repositórios).

- **Adapters (Adaptadores)**:
  São as implementações concretas que conectam o domínio às tecnologias específicas.
  - **Input Adapters**: Recebem dados do mundo externo (por exemplo, controllers HTTP) e os convertem para o formato esperado pelo domínio.
  - **Output Adapters**: Implementam os contratos dos output ports, conectando o domínio a serviços como banco de dados ou APIs externas.

- **Infraestrutura**:
  Armazena as configurações e integrações com frameworks e drivers (ex.: conexão com banco de dados).

## Estrutura de Pastas

A organização do projeto está definida da seguinte forma:

```shell
films-avaliation/
└── src/
    ├── domain/                   # Lógica de negócio
    │   ├── entity/               # Entidades e objetos de valor
    │   │   └── actor.entity.ts
    │   └── ports/                # Contratos de comunicação
    │       ├── in/               # Portas de entrada
    │       │   └── http/         # Porta para requisições HTTP
    │       │       └── actor.controller.port.ts
    │       └── out/              # Portas de saída
    │           └── actor-repository.port.ts
    ├── adapters/                 # Adaptadores que conectam o domínio ao mundo externo
    │   ├── in/                   # Adaptadores de entrada
    │   │   └── http/             # Adaptador HTTP (ex.: controllers)
    │   │       └── actor.controller.adapter.ts
    │   └── out/                  # Adaptadores de saída
    │       └── persistence/      # Implementação do repositório
    │           └── actor.repository.adapter.ts
    └── infrastructure/           # Configurações e integrações externas
        └── config/
            └── database.config.ts  # Configuração do banco de dados
```

### Descrição Rápida

- **domain/entity**:
  Define as entidades do sistema, como `actor.entity.ts`.

- **domain/ports/in/http**:
  Define o contrato que o adaptador HTTP deve seguir (ex.: `actor.controller.port.ts`).

- **domain/ports/out**:
  Define o contrato para os repositórios ou outros serviços externos (ex.: `actor-repository.port.ts`).

- **adapters/in/http**:
  Implementa o adaptador de entrada para HTTP, convertendo requisições em comandos para o domínio (ex.: `actor.controller.adapter.ts`).

- **adapters/out/persistence**:
  Implementa os contratos de saída usando uma tecnologia específica, como um ORM (ex.: `actor.repository.adapter.ts`).

- **infrastructure/config**:
  Contém arquivos de configuração, como a conexão com o banco de dados.

## Check-list de Implementações Futuras

- [ ] **Testes Unitários**:
  - [ ] Domínio (Entidades e Casos de Uso)
  - [ ] Adaptadores (Controllers e Repositórios)
- [ ] **Testes de Integração**:
  - [ ] Comunicação entre as camadas (ex.: Controller + Repositório)
- [ ] Configurar **CI/CD** para automatizar testes e deploy
- [ ] Integrar **Swagger** para documentação da API
- [ ] Adicionar **Monitoramento e Logging**
- [ ] Implementar **Métricas** e **Health Checks**
- [ ] Implementar **Validação e Sanitização** nos DTOs
- [ ] Adicionar **Tratamento de Erros** centralizado (Middleware/Exception Filters)
- [ ] Documentar fluxos e a arquitetura do sistema

---

Este projeto serve como base para o desenvolvimento de uma aplicação bem estruturada, mantendo o domínio isolado das dependências tecnológicas e facilitando a evolução e manutenção do código.

