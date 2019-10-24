<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Form</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">

</head>
<body>
<div id="app" class="container">
    @include('projects.list')
    <br>
    {{--
        usisn @submit to submit form
        add prevent to dont use laravel and pass to vue
        use @keydown for when user use keyboard remove validation message
        --}}
    <form action="/projects" method="POST" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name) ">
        <div class="control">
            <label for="name" class="label">Project Name:</label>
            <input type="text" id="name" name="name" class="input" v-model="form.name">
            {{--if there is error show validation message--}}
            <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
        </div>
        <div class="control">
            <label for="description" class="label">Project Description:</label>
            <input type="text" id="description" name="description" class="input" v-model="form.description">
            {{--if there is error show validation message--}}
            <span class="help is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
        </div>
        <br>
        <div class="control">
            {{--if there is any error disable button--}}
            <button class="button is-primary" :disabled="form.errors.any()">Create</button>
        </div>
    </form>
</div>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="/js/app.js"></script>
</body>
</html>
