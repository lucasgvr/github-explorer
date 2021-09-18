module.exports = {
    presets: [
        '@babel/preset-env', //Biblioteca do babel que indentifica o ambiente de desenvolvimento e converte o código da maneira mais eficiente (para o navegador precisam de coisas que o node não precisa, por exemplo)
        ['@babel/preset-react', { //Usado para o babel conseguir interpretar os códigos em React (Html dentro de funções)
            runtime: 'automatic' //Usado para não precisar usar o "Import React"
        }]
    ]
}