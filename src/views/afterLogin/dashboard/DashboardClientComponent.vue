<template>
    <div>
        <div class="col-12">
            <div class="row align-items-center justify-content-between">
                <div class="col text-start">
                    <h1 class="">Mes reservation</h1>
                </div>
            </div>
        </div>
        <div class="table-responsive">
            <table class="table table-striped table-light align-middle">
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Date et heure</th>
                    <th>Prix</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="haircut in hairCutCarts" :key="`user_haircut_${haircut.id}`">
                    <td> {{ haircut.name }}</td>
                    <td >
                        <p v-for="reservation in haircut.reservations" :key="`user_reservation_${reservation.id}`">
                            Le {{ reservation.start_date }} à {{ reservation.start_time }} h
                        </p>
                    </td>
                    <td>
                        {{ haircut.price * haircut.reservations.length }} €
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import UserService from "@/services/User.service";
import {defineComponent} from "vue";

export default defineComponent({
    name: "DashboardClientComponent",
    data() {
        return {
            hairCutCarts: [],
        }
    },
    methods: {
        async getHaircuts() {
            UserService.getAll().then(response => {
                console.log(response)
                this.hairCutCarts = response;
            });
        },
    },
    mounted() {
        this.getHaircuts();
    }
});
</script>

<style scoped>

</style>