O App de Metas é um aplicativo de linha de comando desenvolvido para gerenciar uma lista de metas pessoais. O aplicativo permite que você cadastre novas metas, liste metas, visualize metas realizadas ou abertas, e delete metas. As metas são armazenadas em um arquivo JSON para garantir persistência entre execuções.

Funcionalidades
Cadastrar Meta: Adicione novas metas à sua lista.
Listar Metas: Veja todas as metas e marque as que foram concluídas.
Metas Realizadas: Exiba as metas que foram marcadas como concluídas.
Metas Abertas: Exiba as metas que ainda não foram concluídas.
Deletar Metas: Remova metas da sua lista.


Estrutura de Arquivos - 
index.js: Arquivo principal do aplicativo que gerencia a lógica do programa.
metas.json: Arquivo JSON que armazena as metas em formato persistente.


Execução - 
Para iniciar o aplicativo, precica instalar o node.js e opcionalmente o Git Bash (para registrar as alterações no seu projeto, pra ficar tudo documentado!).
Finalizada a instalação, execute o seguinte comando no terminal Git Bash: node index.js


Uso - 
Cadastrar Meta: Escolha a opção "Cadastrar meta" e insira sua nova meta.
Listar Metas: Escolha "Listar metas" para visualizar todas as metas e marque as realizadas.
Metas Realizadas: Exiba as metas que você marcou como concluídas.
Metas Abertas: Veja as metas que ainda não foram concluídas.
Deletar Metas: Selecione as metas que deseja remover da lista.


Estrutura de Dados - 
Tipos de Dados
Strings: Representam texto.
Numbers: Representam números.
Boolean: Representa valores verdadeiros ou falsos.


Variáveis - 
Globais: mensagem, meta, metas (onde metas é carregado a partir do arquivo .json).
Locais: Variáveis declaradas dentro das funções.


Operadores - 
Atribuição: =
Concatenação: +
Comparação: ==, !=, <=, >=, <, >
Spread Operator: ... para expandir elementos de um array.


Estrutura de Dados - 
Array de Objetos: Utilizado para armazenar as metas, cada uma com as propriedades value e checked.


Arrow Functions - 
Funções de seta: Utilizadas como callbacks, com e sem parâmetros.


Sobre - 
Este projeto foi desenvolvido como parte do evento NLW Pocket: Javascript, organizado pela Rocketseat. Agradeço a Rocketseat, pela oportunidade de aprender e aprimorar meus conhecimentos em JavaScript.


MIT License - 
Copyright (c) 2024 Michele Lima
- Baseado em material da Rocketseat para fins somente educacional, e não comercial.
