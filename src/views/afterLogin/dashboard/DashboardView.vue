<template>
    <div>
        <button class="btn btn-sm btn-outline-danger" @click="logout()">Se déconnecter</button>
        <DashboardClientComponent />

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserService from "@/services/User.service";
import DashboardAdminComponent from "@/views/afterLogin/dashboard/DashboardAdminComponent.vue";
import DashboardClientComponent from "@/views/afterLogin/dashboard/DashboardClientComponent.vue";
export default defineComponent({
    name: "DashboardView",
    components: {DashboardClientComponent},
    methods: {
        logout() {
            UserService.logout().then(() => {
                this.$store.dispatch("logout");
                this.$router.push({ name: "LOGIN" });
            }).catch((error) => {
                console.log(error);
            });
        },
    },
});
</script>

<style scoped>

</style>