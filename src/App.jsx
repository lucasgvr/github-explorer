import { Counter } from './components/Counter'
import { RepositoryList } from './components/RepositoryList' //Importação do componente RepositoryList

import './styles/global.scss' //Importação dos estilos

export function App() {
    return (
        <>
            <RepositoryList />
        </>
    )
}