import app from './app.js';
import navbarComponent from './components/NavBarComponent.mjs';
import cartComponent from './components/CartComponent.mjs';
import productComponent from './components/ProductComponent.mjs';
import reviewZoneComponent from './components/review/ReviewZoneComponent.mjs';

// Vue application
const appInstance = Vue.createApp(app);

// Components 
appInstance.component('navbar-component', navbarComponent);
appInstance.component('cart-component', cartComponent);
appInstance.component('product-component', productComponent);
appInstance.component('review-zone-component', reviewZoneComponent);

// Mounting
appInstance.mount('#app');