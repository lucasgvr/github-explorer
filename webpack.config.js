const path = require('path') //Imporando o path para usar o dirname e não dar conflito entre sistemas operacionais (barras invertidas ou não) 
const HtmlWebpackPlugin = require('html-webpack-plugin') //Importar esse plugin para a criação do index.htlm na pasta dist
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin') //Importando o Fast Refresh

const isDevelopment = process.env.NODE_ENV !== 'production' //Produção ou desenvolvimento

module.exports = {
    mode: isDevelopment ? 'development' : 'production', //Modo que o WebPack vai rodar (desenvolvimento ou produção)
    devtool: isDevelopment ? 'eval-source-map' : 'source-map', //Mostrar o código fonte real no Dev Tools do navegador
    entry: path.resolve(__dirname, 'src', 'index.jsx'), //O arquivo principal da aplicação
    output: {
        path: path.resolve(__dirname, 'dist'), //O local do arquivo que o WebPack vai gerar
        filename: 'bundle.js' //O arquivo que o WebPack vai gerar
    },
    resolve: {
        extensions: [ //Extensões que o WebPack vai interpretar
            '.js',
            '.jsx'
        ]
    },
    devServer: {
        static: path.resolve(__dirname, 'public'), //Criar o servidor e ficar monitorando mudanças na public
        hot: true
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html') //Cria um index.html na pasta dist já com a referência do arquivo bundle.js
        })
    ].filter(Boolean), //Quando em produção ficaria escrito "false" como se fosse um plugin
    module: {
        rules: [
            {
                test: /\.jsx$/, //Expressão regular (devolvendo true or false). Nesse caso estamos verificando se o arquivo termina em .jsx
                exclude: /node_modules/, //Excluir node_modules da conversão do arquivo pois esse é o trabalho das próprias bibliotecas
                use: {
                    loader: 'babel-loader', //Usar o babel-loader para interpretar arquivos .jsx
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                } 
            },
            {
                test: /\.scss$/, //Expressão regular (devolvendo true or false). Nesse caso estamos verificando se o arquivo termina em .scss
                exclude: /node_modules/, //Excluir node_modules da conversão do arquivo pois esse é o trabalho das próprias bibliotecas
                use: [
                    'style-loader', //Usar o style-loader para interpretar arquivos .css
                    'css-loader', //Usar o css-loader para interpretar arquivos .css
                    'sass-loader' //Usar o sass-loader para interpretar arquivos .scss
                ]
            }
        ]
    }
}