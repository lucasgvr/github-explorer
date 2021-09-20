export function RepositoryItem(props) { {/*Recebendo as props passadas como argumento da função/componente*/}
    return (
        <li>
            <strong>{props.repository?.name}</strong> {/*Accesando a propriedade repository que foi passado no elemento pai*/}
            <p>{props.repository?.description}</p>

            <a target="_blank" href={props.repository?.html_url}>Acessar Repositório</a>
        </li>
    )
}