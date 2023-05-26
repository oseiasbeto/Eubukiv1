<template>
  <div class="inscricao">
    <div class="field">
      <label Sfor="">Nome Completo </label>
      <input
        v-model="form.name"
        class="form-control"
        type="text"
        placeholder=""
      />
    </div>
    <div class="field">
      <label Sfor="">Email </label>
      <input
        v-model="form.email"
        class="form-control"
        type="text"
        placeholder=""
      />
    </div>
    <div class="field">
      <label for=""> Data de nascimento</label>
      <input v-model="form.data_nasc" class="form-control" type="date" />
    </div>
    <div class="field">
      <label for="">Número de BI</label>
      <input v-model="form.BI" class="form-control" type="" placeholder="" />
    </div>
    <div class="field">
      <label for="">Naturalidade</label>
      <input
        v-model="form.naturalidade"
        class="form-control"
        type=""
        placeholder=""
      />
    </div>
    <div class="field">
      <label for="">Telefone</label>
      <input
        v-model="form.telefone"
        class="form-control"
        type=""
        placeholder=""
      />
    </div>

    <div class="field">
      <label for="">Áreas de Formação</label>
      <select v-model="form.curso" class="form-control">
        <option value="Administração Local e Autarquias">
          Administração Local e Autarquias
        </option>
        <option value="Contabilidade e Gestãos">Contabilidade e Gestãos</option>
        <option value="Energia e Instalações Elétrica">
          Energia e Instalações Elétrica
        </option>
        <option value="Informática">Informática</option>
        <option value="Manuntenção Industrial">Manuntenção Industrial</option>
        <option value="Obras de Construição civil">
          Obras de Construição civil
        </option>
      </select>
    </div>

    <button @click="register()">Inscrever-se</button>
  </div>
</template>

<script>
import { api } from "@/api";

export default {
  name: "Inscricao",
  data() {
    return {
      form: {
        nome: "",
        data_nasc: "",
        BI: "",
        naturalidade: "",
        telefone: "",
        curso: "",
      },
    };
  },
  methods: {
    async register() {
      const res = await api.post("users/register", {
        nome: this.form.name,
        curso: this.form.curso,
        naturalidade: this.form.naturalidade,
        BI: this.form.BI,
        email: this.form.email,
        tell: this.form.tell,
      });


      if(res.status == 200) {
          alert("Inscrido com sucesso!")
      } else alert("Erro ao inscrever")
      console.log(res);
    },
  },
};
</script>
<style scoped>
.inscricao {
  background-color: #fff;
  margin-top: 20px;
  border-radius: 6px;
  padding: 16px;
  width: 350px;
}
.field {
  margin-bottom: 18px;
}
label {
  font-size: 13px;
  font-weight: 600;
  opacity: 0.6;
}
.form-control {
  width: calc(100% - 24px);
  flex: 1;
  background-clip: padding-box;
  background-color: transparent;
  box-shadow: rgb(60 66 87 / 16%) 0px 0px 0px 1px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px;
  border-radius: 4px;
  transition: background-color 240ms ease 0s, box-shadow 240ms ease 0s;
  color: rgb(57, 61, 74);
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
  padding: 9px 12px;
  border: none;
  border-radius: 4px;
  margin-top: -1px;
}
.form-control::-moz-placeholder {
  color: #4c4e54 !important;
  opacity: 1;
}
.form-control::placeholder {
  color: #787b83 !important;
  opacity: 1;
}
.form-control:focus {
  color: #000;
  background-color: #fff;
  border-color: rgba(0, 0, 0, 0.808);
}
button {
  padding: 10px 12px;
  width: 100%;
  color: #fff;
  background-color: #026ea5;
  font-weight: 500;
  font-weight: bolder;
  border-radius: 6px;
}
</style>