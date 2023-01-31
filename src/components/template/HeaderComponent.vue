<template>
    <div class="bg-white">
        <div class="position-relative">
            <div class="col-12 col-md-11 mx-auto">
                <div class="row mx-0">
                    <div class="col mt-4 text-start">
                        <div class="d-lg-none bar" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                            <div class="bar_line"></div>
                            <div class="bar_line"></div>
                            <div class="bar_line"></div>
                        </div>
                        <div class="d-none d-lg-block">
                            <ul class="nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">LA BOUTIQUE</a>
                                </li>
                                <li class="nav-item">
                                    <span class="nav-link">|</span>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">CARTE CADEAU</a>
                                </li>
                                <li class="nav-item">
                                    <span class="nav-link">|</span>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">COACHING</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col logo">
                        <img alt="Vue logo" src="./../../assets/logo5.png"/>
                    </div>
                    <div class="col mt-4 d-none d-lg-block">
                        <ul class="nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">COMPTE</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    FAVORIES (0)
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">PANIER (<strong>{{ $store.getters.nbItemsInCart }}</strong>)</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row mx-0">
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                <strong>Reservation</strong>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Actualités</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div
            class="offcanvas offcanvas-start"
            data-bs-backdrop="static"
            tabindex="-1"
            id="staticBackdrop"
            aria-labelledby="staticBackdropLabel"
        >
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div>I will not close if you click outside of me.</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "HeaderComponent",
});
</script>

<style scoped>
.bar {
    width: 35px;
    cursor: pointer;
}

.bar_line {
    width: 35px;
    height: 1px;
    background-color: #fff;
    margin: 6px 0;
}

.logo {
    height: 140px;
    object-fit: contain;
}

.logo img {
    height: 100% !important;
    aspect-ratio: auto !important;
    object-fit: contain !important;
}

.nav-link {
    color: #000000 !important;
    letter-spacing: 2px;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 14px;
    font-family: "Jost", sans-serif;
}

@media (max-width: 991px) {
    .logo {
        height: 80px;
        object-fit: contain;
    }

    .logo img {
        height: 100% !important;
        aspect-ratio: auto !important;
        object-fit: contain !important;
    }
}
</style>
