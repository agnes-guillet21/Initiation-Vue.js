
import reviewFormComponent from './ReviewFormComponent.mjs'
import reviewListComponent from './ReviewListComponent.mjs'


const reviewZoneComponent = {
    template: `
        <div class="review-zone">
            <form-component></form-component>
            <list-component></list-component>
        </div>
    `,
    components: {
        'form-component': reviewFormComponent,
        'list-component': reviewListComponent
    }
}
export default reviewZoneComponent