function Creatgame(player1 , hour, player2) {
return `
 <li>
          <img src="./assets/icon-${player1}.svg" alt="bandeira do ${player1}" />
          <strong>${hour}</strong>
          <img src="./assets/icon-${player2}.svg" alt="bandeira do ${player2}" />
          </li>
`

}

let delay = -0.3;
function Creatcard(date, day, games) {
  delay = delay + 0.3;
  return `
          <div class="card" style="animation-delay: ${delay}s" >
          <h2>${date} <span> ${day} </span></h2>
          <ul>
         ${games}
          </ul>
           </div>
  `

}


document.querySelector("#cards").innerHTML =

      
      Creatcard(
        "24/11",
        "quinta",
        Creatgame("camarooes", "07:00", "swift") +
        Creatgame("portugal", "13:00", "ghana") +
          Creatgame("brasil", "16:00", "serbia") 

      ) +

      Creatcard(
        "28/11",
        "segunda",
        Creatgame("coreiadosul", "10:00", "ghana") +
          Creatgame("brasil", "13:00", "swift") +
          Creatgame("portugal", "16:00", "urugay")
      )
        +
      Creatcard("02/12", "sexta", Creatgame("brasil", "16:00", "serbia"))
