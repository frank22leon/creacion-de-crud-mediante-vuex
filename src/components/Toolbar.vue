<template>
  <div class="mb-5">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Dental Salud</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav >
        <b-navbar-nav class="ml-auto">
          <b-nav-item b-link :to="'/inicio'">Inicio</b-nav-item>
          <b-nav-item b-link :to="'/registro-pacientes'">Registro Pacientes</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
};
</script>

<style></style>
