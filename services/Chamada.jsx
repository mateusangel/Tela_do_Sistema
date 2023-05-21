import axios from "axios";

export class Chamada {
  constructor() {
    this.axios = axios.create({
      baseURL: "http://localhost:3000/",
    });
    this.controller = new AbortController();
  }

  async Cadastro(dados) {
    const data = await this.axios.post("/Cadastro", dados, {
      headers: { "content-type": "application/json" },
      signal: this.controller.signal,
    });

    return data;
  }
}
