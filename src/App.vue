<template>
    <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap');
#app {
    min-height: 100vh;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
div {
    font-family: 'Poppins', Arial, sans-serif;
    font-size: 15px
}
h1 {
    font-family: 'Barlow Condensed', Arial, sans-serif;
    font-size: 30px;
}
h2 {
    color: #fff;
    font-weight: 700;
    font-family: 'Barlow Condensed', sans-serif;
}
h3 {
    font-weight: 700;
    font-family: 'Barlow Condensed', sans-serif;
}

.pricing-entry .text {
    width: 100%;
    display: block;
    position: relative;
    z-index: 0;
}
.pricing-entry .text h3 {
    width: calc(100% - 80px);
    font-size: 18px;
}
.pricing-entry .price {
    color: #ce9c6b !important;
    font-weight: bold;
}

.bg-parallax {
    position: relative;
    height: 500px;
    overflow: hidden;
    text-align: center;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
.bg-parallax .container {
    position: absolute;
    z-index: 2;
}

.leaving img {
    height: 100%;
    object-fit: cover;
}
.hairstyle {
    height: 800px;
    background-color: #000000;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 300px;
}
.hairstyle img {
    height: 100%;
    object-fit: cover;
}
/** Navbar **/
.bar {
    width: 35px;
    cursor: pointer;
}
.bar_line {
    width: 35px;
    height: 1px;
    background-color: #000000;
    margin: 6px 0;
}
.logo {
    height: 120px;
    object-fit: contain;
}
.logo img {
    height: 100% !important;
    aspect-ratio: auto !important;
    object-fit: contain !important;
}
.nav-link {
    color: RGB(0, 0, 0) !important;
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
/** End Navbar **/
/** Content **/
/** masthead **/

.masthead {
    position: relative;
    height: 100vh;
    overflow: hidden;
    text-align: center;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
.masthead img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
.masthead .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}
.masthead .card-img-overlay {
    display: flex;
    align-items: flex-end;
    justify-content: left;
    z-index: 2;
}
/** End masthead **/
/** shopping-section-collection **/
.shopping-section-collection {
    min-height: 780px;
}
.shopping-section-collection-item img {
    height: 300px;
    aspect-ratio: 3/2;
    object-fit: cover;
    object-position: center;
    mix-blend-mode: multiply;
    overflow: hidden;
}
.product-card {
    height: 300px;
    overflow: hidden;
}

.shopping-section-collection-item .icons .icon {
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.6s ease;
    transform: rotate(180deg);
    cursor: pointer;
}

.icons .icon:hover {
    background-color: #b71c1c;
    color: #fff;
}

.icons .icon:nth-last-of-type(3) {
    transition-delay: 0.2s;
}

.icons .icon:nth-last-of-type(2) {
    transition-delay: 0.15s;
}

.icons .icon:nth-last-of-type(1) {
    transition-delay: 0.1s;
}

.shopping-section-collection-item:hover .icons .icon {
    transform: translateY(-100px);
}

.shop-btn {
    background-color: #ce9c6b !important;
    color: #fff !important;
    border: 1px solid #ce9c6b !important;
    border-radius: 15px;
}
</style>
