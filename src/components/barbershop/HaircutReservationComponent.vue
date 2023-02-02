<template>
    <!-- Modal -->
    <div class="modal fade" id="reservationStaticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
         tabindex="-1" aria-labelledby="reservationStaticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="reservationStaticBackdropLabel">Modal title</h1>
                    <button @click="initFonctionalities()" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex flex-wrap align-items-stretch justify-content-around">
                        <div class="col-12 col-lg-4 mb-5 text-center">
                            <date_picker v-model="date" inline auto-apply :disabled-dates="disabledDates"/>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="col border d-flex flex-wrap align-items-center">
                                <button
                                    v-for="(reservation_hour, index) in list_reservation_hours"
                                    :key="`date_${reWriteDate(date)}_hour_${index}`"
                                    @click="selectedTime(reservation_hour.start_time)"
                                    :class="{
                                        'hour m-1 btn': true, 'btn-outline-dark': reservation_hour.is_available,
                                        'btn-dark text-white': get_selected_time === reservation_hour.start_time,
                                        'btn-secondary': !reservation_hour.is_available, disabled: !reservation_hour.is_available,
                                        }"
                                >
                                    <strong> {{ reservation_hour.start_time }} </strong>
                                </button>
                            </div>
                            <div v-if="get_selected_time">
                                <button @click="addReservationToCart()" class="btn btn-dark mt-5 mb-3" data-bs-dismiss="modal">
                                    Ajouter au panier
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import HaircutService from "@/services/Haircut.service";
import {AvailableHours, HairCutReservation} from "@/types/HaircutType";

export default defineComponent({
    name: "HaircutReservationComponent",
    data() {
        return {
            date: new Date(),
            list_reservation_hours: [
                {
                    start_time: "10:00",
                    is_available: true,
                },
                {
                    start_time: "10:30",
                    is_available: true,
                },
                {
                    start_time: "11:00",
                    is_available: true,
                },
                {
                    start_time: "11:30",
                    is_available: true,
                },
                {
                    start_time: "12:00",
                    is_available: true,
                },
                {
                    start_time: "12:30",
                    is_available: true,
                },
                {
                    start_time: "13:00",
                    is_available: true,
                },
                {
                    start_time: "13:30",
                    is_available: true,
                },
                {
                    start_time: "14:00",
                    is_available: true,
                },
                {
                    start_time: "14:30",
                    is_available: true,
                },
                {
                    start_time: "15:00",
                    is_available: true,
                },
                {
                    start_time: "15:30",
                    is_available: true,
                },
                {
                    start_time: "16:00",
                    is_available: true,
                },
                {
                    start_time: "16:30",
                    is_available: true,
                },
                {
                    start_time: "17:00",
                    is_available: true,
                },
                {
                    start_time: "17:30",
                    is_available: true,
                },
                {
                    start_time: "18:00",
                    is_available: true,
                },
                {
                    start_time: "18:30",
                    is_available: true,
                },
            ] as AvailableHours[],
            get_selected_time: null as string | null,
            strip_session_id: null as string | null,
        };
    },
    watch: {
        date(oldValue: Date, newValue: Date) {
            if (oldValue !== newValue) {
                this.get_selected_time = "";
                this.strip_session_id = null;
                this.recoverValidHours(this.date);
            }
        },
    },
    methods: {
        /**
         * @description Initialize the functionalities
         * @returns {void}
         */
        initFonctionalities(): void {
            this.date = new Date();
            this.get_selected_time =null;
        },

        /**
         * @description Reformat the date to YYYY-MM-DD
         * @param {Date} date
         * @returns {string} YYYY-MM-DD format date
         */
        reWriteDate(date: Date): string {
            return date.toISOString().split("T")[0];
        },

        /**
         * @description Check
         * If the day is a Saturday or Sunday
         * If the date is less than the day's date
         * If the date is different from the current date
         * @param {Date} date
         * @returns {boolean}
         */
        disabledDates(date: Date): boolean {
            return date.getDay() === 0 || date.getDay() === 6 || date < new Date();
        },

        /**
         * @description Get the available hours for the selected date
         * @param {Date} selectedDate
         * @returns {Promise<void>}
         */
        async recoverValidHours(selectedDate: Date): Promise<void> {
             this.list_reservation_hours = await HaircutService.getAvailableHours(this.reWriteDate(selectedDate), this.list_reservation_hours);
        },

        /**
         * @description Select the time
         * @param {string} time
         * @returns {void}
         */
        selectedTime(time: string): void {
            this.get_selected_time = time;
        },

        /**
         * @description store the reservation to database and add it to the cart
         * @returns {Promise<void>}
         */
        async addReservationToCart(): Promise<void> {
            const reservation: HairCutReservation = {
                start_date: this.reWriteDate(this.date),
                start_time: this.get_selected_time,
                haircut_id: 0,
                user_id: this.$store.getters.user_id,
                status: "pending",
            };
            await HaircutService.addReservationToCart(reservation).then((response) => {
                this.$toast.success("Réservation ajoutée au panier");
                this.$store.dispatch("addHaircutCart", HaircutService.intentionToBookThisProduct);
                this.initFonctionalities();
                console.log(this.$store.getters.cart);
            }).catch((error) => {
                console.log(error);
            });
        }
    },
});
</script>

<style scoped>
.hour {
    width: 100px;
    height: 50px;
}
</style>