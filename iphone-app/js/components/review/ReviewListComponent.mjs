const reviewListComponent = {
    template: `
    <article> 
    
    <h3>Name</h3>
    <p> Hello from ListComponent</p>
    
    </article> `,
    props:{
        review: {
            type: Array,
            required: true
        }
    },
}
export default reviewListComponent