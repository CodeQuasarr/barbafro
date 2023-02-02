<template>
    <div class="forgot-password  bg-light d-flex align-items-center justify-content-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 mx-auto offset-lg-1">
                    <h3 class="mb-3">Mot de passe oublier</h3>
                    <div class="bg-white shadow rounded">
                        <div class="row">
                            <div class="col-md-12 pe-0">
                                <div class="text-start h-100 py-5 px-5">
                                    <p class="card-text">
                                        Veillez saisir votre adresse email de connexion afin de recevoir le lien de réinitialisation de votre mot de passe.
                                    </p>

                                    <Form @submit="forgotPassword()" class="row g-4">
                                        <div class="col-12">
                                            <Field
                                                name="email"
                                                class="form-control"
                                                type="email"
                                                v-model="email"
                                                :rules="FormValidationService.validateEmail"
                                                placeholder="Votre adresse e-mail"
                                            />
                                            <p class="text-danger">
                                                <ErrorMessage name="email"/>
                                            </p>
                                        </div>

                                        <div class="col-12">
                                            <button type="submit" class="btn btn-primary px-4 ">
                                                Recevoir le lien
                                            </button>
                                        </div>
                                        <div class="col-12">
                                            <router-link :to="{ name: 'LOGIN' }" class="">
                                                Retour à la page de connexion
                                            </router-link>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {Form, Field, ErrorMessage} from 'vee-validate';
import {FormValidationService} from "@/services/FormValidation.service";
import UserService from "@/services/User.service";
export default defineComponent ({
    name: "ForgotPasswordView",
    components: {
        Form,
        Field,
        ErrorMessage
    },
    data() {
        return {
            email: '',
            FormValidationService: FormValidationService,
        }
    },
    methods: {
        forgotPassword() {
            UserService.forgotPassword({email: this.email}).then((response) => {
                this.$router.push({name: 'LOGIN'});
            }).catch((error) => {
                console.log(error);
            });
        }
    }
});
</script>

<style scoped>
.forgot-password {
    height: 100vh;
}
</style>