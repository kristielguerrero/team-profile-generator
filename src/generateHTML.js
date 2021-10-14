function generateHTML(data) {
    let htmlString = `

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <title>Team Generator</title>
  </head>

  <body>
    <header>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid" style="justify-content: center; color: lightgray;">
      <h1>My Team</h1>
    </div>
    </nav>
    </header>
    ${allCards}
  </body>
`;

function renderCard(employee){
    switch(employee.getRole()) {
        case "Engineer"; 
        return `
        <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="card" style="width: 18rem;">
                  <div class="card-header primary">
                      <h3 class="card-header">${employee.getName()}<br /><br />${employee.getRole()}</h3>
                  </div>
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID: ${employee.getID()}</li>
                      <li class="list-group-item">Email: ${employee.getEmail()}</li>
                      <li class="list-group-item">Github: ${employee.getGithub()}</li>
                  </ul>
              </div>
        `
        break; 

        case "Manager": 
          return `<div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="card" style="width: 18rem;">
              <div class="card-header primary">
                  <h3 class="card-header">${employee.getName()}<br /><br />${employee.getRole()}</h3>
              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${employee.getID()}</li>
                  <li class="list-group-item">Email: ${employee.getEmail()}</li>
                  <li class="list-group-item">Github: ${employee.getOfficeNumber()}</li>
              </ul>
          </div>`; 
          break; 
        
          case "Intern": 
          return `<div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="card" style="width: 18rem;">
              <div class="card-header primary">
                  <h3 class="card-header">${employee.getName()}<br /><br />${employee.getRole()}</h3>
              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${employee.getID()}</li>
                  <li class="list-group-item">Email: ${employee.getEmail()}</li>
                  <li class="list-group-item">Github: ${employee.getSchool()}</li>
              </ul>
          </div>`; 
          break; 
    }
}

module.exports = generateHTML; 








  
//     <nav class="navbar navbar-dark bg-dark">
//       <div class="container-fluid" style="justify-content: center; color: lightgray;">
//       <h2>My Team</h2>
//     </div>
//     </nav>
  
//     <div class="row row-cols-1 row-cols-md-2 g-4">
//       <div class="card" style="width: 18rem;">
//           <div class="card-header primary">
//               <p>Susie</p>
//               <p>Manager</p>
//           </div>
//           <ul class="list-group list-group-flush">
//               <li class="list-group-item">ID: 1</li>
//                   <li class="list-group-item">Email: <a href="mailto:susie@testemail.com">susie@testemail.com</a></li>
//               <li class="list-group-item">Office number: 10</li>
//           </ul>
//       </div>

   
//   <div class="card" style="width: 18rem;">
//       <div class="card-header ">
//           <p>Lola</p>
//           <p>Engineer</p>
//       </div>
//       <ul class="list-group list-group-flush">
//           <li class="list-group-item">ID: 2</li>
//           <li class="list-group-item">Email: <a href="lola@testemail.com">lola@testemail.com</a></li>
//           <li class="list-group-item">Github: <a href="https://github.com/LolaJones" target="_blank">LolaJones</a></li>
//       </ul>
//   </div>, 
     
//           <div class="card" style="width: 18rem;">
//           <div class="card-header ">
//               <p>Kim</p>
//               <p>Intern</p>
//           </div>
//           <ul class="list-group list-group-flush">
//               <li class="list-group-item">ID: 3</li>
//               <li class="list-group-item">Email: <a href="kim@testemail.com">kim@testemail.com</a></li>
//               <li class="list-group-item">School: SMU</li>
//           </ul>
//       </div>
//   </body>
// </html>
