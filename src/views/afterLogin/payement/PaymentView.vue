<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6">
                <div v-for="(item, index) in $store.getters.hairCutCart" :key="`haircut_cart_item_${index}`"
                     class="card mb-3 col-12">
                    <div class="row g-0">
                        <div style="height: 95px; width: 80px" class="col-md-4 border">
                            <img
                                src="https://images.unsplash.com/photo-1621607512022-6aecc4fed814?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                class="img-fluid rounded-start w-100 h-100" alt="...">
                        </div>
                        <div class="col">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <div class="text-start">
                                        <p class="card-text">{{ item.name }}</p>
                                    </div>
                                    <p class="card-text"><strong>{{ item.price }} €</strong></p>
                                </div>
                                <div v-for="(reservation, reservation_index) in item.reservations"
                                     :key="`reservation_item_${reservation.id}_${item.id}`"
                                     class="d-flex align-items-center justify-content-end mb-1">
                                    <div class="me-3">{{ reservation.start_date }} à {{ reservation.start_time }}</div>
                                    <button
                                        @click="removeReservationInItemFromCart(index, reservation_index, reservation.id)"
                                        class="btn btn-sm btn-danger">
                                        <font-icon icon="eraser"/>
                                    </button>
                                </div>
                            </div>
                            <div class="text-end mb-2 me-2">
                                <button @click="removeItemFromCart(item.id, index)" class="btn btn-sm btn-dark">
                                    Supprimer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card col-12 col-lg-4 border-bottom-0 border-5 border-start-0 border-end-0">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h5 class="card-title"><strong>Hors taxe</strong></h5>
                        <h3><strong>{{ $store.getters.prices.without_taxes }}</strong></h3>
                    </div>

                    <div class="d-flex justify-content-between">
                        <p class="card-text"><strong>TVA</strong></p>
                        <h3><strong>{{ $store.getters.prices.taxes }} €</strong></h3>
                    </div>

                    <div class="d-flex justify-content-between bg-dark text-white my-3 p-4">
                        <h3>TOTAL</h3>
                        <h3><strong>{{ $store.getters.prices.with_taxes }} €</strong></h3>
                    </div>
                    <div class="row text-start mt-5 mb-2">
                        <h3>TERMES ET CONDITIONS</h3>
                        <p>En cliquant sur "J'accepte", vous acceptez
                            <router-link to="/cgv">les conditions générales</router-link>
                            de Stripe.
                        </p>
                        <p><strong>Les produits sont renouvelés automatiquement</strong> jusqu'à ce qu'ils soient
                            annulés, et sont
                            facturés sur votre méthode de paiement enregistrée. Désactivez le renouvellement automatique
                            dans votre compte GoDaddy
                        </p>
                    </div>
                    <div class="row">
                        <button @click="getStripeSessionID($store.getters.prices.with_taxes)" v-if="!accept_conditions"
                                class="btn btn-success mb-3 py-3">J'ACCEPTE
                        </button>
                    </div>
                    <div class="row">
                        <stripe-checkout
                            v-if="session_id"
                            ref="checkoutRef"
                            :pk="publishableKey"
                            :sessionId="session_id"
                        />
                        <button @click="submit" class="btn btn-success py-3" :disabled="!accept_conditions">PAYER
                            MAINTENANT
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import HaircutService from "@/services/Haircut.service";
import {StripeCheckout} from '@vue-stripe/vue-stripe';

export default defineComponent({
    name: "PaymentView",
    components: {
        StripeCheckout
    },
    data() {
        return {
            publishableKey: "pk_test_51MUYZQChGKmAiSAhkkbw2US2UjTQqJ3ASUTfeP80pYcCtW25RCEKvDFl2e8jr8GdgHOX9kbCtKEzctpFj3l3HXUU00yBskSgXS",
            accept_conditions: false,
            session_id: ''
        }
    },
    methods: {
        removeItemFromCart(id: number, index: number) {
            HaircutService.removeReservationFromCart(id).then(() => {
                this.$toast.success('Réservation supprimée')
                this.$store.commit('removeItemFromCart', index)
            }).catch((error) => {
                this.$toast.error(error.response.data.message)
            });
        },
        removeReservationInItemFromCart(index: number, reservation_index: number, id: number) {
            HaircutService.deleteReservationsFromCart(id).then(() => {
                this.$toast.success('Réservation supprimée')
                this.$store.commit('deleteReservations', {index, reservation_index})
            }).catch((error) => {
                this.$toast.error(error.response.data.message)
            });
        },

        submit() {
            // You will be redirected to Stripe's secure checkout page
            (this.$refs["checkoutRef"] as any).redirectToCheckout();
        },

        getStripeSessionID(prices: number) {
            this.accept_conditions = true
            HaircutService.getSessionId(prices).then((response) => {
                console.log(response.id)
                this.session_id = response.id
            }).catch((error) => {
                this.$toast.error(error.response.data.message)
            });
        }
    }
});
</script>

<style scoped>

</style>