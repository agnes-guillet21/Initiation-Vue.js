const reviewFormComponent = {

    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating ({{ rating }}):</label>
    <input type="range" id="rating" min="1" max="5" v-model.number="rating">

    <input class="button" type="submit" value="Submit">  

  </form>`,
data() {
    return {
        name: '',
        review: '',
        rating: 3,
    }
}

}
export default reviewFormComponent