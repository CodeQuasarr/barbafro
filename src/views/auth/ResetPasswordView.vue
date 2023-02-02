<template>
    <div class="reset-password-page bg-light d-flex align-items-center justify-content-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 mx-auto offset-lg-1">
                    <div class="card text-center">
                        <div class="card-body">
                            <h1 class="py-4">Nouveau mot de passe</h1>
                            <p class="card-text">
                                Veillez saisir votre nouveau mot de passe.
                            </p>

                            <Form @submit="forgotPassword()">

                                <div class="row">
                                    <div class="col-12 mb-3">
                                        <Field
                                            name="password"
                                            class="form-control"
                                            type="password"
                                            v-model="password"
                                            :rules="formValidationService.validatePassword"
                                            placeholder="Votre mot de passe"
                                        />
                                        <p class="text-danger">
                                            <ErrorMessage name="password"/>
                                        </p>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-12 mb-3">
                                        <Field
                                            name="password_confirmation"
                                            class="form-control"
                                            type="password"
                                            v-model="password_confirmation"
                                            :rules="formValidationService.validatePassword"
                                            placeholder="Confirmer votre mot de passe"
                                        />
                                        <p class="text-danger">
                                            <ErrorMessage name="password_confirmation"/>
                                        </p>
                                    </div>
                                </div>

                                <div class="col-12 mb-5">
                                    <button class="btn btn-primary px-4 float-end mt-4 ms-4"> Changer le mot de passe </button>
                                </div>
                            </Form>
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
import {User} from "@/types/UserType";
import {FormValidationService} from "@/services/FormValidation.service";
import userService from "@/services/User.service";
export default defineComponent({
    name: "ResetPasswordView",
    components: {
        Form,
        Field,
        ErrorMessage
    },
    data() {
        return {
            password: null,
            password_confirmation: null,
            formValidationService: FormValidationService,
        }
    },
    methods: {
        forgotPassword() {
            const data = {
                password: this.password,
                password_confirmation: this.password_confirmation,
                email: this.$route.query.email,
                token: this.$route.query.token,
            } as unknown as User;
            if (this.password !== this.password_confirmation) {
                this.$toast.error('Les mots de passe ne correspondent pas')
            } else {
                userService.resetPassword(data)
                    .then(() => {
                        this.$toast.success('Mot de passe mis à jour avec succès')
                        this.$router.push({name: 'LOGIN'})
                    })
                    .catch(() => {
                        this.$toast.error('Une erreur est survenue')
                    })
            }
        }
    }
});
</script>

<style scoped>
.reset-password-page {
   height: 100vh;
}
</style>