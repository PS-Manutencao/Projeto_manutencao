# _Projeto de Software_ Manutenção


## Requisitos


> Requisitos Funcionais, Não Funcionais e Regras de Negócio


- **RF001** - o sistema deve manter _**cliente**_


- _**RN001**_ - Dados-cliente: cod, cpf, nome, endereco


- **RF002** - o sistema deve manter _**orçamento**_


- _**RN002**_ - Dados-orcamento: cod, valor, data-emissao, pecas-usadas, cliente


- **RF003** - o sistema deve manter _**serviço de manutenção**_


- _**RN003**_ - Dados_servico-manutencao: cod, tempo-estimado, orcamento, cliente


- **RF004** - o sistema deve manter _**peça**_


- _**RN004**_ - Dados_pecas: cod, modelo, valor


- **RF005** - o sistema deve gerenciar _**retirada de equipamento**_


- _**RN005**_ - Dados_retirada-equipamento: cod, quantidade, peca, data, cliente


- **RF006** - o sistema deve gerenciar _**entrada de equipamento**_


- _**RN006**_ - Dados_entrada-equipamento: cod, quantidade, peca, data, fornecedor


- **RF007** - o sistema deve manter _**acessorio**_


- _**RN007**_ - Dados_produto: cod, nome, modelo, valor


- **RF008** - o sistema deve manter _**status do serviço**_


- _**RN008**_ - Dados_status-servico: cod, status, cliente, orcamento


- _**RF009**_ - o sistema deve manter _**peças usadas**_


- _**RN009**_ Dados_pecas-usadas: cod, modelo, quantidade, valor


- _**RF010**_ - o sistema deve manter _**relatório**_


- _**RN010**_ - Tipos_relatorios: Clientes, Financeiro, Serviços, Equipamentos


- _**RF011**_ - o sistema deve identificar _**principais clientes**_


- _**RN011**_  Dados_principal-cliente: cod, nome, CPF, email, sexo


- _**RF012**_ - o sistema deve identificar _**principais serviços**_


- _**RN012**_  Dados_principal-servico: cod, relatorio, cliente


- _**RF013**_ - o sistema deve identificar _**margens de faturamento**_


- _**RF015**_ - o sistema deve manter _**tempo estimado de serviço**_


- _**RF014**_ - o sistema deve manter _**entrada de recursos financeiros**_


- _**RN013**_  Dados_saida-recurso: cod, data, pagamento


- _**RF015**_ - o sistema deve manter _**saída de recursos financeiros**_


- _**RN014**_  Dados_entrada-recurso: cod, data, pagamento


- _**RF016**_ - o sistema deve manter _**controle das movimentações financeiras**_


- _**RN015**_  Dados_controle-recurso: saida_recurso, entrada_recurso


- _**RF017**_ - o sistema deve manter _**pagamentos**_


- _**RN016**_  Dados_saida-recurso: cod, data, valor


- _**RF018**_ - o sistema deve manter _**endereco**_


- _**RN017**_  Dados_endereco: CEP, rua, cidade, estado


- _**RF019**_ - o sistma deve manter _**telefone**_


- _**RN018**_  Dados_saida-recurso: numero, cliente


- _**RF020**_ - o sistema deve manter _**fornecedor**_


- _**RN019**_  Dados_fornecedor: cod, endereco_fornecedor, numero_fornecedor, nome


- _**RNF001**_ - o sistema deve ter suas telas projetadas no FIGMA


- _**RNF002**_ - o sistema deve ser uma aplicacao WEB


- _**RNF003**_ - o sistema deve ser responsivo


- _**RNF004**_ - o sistema deve conter botao de acessibilidade


- _**RNF005**_ - o sistema deve ter seu banco projetado no mySQL



