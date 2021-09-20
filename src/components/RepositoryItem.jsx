export function RepositoryItem(props) { {/*Recebendo as props passadas como argumento da função/componente*/}
    return (
        <li>
            <strong>{props.repository?.name ?? "Default"}</strong> {/*Accesando a propriedade repository que foi passado no elemento pai*/}
            <p>{props.repository?.description}</p>

            <a href={props.repository?.link}>Acessar Repositório</a>
        </li>
    )
}