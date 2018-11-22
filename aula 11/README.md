# Experiencia DevOps

## Ferramentas
 - [Travis CI](travis-ci.org)
 - [Pypi](pypi.org)
 - [CodeClimate](https://codeclimate.com/)
 - [TestPypi](test.pypi.org)

## Repositório Principal

https://github.com/Lucs1590/TestDebug

## Ambiente de teste
Para o ambiente de teste foi feito o uso da biblioteca Python conhecida como unittest e como aplicação foi feito um debuger que através de um decorator fazia um wrapper em uma funlção de soma.

Depois, para colocar isso em ambiente de teste foi necessário colocar toda a aplicação em um repositório publico do GitHub, e por fim, foi feito um vinculo da aplicação com o TravisCI para que os builds fossem feitos automáticamente e para que badges de certificação fossem geradas.

Concluindo, fez-se uso do CodeClimate para que certos badges fossem gerados e entre eles podemos ver o de qualificação do código em relação às boas praticas e test coverage que está relacionado à porcentagem de código que foi testado em relação ao total do repositório.

## Biblioteca
Outra novidade que tivemos foi a experiencia de lançar uma biblioteca feita por nós no famoso ```pip``` o que auxilia nosso compartilhamento de código e a sua facilidade de uso. No nosso caso, para que o pip funcione, basta ter um ambiente Python e o pip instalado executar:

    sudo pip install debugdamassa_briton
e utilizar no seu código através de:

    import briton_damassa
no inicio do seu código.
