var age = prompt("What is your age?")

if (age > 18) {
    alert("Get ready to play")
} else {
	alert("Play at your own risk")
}

var day = prompt("Zombie apocalypse. Your weapon: blades or bullets?")

if (day == "blades") {
	alert("Make sure you sharpen them often!")
} else {
	alert("Use the bullets wisely")
}

var vehicle = prompt("Choose your vehicle: SUV or Truck?")

if (vehicle == "suv") {
	alert("Safe choice") 
} else {
	alert("Truck. Run the undead over!")
}

var place = prompt("It's getting dark. You need to find shelter soon. Where do you set up camp: store or a clinic?")

if (place == "store") {
	alert("Acquired: Food")
} else {
	alert("Acquired: Medicine")
}

alert("You've made it through the night!")
alert("Day 2")

var person = prompt("You hear screaming out on the street. You find a person being chased by the undead. What do you do: fight, ignore, or distract?")

if (person == "fight") {
	alert("Aim for the undead's head! Acquired: 100px")
} else if (person == "ignore") {
	alert("Looking out for yourself") 
} else {
	alert("The undead smelled your fear!")
}

var end = confirm("End of demo. Purchase The Undead? Hit Cancel or OK")

if (end = "OK") {
	alert("See Mike for further instructions")
} else {
	alert("Thanks for playing")
}

