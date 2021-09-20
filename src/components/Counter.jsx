import { useState } from "react" //Importando o useState do React para podermos usar o estado

// Imutabilidade 
// As variáveis são imutáveis, ou seja, não conseguimos adicionar ou remover como no javascript padrão
// Para isso, em React, criamos um objeto ou vetor totalmente novo (... spread operator muito utilizado)

// JAVASCRIPT X REACT
// users = ['Lucas', 'Ana', 'Giovana']
// users.push('Pedro')
// newUsers = [...users, 'Pedro']

export function Counter() {
    const [counter, setCounter] = useState(0) //Declarando um estado

    function increment() {
        setCounter(counter + 1)
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    )
}

// Pilares do React:
// Componente
// Propriedade
// Estado
// Imutabilidade