//function to generate an HTML template
function generateHTML(data) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="team.css">
    <title>Contact Card Factory</title>
</head>

<body>
    <div id="header" class="bg-primary p-4 mb-2">
        <h1 id="header" class="text-center">Team Contact List</h1>
    </div>
    <main>
    <section id="infoContainer" class="row-col-2">
        <h2 id="teamMemberContainer" class= "header text-center bg-info">Team Members:</h2>
        <div id="card-container" class="row ms-1">
            ${generateCard(data)}
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

//function to create cards per role for card container referencing data from team.html
function generateCard(team) {
    let cards = team.map(card => {
        return `
        <div id="memberCards" class="card border border-2 border-primary" style="width:20rem;">
            <div class="card-header text-center">
                <h3>${card.name}</h3> 
                <h4>${card.role}</h4>
            </div>
            <div class="card-body">
                <ul class = "list-group">
                    <li class = "list-group-item">ID: ${card.id}</li>
                    <li class = "list-group-item">Email: <a href="mailto:${card.email}">${card.email}</a></li>
                    <li class = "list-group-item">
                    ${card.getRole() == "Manager" ? `Office Number: ${card.officeNumber}` : ""}
                    ${card.getRole() == "Engineer" ? `GitHub: <a href ="http://www.github.com/${card.githubName}" target = "_blank">${card.githubName}</a>` : ""}
                    ${card.getRole() == "Intern" ? `School: ${card.school}` : ""}
                    </li>
                </ul> 
            </div>
        </div>`
    })
    return cards.join()
};

//export both functions for use in app.js
module.exports = generateHTML;