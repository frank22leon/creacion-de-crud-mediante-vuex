<template>
  <div>
    <h1 class="text-center pb-3 text-info">Lista de Pacientes</h1>
    <table class="mx-auto">
      <tr>
        <th class="pr-5">Nombre</th>
        <th class="pr-5">Apellido</th>
        <th class="pr-5">Prevision</th>
        <th class="pr-3">Edad</th>
        <th></th>
        <th></th>
      </tr>
      <tr v-for="paciente in $store.state.pacientes" :key="paciente.id">
        <td>{{ paciente.nombre }}</td>
        <td>{{ paciente.apellido }}</td>
        <td>{{ paciente.prevision }}</td>
        <td>{{ paciente.edad }}</td>
        <td>
          <!--Modal para Modificar Paciente-->
          <b-button
            id="show-btn"
            @click="$bvModal.show('bv-modal-example')"
            variant="success"
            >Editar</b-button
          >
          <b-modal id="bv-modal-example" hide-footer>
            <template #modal-title>
              Modifica el Paciente
            </template>
            <div class="d-block text-center">
              <b-card
                bg-variant="info"
                text-variant="white"
                class="w-75 mx-auto"
              >
                <h1 class="text-center">Registro de Pacientes</h1>
                <b-form>
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
                   <b-button
            @click="actualizarPaciente(paciente.id)"
            variant="success"
            class="mr-1"
            >Editar</b-button
                    >
                  </b-row>
                </b-form>
              </b-card>
            </div>
            <b-button
              class="mt-3"
              block
              @click="$bvModal.hide('bv-modal-example')"
              >Cerrar</b-button
            >
          </b-modal>
        </td>
        <td>
          <b-button @click="eliminarPaciente(paciente.id)" variant="danger"
            >Eliminar</b-button
          >
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Firebase from "firebase";

export default {
  name: "Home",
  data: () => ({
    nombre: "",
    apellido: "",
    prevision: null,
    edad: null,

    previsiones: [
      { text: "Selecciona una Previsión", value: null },
      { text: "Fonasa", value: "Fonasa" },
      { text: "Isapre", value: "Isapre" },
    ],
  }),
  mounted() {
    this.$store.dispatch("traerPacientes");
  },

  methods: {
    actualizarPaciente(id) {
      Firebase.firestore()
        .collection("pacientes")
        .doc(id)
        .set({
          nombre: this.nombre,
          apellido: this.apellido,
          prevision: this.prevision,
          edad: this.edad,
        })
        .then(() => this.$store.dispatch("traerPacientes"))
    },
    eliminarPaciente(id) {
      Firebase.firestore()
        .collection("pacientes")
        .doc(id)
        .delete()
        .then(() => this.$store.dispatch("traerPacientes"));
    },
  },
};
</script>
