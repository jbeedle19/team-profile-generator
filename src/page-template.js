// write function that takes in an array and returns literal for Manager
const renderTeamCard = employee => {
    return `
    <div class="card">
    <div class="card-body">
      <h3 class="card-title">${employee.name}</h3>
      <h4 class="card-title">${employee.getRole()}</h4>
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
    <html>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title></title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <link rel="stylesheet" href="">
        </head>
        <body>
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