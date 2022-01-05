
import reviewFormComponent from './ReviewFormComponent.mjs'
import reviewListComponent from './ReviewListComponent.mjs'


const reviewZoneComponent = {
    template: `
        <div class="review-zone">
            <form-component></form-component>
            <list-component v-if="reviews.length>0"></list-component>
        </div>
    `,
    components: {
        'form-component': reviewFormComponent,
        'list-component': reviewListComponent
    },
    data(){
        return {
            reviews: []
        }
    }
}
export default reviewZoneComponent