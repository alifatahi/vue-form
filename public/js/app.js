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
    any() {
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
        if (field) {
            //If there is error validation we show it until type so if other input fill its stool show error
            delete this.errors[field];
            return;
        }
        this.errors = {};
    }
}

//Class for Form Process
class Form {

    constructor(data) {
        //set original data
        this.originalData = data;

        //get field throw loop in data and also declare field let so out of scope its not change
        for (let field in data) {
            this[field] = data[field];
        }
        //if error pass to Error Class
        this.errors = new Errors();
    }

    //Get Data
    data() {
        //set
        let data = Object.assign({}, this);

        //after set it to let data we remove original & errors
        delete data.originalData;
        delete data.errors;

        //and return data
        return data;
    }

    //reset form
    reset() {
        //loop and set to null
        for (let field in this.originalData) {
            this[field] = '';
        }
    }

    //submit form
    submit(requestType, url) {

        //using axios and pass url and data from data object
        axios[requestType](url, this.data())
        //when success
            .then(this.onSuccess.bind(this))
            //when fail
            .catch(this.onFail.bind(this));
    }

    //on Success clear error and reset form
    onSuccess(response) {
        alert(response.data.message);
        this.errors.clear();
        this.reset();
    }

    onFail(error) {
        //when fail we record error and pass it to Errors Class
        this.errors.record(error.response.data.errors);
    }
}

new Vue({
    el: '#app',

    data: {
        //pass Form Class to Handle all things
        form: new Form({
            name: '',
            description: '',
        })
    },

    methods: {
        //when Submit Form Shoot this method
        onSubmit() {
            this.form.submit('post', '/projects');
        },
    }
});
