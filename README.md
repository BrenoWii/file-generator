O script tem dependência com o python3 e uma lib que chama jinja2 vou tentar colocar aqui o passo a passo de instalação dessas duas ferramentas para utilizarem o script se tiverem interessados ^^
Primeiro precisamos certificar que existe o python3 no computador, ele vem no ubuntu, mas para ter certeza, podemos rodar o comando no terminal.
python3 --version
Se por algum motivo não existir, é só instalar com o apt-get
sudo apt-get install python3
Com o python3 instalado e operante, vamos utilizar o gerenciador de dependências do python "pip" para instalar a lib jinja2 que mencionei anteriormente.
sudo pip3 install Jinja2
Com essas duas ferramentas instaladas o script deve funcionar normalmente.
Existem 3 arquivos no zip, dois são os templates que usamos para gerar o arquivo de teste e o outro é o script com a extensão py.
Para gerar o arquivo de teste, existe alguns passos a serem cumpridos.
Nome do arquivo e o nome do componente, que precisa ser adicionado a essas variáveis.
Escolher um template e colocar o nome como na imagem.
No terminal do VS code rodar o comando python3 file-generator.py
O arquivo deve ser criado com o nome das variáveis que você disponibilizou acima :)
