<template>
    <div class="login-page bg-light d-flex align-items-center justify-content-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 mx-auto offset-lg-1">
                    <h3 v-if="has_verified_email" class="mb-3">Se connecter</h3>
                    <div class="bg-white shadow rounded">
                        <div class="row">
                            <div class="col-md-12 pe-0 pt-4">
                                <div v-if="has_verified_email" class="text-start h-100 py-5 px-5">
                                    <Form @submit="handleLogin()" class="row g-4">
                                        <div class="row mb-3">
                                            <div class="col-12">
                                                <label>Email<span class="text-danger">*</span></label>
                                                <span class="text-danger"><ErrorMessage name="email"/></span>
                                                <div class="input-group">
                                                    <div class="input-group-text"><font-icon icon="envelope" /></div>
                                                    <Field v-model="userData.email" name="email" :rules="FormValidationService.validateEmail" type="email"
                                                           class="form-control" placeholder="....@exemple.com"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <label>Mot de passe<span class="text-danger">*</span></label>
                                                <div class="input-group">
                                                    <div class="input-group-text">
                                                        <font-icon icon="lock" />
                                                    </div>
                                                    <Field v-model="userData.password" name="password" type="password"
                                                           class="form-control" placeholder="mot de passe"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 text-center">
                                            <p class="forgot">
                                                mot de passe oublier? cliquer
                                                <router-link :to="{ name: 'FORGOT_PASSWORD' }" ><strong>ici</strong></router-link>
                                            </p>
                                        </div>
                                        <div class="col-12">
                                            <button type="submit" class="btn btn-primary px-4 float-end mt-4">Se connecter
                                            </button>
                                        </div>
                                    </Form>
                                    <hr />
                                    <div class="nomember">
                                        <p class="text-center">
                                            Pas encore membre?
                                            <router-link :to="{ name: 'REGISTER' }"
                                            >Créer votre compte
                                            </router-link>
                                        </p>
                                    </div>
                                </div>
                                <div v-else class="col-12">
                                    <div class="card text-center ">
                                        <div class="card-body">
                                            <h1 class="py-4">Confirmer l'adresse e-mail</h1>
                                            <p class="card-text">
                                                Nous avons envyé un e-mail à l'adresse <span class="text-primary">{{ email }}</span> pour vérifier que vous en êtes le titulaire.
                                                <br> Consultez
                                                votre boîte de réception et suivez les instructions pour finaliser la configuration de votre compte
                                                Barber Cutt
                                            </p>
                                            <a href="#" class="text-decoration-none">Utiliser une autre adresse de messagerie</a>
                                            <div class="py-4">
                                                <button class="btn btn-outline-primary">Renvoyer le message</button>
                                            </div>
                                        </div>
                                    </div>
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
import { defineComponent } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import {FormValidationService} from "@/services/FormValidation.service";
import UserService from "@/services/User.service";
import {UserLogResponse} from "@/types/UserType";
export default defineComponent({
    name: "LoginView",
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        return {
            userData: {
                email: "",
                password: "",
            },
            has_verified_email: true,
            FormValidationService: FormValidationService,
        }
    },
    methods: {
        /**
         * @description Log user
         * @returns void
         */
        handleLogin(): void {
            UserService.login(this.userData).then((response: UserLogResponse) => {
                this.$store.dispatch("login", response);
                this.$router.push({ name: "HOME" });
            }).catch((error) => {
                this.$toast.error(error.response.data.message);
            });
        },
    },
});
</script>

<style scoped>
.login-page {
    height: 100vh;
}
.forgot {
    position: relative;
    right: -20%;
}

.forgot a {
    text-decoration: none;
    font-size: 15px;
    color: #0D6EFD;
    font-weight: bold;
}
</style>