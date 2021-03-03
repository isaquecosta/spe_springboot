# Nome do Projeto: SPE
• Sistema de Profissionais e Estabelecimentos com Spring Boot

## Sistema
• O SPE é um sistema desenvolvido com Java 8, SpringBoot métodos rest e angular 9

## PostgreSQL
• O banco de dados é o PostgreSQL

## Serviços
• Os serviços da solução são APIs REST utilizadas para consumo e geração de dados dentro dos modelos. 

## Speservice
• É o serviço responsável por gerenciar profissionais, estabelecimentos, solicitações de acesso e permissões.


# Ambiente de desenvolvimento

## Compose dos containers
• Vá na pasta docker e execute:
[ docker-compose -f docker-compose-dev.yml up -d ]
Os containers serão montados e estarão prontos.

## Serviços:
• Os serviços são compilados com o maven.
execute:
[ mvn clean install ] 
e em seguida:
[ mvn spring-boot:run ]

## Cliente:
• O cliente REST da aplicação é desenvolvido em angular e utiliza a biblioteca do PrimeNG como principal fonte de componentes.
Vá na pasta do cliente e execute:
[ npm install ]
e em seguida:
[ npm start ]
O sistema estará disponível na URL localhost:4200
