<template>
    <div class="register-page bg-light d-flex align-items-center justify-content-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 mx-auto offset-lg-1">
                    <h3 v-if="!user_is_create" class="mb-3">Créer un compte</h3>
                    <div class="bg-white shadow rounded">
                        <div class="row">
                            <div class="col-md-12 pe-0">
                                <div v-if="!user_is_create" class="text-start h-100 py-5 px-5">
                                    <Form @submit="handleRegister()" class="row g-4">
                                        <div class="row mb-3">
                                            <div class="col-12 col-lg-6">
                                                <label>Nom<span class="text-danger">*</span></label>
                                                <span class="text-danger"><ErrorMessage name="first_name"/></span>
                                                <div class="input-group">
                                                    <div class="input-group-text">
                                                        <font-icon icon="user" />
                                                    </div>
                                                    <Field v-model="userData.first_name" name="first_name" :rules="validateName" type="text"
                                                           class="form-control" placeholder="Nom"/>
                                                </div>
                                            </div>
                                            <div class="col-12 col-lg-6">
                                                <label>Prénom<span class="text-danger">*</span></label>
                                                <span class="text-danger"><ErrorMessage name="last_name"/></span>
                                                <div class="input-group">
                                                    <div class="input-group-text">
                                                        <font-icon icon="user" />
                                                    </div>
                                                    <Field v-model="userData.last_name" name="last_name" :rules="validateName" type="text"
                                                           class="form-control" placeholder="Prénom"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-12">
                                                <label>Email<span class="text-danger">*</span></label>
                                                <span class="text-danger"><ErrorMessage name="email"/></span>
                                                <div class="input-group">
                                                    <div class="input-group-text">
                                                        <font-icon icon="envelope" />
                                                    </div>
                                                    <Field v-model="userData.email" name="email" :rules="validateEmail" type="email"
                                                           class="form-control" placeholder="....@exemple.com"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-12">
                                                <label>Mot de passe<span class="text-danger">*</span></label>
                                                <span class="text-danger"><ErrorMessage name="password"/></span>
                                                <div class="input-group">
                                                    <div class="input-group-text">
                                                        <font-icon icon="lock" />
                                                    </div>
                                                    <Field v-model="userData.password" name="password" :rules="validatePassword" type="password"
                                                           class="form-control" placeholder="mot de passe"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-12">
                                                <label>Confirmer le mot de passe<span class="text-danger">*</span></label>
                                                <span class="text-danger"><ErrorMessage name="password_confirmation"/></span>
                                                <div class="input-group">
                                                    <div class="input-group-text">
                                                        <font-icon icon="lock" />
                                                    </div>
                                                    <Field v-model="userData.password_confirmation" name="password_confirmation" :rules="validateConfirmationPassword" type="password"
                                                           class="form-control" placeholder="mot de passe"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-check">
                                                <p style="font-size: 11px">
                                                    En cliquant sur "S'inscrire", vous acceptez nos
                                                    <router-link to=""><strong>Conditions d'utilisation</strong></router-link>
                                                    et
                                                    <router-link to=""><strong>Politique de confidentialité</strong></router-link>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button type="submit" class="btn btn-primary px-4 float-end mt-4">S'inscrire
                                            </button>
                                        </div>
                                    </Form>
                                    <hr />
                                    <div class="nomember">
                                        <p class="text-center">
                                            Vous êtes déja membre?
                                            <router-link :to="{ name: 'LOGIN' }"
                                            >Connectez-vous
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
                                            <div class="py-4">
                                                <button @click="resendConfirmationEmail()" class="btn btn-outline-primary">Renvoyer le message</button>
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
import {defineComponent} from 'vue';
import {Form, Field, ErrorMessage} from 'vee-validate';
import {User} from "@/types/UserType";
import UserService from "@/services/User.service";

export default defineComponent({
    name: "RegistrationView",
    components: {
       Form,
        Field,
        ErrorMessage,
    },
    data() {
        return {
            userData: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password_confirmation: '',
            } as User,
            user_is_create: false,
        }
    },
    methods: {

        /**
         * @description Handle the registration of the user
         * @returns {Promise<void>}
         */
        async handleRegister(): Promise<void> {
            UserService.registration(this.userData).then(() => {
                this.user_is_create = true;
            }).catch((error) => {
                this.$toast.error(error.response.data.message);
            });
        },

        /**
         * @description Validate the email field
         * @param value
         * @returns {boolean|string}
         */
        validateEmail(value: string) {
            // if the field is empty
            if (!value) {
                return "L'email est obligatoire";
            }
            // if the field is not a valid email
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (!regex.test(value)) {
                return 'Ce champ doit être une adresse électronique valide';
            }
            return true;
        },

        /**
         * @description Validate the first name field
         * @param value
         * @returns {boolean|string}
         */
        validateName(value: string) {
            // if the field is empty
            if (!value) {
                return "Ce champ est obligatoire";
            }
            if (value.length < 3) {
                return 'Ce champ doit contenir au moins 3 caractères';
            }
            return true;
        },

        /**
         * @description Validate the password field
         * @param value
         * @returns {boolean|string}
         */
        validatePassword(value: string) {
            // if the field is empty
            if (!value) {
                return "Ce champ est obligatoire";
            }
            if (value.length < 8) {
                return 'Ce champ doit contenir au moins 8 caractères';
            }
            this.userData.password = value;
            return true;
        },

        /**
         * @description Validate the password confirmation field
         * @param value
         * @returns {boolean|string}
         */
        validateConfirmationPassword(value: string) {
            // if the field is empty
            if (!value) {
                return "Ce champ est obligatoire";
            }
            if (value !== this.userData.password) {

                return 'Les mots de passe ne correspondent pas';
            }
            return true;
        },

        /**
         * @description Resend the confirmation email
         */
        resendConfirmationEmail() {
            UserService.resendConfirmationEmail({email: this.userData.email}).then(() => {
                this.$toast.success('Un nouveau lien de confirmation a été envoyé à votre adresse e-mail');
            }).catch((error) => {
                this.$toast.error(error.response.data.message);
            });
        }
    }
});
</script>

<style scoped>
a {
    text-decoration: none;
}
.register-page {
    height: 100vh;
}
.form-right i {
    font-size: 100px;
}
</style>