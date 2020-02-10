var petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]
let withMarmaduke = Array.from(petNames)
withMarmaduke.push("Marmaduke")

console.log(`The names of my dogs are ${petNames}`)
console.log(`The names of my dogs are ${withMarmaduke}`)

var withoutDarcy = petNames.shift()
console.log(`The names of my dogs are ${petNames}`)

var userOption = prompt(`Which of these commands would you like to do? Remove Marty, Remove Vinny, Add Nancy, Add Own Name, Find Riley's Location, Find Cydni's Location, Show with Marmaduke`)

switch (userOption) {

case "Remove Vinny" :
  var removedVinny = petNames.splice(4,1)
console.log(`The action taken was Remove Vinny, The remaining data are ${petNames}`)
  break

  case "Remove Marty" :
  var removedMarty = petNames.splice(2,1)
  console.log(`The action taken was Remove Marty, The remaining data are ${petNames}`)
  break
  
   case "Add Nancy" :
 var addNancy = petNames.unshift("Nancy") 
 console.log(`The action taken was Add Nancy, The remaining data are ${petNames}`)
  break
  
   case "Find Riley's Location" :
  alert(`Riley is located at position ${petNames.indexOf("Riley")}`)
  console.log(`The action taken was Find Riley, The remaining data are ${petNames}`)
  break
  
case "Add Own Name" :
  let OwnName = Array.from(petNames)
  OwnName.push(prompt("Add Your Own Name",OwnName))
  alert(`New array ${OwnName}`)
  console.log(`The action taken was Add your own name, The remaining data are ${petNames}`)
  break
  
     case "Find Cydni's Location" :
  alert(`Cydni is located at position ${petNames.indexOf("Cydni")}`)
  console.log(`The action taken was Find Cydni, The remaining data are ${petNames}`)
  break
  
    case "Show with Marmaduke" :
  alert(withMarmaduke)
  console.log(`The action taken was show Marmaduke, The remaining data are ${petNames}`)
  break
  }

var firstPet = petNames.shift()
console.log(firstPet)

var withBarney = petNames.unshift("Barney")
console.log(withBarney)

var allPets = petNames.push("Ted","Fred","Jed", "Ned", "Ed", "Zed")
console.log(petNames)

stringPets = petNames.join()
console.log(stringPets)

var withAgnes = petNames.unshift("Agnes")
console.log(petNames)

