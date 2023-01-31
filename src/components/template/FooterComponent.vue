<template>
  <div class="container-fluid px-0 mx-0 mt-5 pt-5 text-start">
    <div class="row mx-0 mb-5">
      <div class="col-12 col-md-3 mb-3">
        <h3 class="h4">BARBERCLASS</h3>
        <P class="mt-4">
          Si vos cheveux sont parfaitement coiffés et que vous avez les bonnes
          chaussures vous pouvez sortir avec n'importe qui.
        </P>
      </div>

      <div class="col-12 col-md-3 mb-3 text-start">
        <h3 class="h4">SERVICE CLIENT</h3>
        <ul class="nav flex-column mt-4">
          <strong class="mb-2">Horaires</strong>
          À votre disposition du Lundi à Samedi 11h à 19h (heure française)
          <strong class="mt-4 mb-2">Coordonnées</strong>

          Téléphone au +33.1.42.36.54.14
          <router-link
            class="text-decoration-none btn btn-sm btn-outline-dark"
            to="/"
          >
            Contactez-nous
          </router-link>
        </ul>
      </div>

      <div class="col-12 col-md-3 mb-3 text-start">
        <h3 class="h4">INFORMATIONS UTILES</h3>
        <ul class="nav flex-column mt-4">
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <span><font-icon icon="angle-right" /></span> Paiement sécurisé
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <span><font-icon icon="angle-right" /></span> Frais de port
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <span><font-icon icon="angle-right" /></span> Livraison
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <span><font-icon icon="angle-right" /></span> Suivi de colis
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <span><font-icon icon="angle-right" /></span> Mentions légales
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <span><font-icon icon="angle-right" /></span>
              Vos informations personnelles
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <span><font-icon icon="angle-right" /></span>
              Conditions générales de vente
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <hr />
    <div class="text-center py-5">
      Copyright ©2022 All rights reserved | This template is made with by
      <font-icon icon="heart" /> ANYARONKE
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FooterComponent",
});
</script>

<style scoped>
h3 {
  font-weight: 700;
  font-family: "Barlow Condensed", sans-serif;
}

.nav-item a {
  color: #000000 !important;
}

.nav-item a:hover {
  color: #be8b4e !important;
}
</style>
