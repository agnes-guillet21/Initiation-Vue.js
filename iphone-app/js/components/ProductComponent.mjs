const productComponent = {
    template: `
        <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="image" :alt="product">
                </div>
                <div class="product-info">
                    <h1>{{ product }}</h1>
                    <p>{{ description }}</p>
                    <p v-if="inStock">In stock</p>
                    <p v-else>Out of stock</p>
                    <!-- <p v-if="quantity>5">In stock</p>
                    <p v-else-if="(quantity>=1) && (quantity<=5)">Almost sold out</p>
                    <p v-else>Out of stock</p> -->
                    <ul>
                        <li v-for="spec in specs">{{ spec }}</li>
                    </ul>
                    <div v-for="(variant, ind) in variants" :key="variant.id" @mouseover="activeVariant = ind"
                        class="color-circle" :style="{backgroundColor: variant.color}"></div>
                    <button @click="$emit('addToCart')" class="button" :disabled="!inStock" :class="{disabledButton: !inStock}">Add
                        to cart</button>
                </div>
            </div>
        </div>`,
    data() {
        return {
            product: "iPhone 13",
            description: " Comment se ruiner juste pour un smartphone",
            // image: './assets/images/iphone-13-blue.png',
            // inStock: true,
            // quantity: 0,
            specs: ['5G speed', 'Edge-to-edge OLED display', 'Ceramic Shield'],
            variants: [
                { id: 'iphone13-001', color: 'blue', image: './assets/images/iphone-13-blue.png', quantity: 10 },
                { id: 'iphone13-002', color: 'black', image: './assets/images/iphone-13-midnight.png', quantity: 5 },
                { id: 'iphone13-003', color: 'red', image: './assets/images/iphone-13-red.png', quantity: 0 }
            ],
            activeVariant: 0
        }
    },
    methods: {
        updateImage(imageURL) {
            this.image = imageURL
        }
    },
    computed: {
        image() {
            return this.variants[this.activeVariant].image
        },
        inStock() {
            return this.variants[this.activeVariant].quantity > 0 ? true : false
        }
    }
}

export default productComponent;