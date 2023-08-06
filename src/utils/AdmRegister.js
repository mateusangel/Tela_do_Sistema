import { useEffect, useState } from "react";
import { api } from "../../services/BaseApi";

export async function AdmRegister(user) {
  const [auth, setauth] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setauth(true);
    }
  }, []);

  const data = await api.post("/Cadastro", user).then((resposta) => {
    return resposta.data;
  });

  await localStorage.setItem("token", JSON.stringify(data.token));

  return { auth, data };
}
