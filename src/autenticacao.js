export default async function autenticacao(props) {
  const base_url = "https://api.sempre.hubsoft.com.br";
  const data = {
    grant_type: "password",
    client_id: "2",
    client_secret: "U9ae1su9o9lFD2pVzlk5yV0LUhsZMYkVA0iJHAz9",
    username: "joao.ferreira@sempre.net.br",
    password: "06071996Joao)&@))&@)",
    encrypted: false,
  };
  const headers = { "Content-Type": "application/json" };

  const pegaToken = async () => {
    fetch(`${base_url}/oauth/token`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${temToken}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.access_token) {
          const token = `${response.token_type} ${response.access_token}`;
          localStorage.setItem("token", token);
          const cabecalho = Object.assign(headers, { authorization: token });
          console.trace(cabecalho);
          return cabecalho;
        }

        return response.status;
      });
  };

  const testaToken = async (temToken) => {
    fetch(
      `${base_url}/api/v1/integracao/cliente/financeiro?busca=cpf_cnpj&termo_busca=09084945646&data_inicio=2021-01-13`,
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

  const temToken = localStorage.getItem("token"); 
  const resposta = await testaToken(temToken);

    if (!temToken) {
      pegaToken();
    } else {
      testaToken(temToken);
      if(resposta !== 200){
          pegaToken()
      }
      return
    }
    return; 
}
  //const cpf_cnpj = "09084945646";
  //   const obterFaturas = async (cpf_cnpj) => {
  //     await testaToken(temToken).then(
  //       fetch(
  //         `${base_url}/api/v1/integracao/cliente/financeiro?busca=cpf_cnpj&termo_busca=${cpf_cnpj}`,
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-type": "application/json",
  //             Authorization: `${temToken}`,
  //           },
  //         }
  //       )
  //     );
  //     return temToken;
  //   };
