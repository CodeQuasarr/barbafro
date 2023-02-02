<template>
    <div>
        Bienvenu
        <button @click="logout()">Se déconnecter</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserService from "@/services/User.service";
export default defineComponent({
    name: "DashboardView",
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