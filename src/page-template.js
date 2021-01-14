// write function that takes in an array and returns literal for Manager
const renderTeamCard = employee => {
    return `
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">${employee.name}</h3>
            <h4 class="card-title">${employee.getRole()}</h4>
        </div>
        <div class="card-body">
            <p class="card-text">ID: ${employee.id}</p>
            <p class="card-text">Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
            <p class="card-text">${employee.getRole() === 'Manager' ? `Office Number: ${employee.officeNumber}` : employee.getRole() === 'Engineer' ? `GitHub: ${employee.getGithub()}` : `School: ${employee.getSchool()}`}</p>
        </div>
    </div>
    `
}


module.exports = employees => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, intial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>My Team</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>

    <body>
        <nav class="navbar navbar-dark bg-dark justify-content-center">
            <span class="navbar-brand mb-0 h1">My Team</span>
        </nav>
        <div class="card-deck">
        ${employees.map(employee => {
            return renderTeamCard(employee)
        })
        .join('')}
        </div>    
    </body>
    </html>
    `
} 