const base_url = 'https://api.sempre.hubsoft.com.br'
const data = {
    "grant_type": "password",
    "client_id": "2",
    "client_secret": "U9ae1su9o9lFD2pVzlk5yV0LUhsZMYkVA0iJHAz9",
    "username": "joao.ferreira@sempre.net.br",
    "password": "06071996Joao)&@))&@)",
    "encrypted": false
}
//const headers = { 'Content-Type': 'application/json' }

const testaToken = async (temToken) => {
    fetch(
        `${base_url}/oauth/token`,
        {   
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${temToken}`,
            },
            body: JSON.stringify(data)
        }     

    ).then((response) => {
        
        console.log(response.status) 

        return response;
    })
}

const pegaToken = async () => {


    fetch(`${base_url}/oauth/token`, {
        method: 'POST',
        headers: {

            'Content-type': 'application/json',
            'Authorization': `Bearer ${temToken}`
        },
        body: JSON.stringify(data)
    }
    ).then((response) => {

        if (response.access_token) {
            const token = `${response.token_type} ${response.access_token}`
            localStorage.setItem('token', token)
            const cabecalho = Object.assign(headers, { 'authorization': token })
            console.trace(cabecalho)
            console.log(cabecalho)
        }
         console.log(response)
     

        return token
    })
}
const temToken = localStorage.getItem('token')

const resposta = await testaToken(temToken);

//console.log(testaToken(temToken))
// if( temToken ) {

// if( testaToken(temToken) === 200){
//     console.log('pegou token')
// // Se resposta.status for 200
// return;
// }
// }else {
//     // Se status for de token invalido
//     if(resposta.status !== 200){  

//       pegaToken()
        
        
//     }
//     // salvar o token no localstorage
//     // fazer o que precisar com o token
//     return;
// }

// const token = pegaToken();
// // salvar o token no localstorage
// // fazer o que precisar com o token