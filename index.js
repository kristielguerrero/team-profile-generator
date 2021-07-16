//Example that Henry wrote
function createHTML(allEmployees) {
  let allCards = " ";
  allEmployees.forEach((employee) => {
    allCards + -renderCards(employee);
  });

  return (
    <html>
      <body>${renderCards()}</body>
    </html>
  );
}

// function renderCard (empolyee) {
//     switch(employee.getRole()) {
//         case "engineer""
//         return `<div>
//         <h2>Hi, I'm ${employee.getName()}</h2>
//         <h4>I'm an engineer!</h4>
//         </div>`;
//     }
// }
