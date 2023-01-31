<template>
    <div class="container bg-light barbershop-vue">
        <div class="row justify-content-center mb-5 pb-3 mt-5 pt-5">
            <div class="col-md-7 heading-section text-center">
                <h1 class="h2 mb-4 text-dark">Plan et prix</h1>
                <p class="flip">
                    <span class="deg1"></span><span class="deg2"></span
                ><span class="deg3"></span>
                </p>
                <p class="mt-5">
                    Changer le monde, changer le monde vous êtes bien sympathiques mais
                    faudrait déjà vous levez le matin. Je sais pas si vous êtes au
                    courant mais le monde, il vous attend pas, le monde il bouge et il
                    bouge vite! Et vous n'allez pas tarder à rester sur le carreau moi
                    je vous le dit ! Parce que là vous êtes en vacances très bien mais à
                    la rentrée.
                </p>
            </div>
        </div>
        <div class="row justify-content-center">
            <h2 class="text-center h5">LES CHEVEUX</h2>
            <div class="col-md-9 text-start" v-if="$store.getters.hairs">
                <div
                    class="pricing-entry"
                    v-for="hair in $store.getters.hairs"
                    :key="`hair_${hair.id}`"
                >
                    <div class="d-flex text align-items-center">
                        <h3>
                            <span>{{ hair.name }}</span>
                        </h3>
                        <strong>{{ hair.price }}</strong>
                        <button
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#reservationStaticBackdrop"
                            @click="addToHaircutCart(hair)"
                            class="ms-3 btn btn-dark"
                        >
                            Ajouter
                        </button>
                    </div>
                    <div class="d-block">
                        <p>
                            {{ hair.description }}
                        </p>
                    </div>
                </div>
            </div>

            <h2 class="text-center h5">La BARBE</h2>
            <div class="col-md-9 text-start" v-if="$store.getters.beards">
                <div
                    class="pricing-entry"
                    v-for="beard in $store.getters.beards"
                    :key="`beard_${beard.id}`"
                >
                    <div class="d-flex text align-items-center">
                        <h3>
                            <span>{{ beard.name }}</span>
                        </h3>
                        <strong>{{ beard.price }}</strong>
                        <button
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#reservationStaticBackdrop"
                            @click="addToHaircutCart(beard)"
                            class="ms-3 btn btn-dark"
                        >
                            Ajouter
                        </button>
                    </div>
                    <div class="d-block">
                        <p>
                            {{ beard.description }}
                        </p>
                    </div>
                </div>
            </div>

            <h2 class="text-center h5">LES MASSAGES</h2>
            <div class="col-md-9 text-start" v-if="$store.getters.massages">
                <div
                    class="pricing-entry"
                    v-for="massage in $store.getters.massages"
                    :key="`massage_${massage.id}`"
                >
                    <div class="d-flex text align-items-center">
                        <h3>
                            <span>{{ massage.name }}</span>
                        </h3>
                        <strong>{{ massage.price }}</strong>
                        <button
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#reservationStaticBackdrop"
                            @click="addToHaircutCart(massage)"
                            class="ms-3 btn btn-dark"
                        >
                            Ajouter
                        </button>
                    </div>
                    <div class="d-block">
                        <p>
                            {{ massage.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { HairCutCollection } from "@/types/HaircutType";
import HaircutService from "@/services/Haircut.service";
export default defineComponent ({
    name: "BarbershopView",
    methods: {

        haircutLists() {
            // if not this.$store.getters.hairs
            if (
                this.$store.getters.hairs.length === 0
                || this.$store.getters.beards.length === 0
                || this.$store.getters.massages.length === 0
            ) {
                HaircutService.getAll().then((response: HairCutCollection) => {
                    this.$store.dispatch("haircutsCollection", response);
                });
            }

        },

        addToHaircutCart(item: any) {
            this.$store.commit("addToHaircutCart", item);
        },
    },
    mounted() {
        this.haircutLists();
    },
});
</script>

<style scoped>
.pricing-entry .text {
    width: 100%;
    display: block;
    position: relative;
    z-index: 0;
}
.pricing-entry .text h3 {
    width: calc(100% - 80px);
    font-size: 18px;
}
.pricing-entry .price {
    color: #be8b4e !important;
}
</style>