import reviewFormComponent from './ReviewFormComponent.mjs'
import reviewListComponent from './ReviewListComponent.mjs'

const reviewZoneComponent = {
    template: `
        <div class="review-zone">
            <form-component @review-submitted="addReview"></form-component>
            <list-component v-if="reviews.length>0" :reviews="reviews"></list-component>
        </div>
    `,
    components: {
        'form-component': reviewFormComponent,
        'list-component': reviewListComponent
    },
    data() {
        return {
            reviews: []
        }
    },
    methods: {
        addReview(review) {
            this.reviews.push(review);
        }
    }
}
export default reviewZoneComponent