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
      <section class="section">
    <div class="container">
       <div class="field">
          <label class="label">Project Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input">
          </div>
        </div>
        <div class="field">
          <label class="label">Project Description</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input">
          </div>
        </div>
       </div>
       <div class="buttons">
 		<button class="button is-primary">Create</button>
 		</div>
  </section>
    </body>
</html>
