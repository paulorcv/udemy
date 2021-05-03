# Imagem base
FROM node:alpine
WORKDIR /usr/app

# Copiar os arquivos do projeto
COPY ./package.json ./
# Instalar as dependências
RUN npm install

COPY ./ ./

# Comando padrão do container ao ser iniciado
CMD ["npm", "start"]