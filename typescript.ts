// SuperSet, ou seja, uma "linguagem de programacao" que adiciona novas features a uma linguagem ja existente (javascript, no caso)

type User = {
    name: string
    email: string
    address: {
        city: string
        state?: string
    }
}

function showWelcomeMessage(user: User) {
    return `
            Welcome ${user.name}, your email is ${user.email}.
            Your city is ${user.address.city}.
            Your state is ${user.address.state}
           `
}

showWelcomeMessage({
    name: 'Lucas',
    email: 'lucas@lucas',
    address: {
        city: 'Londrina',
        state: 'PR'
    }
})