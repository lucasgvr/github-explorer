import { RepositoryItem } from "./RepositoryItem"

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: "https://github.com/unform/unform"
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                <RepositoryItem repository={repository} /> {/*Passando o objeto criado (repository) como uma propriedade de nome repository*/}
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    )
}