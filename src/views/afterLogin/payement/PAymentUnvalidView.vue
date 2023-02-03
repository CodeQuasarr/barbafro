<template>
    <div class="canc-page bg-light d-flex align-items-center justify-content-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 mx-auto offset-lg-1">
                    <div class="card text-center">
                        <div class="card-body">
                            <h1 class="py-4">Votre reservation a été pris en compte</h1>
                            <p class="card-text">
                                Vous pouvez consulter votre reservation dans votre espace client.
                                <router-link to="/dashboard"  class="btn btn-primary px-4 float-end mt-4 ms-4"> Espace client </router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PAymentUnvalidView"
}
</script>

<style scoped>

</style>