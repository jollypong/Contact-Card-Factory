//function to make html structure with card objects
const inquirer = require('inquirer');
const fs = require('fs');

function writeHTML(data) {
    return
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <title>${data.teamName}</title>
</head>

<body>
    <div id="header" class="bg-primary p-4 mb-2">
        <h1 id="header" class="text-center">Team Contact List</h1>
    </div>
    <main class="row">
        <section id="infoContainer" class="card col-12">
            <h2 id="teamMemberContainer" class="card-header bg-info">Team Members:</h2>
            <div id="memberCards" class="row">
                <!-- empty div to add cards for members-->
            </div>
        </section>
    </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
</body>

</html>
`
};

module.export = writeHTML;