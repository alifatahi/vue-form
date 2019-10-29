import Vue from 'vue';
import axios from 'axios';
import Form from './core/Form';

window.axios = axios;
window.Form = Form;

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
            this.form.post('/projects')
                .then(response => alert('Wahoo!'));
        },
    }
});
