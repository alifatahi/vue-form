//Error Class
class Errors {

    //set our class to empty object
    constructor() {
        this.errors = {};
    }

    //check if has error for show span error
    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    //check if there is error to disable button
    any(){
        return Object.keys(this.errors).length > 0;
    }

    //check if there is error get the error msg
    get(field) {
        if (this.errors[field]) {
            //error store in first array of field
            return this.errors[field][0]
        }
    }

    //record the error
    record(errors) {
        this.errors = errors;
    }

    //clear the error for remove validation message
    clear(field) {
        delete this.errors[field];
    }
}

new Vue({
    el: '#app',

    data: {
        name: '',
        description: '',
        errors: new Errors()
    },

    methods: {
        //when Submit Form Shoot this method
        onSubmit() {
            //using axios and pass url and data from data object
            axios.post('/projects', this.$data)
                //when success
                .then(this.onSuccess)
                //when fail we record error and pass it to Errors Class
                .catch(error => this.errors.record(error.response.data.errors));
        },

        onSuccess(response){
            alert(response.data.message);

            form.reset();
        }
    }
});
