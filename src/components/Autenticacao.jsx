const base_url = "https://api.sempre.hubsoft.com.br";
const data = {
  grant_type: "password",
  client_id: "2",
  client_secret: "...",
  username: "...",
  password: "...",
  encrypted: false,
};
const headers = { "Content-Type": "application/json" };

export function autenticacao(props) {
  
  const pegaToken = async () => {

    fetch(`${base_url}/oauth/token`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `${temToken}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.access_token) {
          const token = `${response.token_type} ${response.access_token}`;
          localStorage.setItem("token", token);
          const cabecalho = Object.assign(headers, { authorization: token });
          //console.trace(cabecalho);

          return cabecalho;
        }
        return response.status;
      });
  };

  const testaToken = async (temToken) => {
    fetch(
      `${base_url}/api/v1/integracao/cliente/financeiro?busca=cpf_cnpj&termo_busca=0923056641&data_inicio=2021-01-13`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `${temToken}`,
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {

        return response.status;
      });
  };

  if (!temToken) {
    pegaToken();
  } else {
    testaToken(temToken);
    const resposta = testaToken(temToken);
    if (resposta !== 200) {
      pegaToken();
    }
  }

  
}

const temToken = localStorage.getItem("token");

export const ObterFaturas = async (cpf) => {
  
  var fatura 
  
  await fetch(
    
    `${base_url}/api/v1/integracao/cliente/financeiro?busca=cpf_cnpj&termo_busca=${cpf}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `${temToken}`,
      },
    }
  )
    .then((response) => response.json())
    .then((response) => {
       fatura = response.faturas

    })
     return fatura
    
  }



