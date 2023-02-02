<template>
    <div>
        <!-- Page Heading -->
        <div class="masthead">
            <div class="overlay"></div>
            <img
                src="../../assets/wallpaper_2.jpg"
                class="w-100 h-100 card-img parallaxIMG"
                alt=".Photo de Hair Spies sur Unsplash."
            />
            <div class="card-img-overlay col-md-5 mb-2">
                <div class="ps-md-5">
                    <h1 class="h1">
                        UNE PERSONNE QUI SE COUPE LES CHEVEUX EST UNE PERSONNE QUI S’APPRÊTE
                        À CHANGER DE VIE
                    </h1>
                    <button class="btn btn-dark">JE DÉCOUVRE LES OFFRES !</button>
                </div>
            </div>
        </div>
        <!-- End Page Heading -->
        <!-- Top Shopping -->
        <div class="container pt-5">
            <div class="shopping-section-collection">
                <div class="row pb-5 mb-4">
                    <h2 class="mb-5 text-dark">INCONTOURNABLES !</h2>
                    <div v-for="shampoo in shampoos" :key="`shampoo_${shampoo.id}`" class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <!-- Card-->
                        <div class="card px-0 mx-0 rounded shadow-sm border-0 shopping-section-collection-item">
                            <div class="card-body p-4">
                                <div class="product-card">
                                    <img :src="shampoo.image"
                                        alt="" class="img-fluid d-block mx-auto mb-3"
                                    />
                                    <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                                        <li class="icon me-3"><font-icon :icon="['fas', 'fa-heart']"></font-icon></li>
                                        <li class="icon"><font-icon :icon="['fas', 'fa-shopping-bag']"></font-icon></li>
                                    </ul>
                                </div>
                                <h5><a href="#" class="text-dark text-truncate">{{ shampoo.name }}</a></h5>
                                <p class="small text-muted font-italic text-truncate">{{ shampoo.description }}</p>
                                <h4>{{ shampoo.price }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-center">
                        <a href="#" class="btn shop-btn mt-4">VOIR TOUS LES PRODUITS</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Top Shopping -->
        <!-- hair style -->
        <div class="row mx-0 pt-5 pb-5 bg-light">
            <h2 class="mb-5 text-dark">NOS STYLES DE COIFURES</h2>
            <h1></h1>
            <div class="card hairstyle rounded-0 border-0 text-bg-dark col-md-4 px-0" v-for="shampoo in shampoos" :key="`shampoo_${shampoo.id}`">
                <img src="https://images.unsplash.com/photo-1548094878-84ced0f6896d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    class="card-img img-fluid" alt="google"/>
                <div class="card-img-overlay d-flex align-items-end justify-content-end">
                    <h5 class="card-title"><strong>AFRO</strong></h5>
                </div>
            </div>
            <div class="card hairstyle rounded-0 border-0 text-bg-dark col-md-4 px-0">
                <img src="https://images.unsplash.com/photo-1567894340315-735d7c361db0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=737&q=80"
                    class="card-img img-fluid" alt="google"/>
                <div class="card-img-overlay d-flex align-items-end justify-content-end">
                    <h5 class="card-title"><strong>DEGRADE</strong></h5>
                </div>
            </div>
            <div class="card hairstyle rounded-0 border-0 text-bg-dark col-md-4 px-0 mb-5">
                <img src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    class="card-img img-fluid" alt="google"/>
                <div class="card-img-overlay d-flex align-items-end justify-content-end">
                    <h5 class="card-title"><strong>COLORATION</strong></h5>
                </div>
            </div>
        </div>
        <!-- End hair style -->
        <div class="service-card">
            <div class="container">
                <div class="row justify-content-center mb-5 pb-3 pt-5">
                    <div class="col-md-7 heading-section text-center">
                        <h2 class="mb-4 text-dark">Plan et prix</h2>
                        <p class="flip">
                            <span class="deg1"></span><span class="deg2"></span
                        ><span class="deg3"></span>
                        </p>
                        <p class="mt-5">
                            Changer le monde, changer le monde vous êtes bien sympathiques
                            mais faudrait déjà vous levez le matin. Je sais pas si vous êtes
                            au courant mais le monde, il vous attend pas, le monde il bouge et
                            et il bouge vite! Et vous n'allez pas tarder à rester sur le moi
                            je vous le dit ! Parce que là vous êtes en vacances très bien mais
                            à la rentrée.
                        </p>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col-md-6">
                        <div class="pricing-entry">
                            <div class="d-flex text align-items-center">
                                <h3><span>Coupe de cheveux pour hommes</span></h3>
                                <span class="price">30€</span>
                            </div>
                            <div class="d-block">
                                <p>140 meilleures idées sur Coupe de cheveux en 2022</p>
                            </div>
                        </div>
                        <div class="pricing-entry">
                            <div class="d-flex text align-items-center">
                                <h3><span>Coupe de cheveux pour enfants</span></h3>
                                <span class="price">30€</span>
                            </div>
                            <div class="d-block">
                                <p>140 meilleures idées sur Coupe de cheveux en 2022</p>
                            </div>
                        </div>
                        <div class="pricing-entry">
                            <div class="d-flex text align-items-center">
                                <h3><span>Coupe de la barbe</span></h3>
                                <span class="price">30€</span>
                            </div>
                            <div class="d-block">
                                <p>140 meilleures idées sur Coupe de cheveux en 2022</p>
                            </div>
                        </div>
                        <div class="pricing-entry">
                            <div class="d-flex text align-items-center">
                                <h3><span>Coupe de cheveux pour hommes</span></h3>
                                <span class="price">30€</span>
                            </div>
                            <div class="d-block">
                                <p>140 meilleures idées sur Coupe de cheveux en 2022</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="pricing-entry">
                            <div class="d-flex text align-items-center">
                                <h3><span>WoCoupe de cheveux pour hommes</span></h3>
                                <span class="price">$49.91</span>
                            </div>
                            <div class="d-block">
                                <p>140 meilleures idées sur Coupe de cheveux en 2022</p>
                            </div>
                        </div>
                        <div class="pricing-entry">
                            <div class="d-flex text align-items-center">
                                <h3><span>Coupe de cheveux pour hommes</span></h3>
                                <span class="price">30€</span>
                            </div>
                            <div class="d-block">
                                <p>140 meilleures idées sur Coupe de cheveux en 2022</p>
                            </div>
                        </div>
                        <div class="pricing-entry">
                            <div class="d-flex text align-items-center">
                                <h3><span>Coupe de cheveux pour hommes</span></h3>
                                <span class="price">30€</span>
                            </div>
                            <div class="d-block">
                                <p>140 meilleures idées sur Coupe de cheveux en 2022</p>
                            </div>
                        </div>
                        <div class="pricing-entry">
                            <div class="d-flex text align-items-center">
                                <h3><span>Coupe de cheveux pour hommes</span></h3>
                                <span class="price">30€</span>
                            </div>
                            <div class="d-block">
                                <p>140 meilleures idées sur Coupe de cheveux en 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-parallax">
                <div class="overlay"></div>
                <img class="w-100 parallaxIMG" src="../../assets/barber4.jpg" alt="" />
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-7 text-center">
                            <h2 class="mb-4">Tous nos services</h2>
                            <p class="mb-4">
                                Changer le monde, changer le monde vous êtes bien sympathiques
                                mais faudrait déjà vous levez le matin. Je sais pas si vous êtes
                                au courant mais le monde, il vous attend pas, le monde il bouge
                                et il bouge vite! Et vous n'allez pas tarder à rester sur le
                                carreau moi je vous le dit ! Parce que là vous êtes en vacances
                                très bien mais à la rentrée.
                            </p>
                            <p>
                                <router-link
                                    :to="{ name: 'HAIR_CUT_LIST' }"
                                    class="btn shop-btn px-4 py-3"
                                >Réserver</router-link
                                >
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import simpleParallax from "simple-parallax-js";
import http from "@/http-common"; // @ is an alias to /src

export default defineComponent({
    name: 'HomeView',
    data() {
        return {
            shampoos: [],
        };
    },
    methods: {
        getRandomShampoos() {
            http.get("/random-shampoos").then((response) => {
                this.shampoos = response.data;
            });
        },
    },
    mounted() {
        this.getRandomShampoos();
        const images = [...document.querySelectorAll(".parallaxIMG")];
        images.forEach((image) => {
            new simpleParallax(image, {
                delay: 0.5,
                orientation: "down",
                transition: "cubic-bezier(0,0,0,1)",
            });
        });
    },
});
</script>
