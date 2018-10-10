# Exemplo de criação de Certificado
Utilização de arquivo do docker para subir uma aplicação(com nginx e apache) que possuia um certificado criado por nós mesmos, além da aplicação possibilitar a criação dos mesmos.

## Pré-requisitos
Para esse exemplo funcionar é necessário possuir **Docker** e **Docker Compose** em seu ambiente, além de ser recomendado a utilização de Linux para executar arquivos ```make```.

## Executando os códigos
Primeiramente abra um prompt de comando na pasta do arquivo, depois execute:
```
make pki/sever.key
```
Isso irá criar uma chave para sua aplicação. Depois execute:
```
make pki/sever.crt
```
E isso criará um certificado para sua aplicação. Por fim, basta apenas você executar:
```
docker-compose up
```
E isso fará com que sua aplicação fique disponivel para acesso nas portas ```1080``` e ```2080``` para acesso **http** e nas portas ```1443``` e ```2443``` para acesso **https**.

**OBS.:** Você pode mudar o conteudo do arquivos Makefile pra alterar o conteúdo do seu certifiado.
