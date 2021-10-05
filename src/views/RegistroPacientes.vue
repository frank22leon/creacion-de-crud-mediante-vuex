<template>
  <div>
    <b-card bg-variant="info" text-variant="white" class="w-75 mx-auto">
      <h1 class="text-center">Registro de Pacientes</h1>
      <b-form @submit.prevent="agregarPaciente">
        <b-form-group
          id="input-group-1"
          label="Nombre Paciente:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="nombre"
            type="text"
            placeholder="Nombre"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Apellido Paciente:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="apellido"
            type="text"
            placeholder="apellido"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Previsión Paciente:"
          selected-disable=""
          label-for="input-3"
        >
          <b-form-select
            id="input-3"
            v-model="prevision"
            :options="previsiones"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Edad Paciente:"
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            v-model.number="edad"
            type="number"
            placeholder="Edad"
            required
          ></b-form-input>
        </b-form-group>
        <b-row align-h="center">
          <b-button type="submit" variant="secondary" >Registrar</b-button>
        </b-row>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import Firebase from "firebase";
export default {
  data() {
    return {
      nombre: "",
      apellido: "",
      prevision: null,
      edad: null,

      previsiones: [
        { text: "Selecciona una Previsión", value: null },
        { text: "Fonasa", value: "Fonasa" },
        { text: "Isapre", value: "Isapre" },
      ],
    };
  },

  methods:{
       agregarPaciente() {
      Firebase.firestore()
        .collection("pacientes")
        .add({
          nombre: this.nombre,
          apellido: this.apellido,
          prevision: this.prevision,
          edad: this.edad,
        })
        .then(() => this.$router.push("/home")
        );
    },
  }
};
</script>

<style></style>
