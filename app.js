const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣', '🏠', '🏛', '🏟', '🏰'
]

const people = [{
    name: 'Jimbo',
    picture: '🤵',
    location: '🏤'
},
{
    name: 'Sammy',
    picture: '🙆‍♀️',
    location: '🏤'
},
{
    name: 'Michael',
    picture: '👷',
    location: '🏤'
},
{
    name: 'Robert',
    picture: '👷',
    location: '🏥'
},
{
    name: 'Terry',
    picture: '🤴',
    location: '🏥',
},
{
    name: 'Bill',
    picture: '🕵️',
    location: '🏥',
},
{
    name: 'Marie',
    picture: '👩‍🍳',
    location: '🏭',
},
{
    name: 'Mykeal',
    picture: '💂',
    location: '🏭',
},
{
    name: 'Phil',
    picture: '🧜‍♂️',
    location: '🏭',
},
{
    name: 'Wilson',
    picture: '🏐',
    location: '🏢',
},
{
    name: 'Wendy',
    picture: '👩‍⚕️',
    location: '🏢',
},
{
    name: 'Jeremy',
    picture: '🦹',
    location: '🏢',
},
{
    name: 'Santa',
    picture: '🎅',
    location: '🏰',
},
{
    name: 'Jester',
    picture: '🤹‍♂️',
    location: '🏰',
},
{
    name: 'Paul Blart',
    picture: '👮‍♂️',
    location: '🏟',
},
{
    name: 'Gandalf',
    picture: '🧙‍♂️',
    location: '🏰',
},
{
    name: 'Ned',
    picture: '🏄‍♂️',
    location: '🏟',
},
{
    name: 'Elf',
    picture: '🧝‍♀️',
    location: '🏟',
},
{
    name: 'Teller',
    picture: '👨‍💼',
    location: '🏛',
},
{
    name: 'Superwoman',
    picture: '🦸‍♀️',
    location: '🏛',
},
{
    name: 'witch',
    picture: '🧙‍♀️',
    location: '🏛',
},
{
    name: 'Mildred',
    picture: '👵',
    location: '🏠',
},
{
    name: 'Frank',
    picture: '🧓',
    location: '🏠',
},
{
    name: 'small child',
    picture: '👶',
    location: '🏠',
},
{
    name: 'Joe',
    picture: '👨‍🌾',
    location: '🏣',
},
{
    name: 'Ben',
    picture: '👩‍💻',
    location: '🏣',
},
{
    name: 'Angela',
    picture: '👼',
    location: '🏣',
}
]


let hoursLeft = 12
let hunter = null
let allBats = false


function selectHunter() {
    let randomNumber = Math.floor(Math.random() * people.length)
    hunter = people[randomNumber].name

    let hunterId = document.getElementById('hunterId')
    console.log(hunterId)
    hunterId.innerText = 'BEWARE: The Hunter is near' + people[randomNumber].picture
}

function isBats() {
    // change allBats to true if everyone but the hunter are bats
    let totalBats = 0
    let totalPeople = people.length

    people.forEach((person) => {
        if (person.name != hunter) {
            if (person.picture == '🦇') {
                totalBats += 1;
                console.log(totalBats)
                console.log(people.length)
            }
        }
    })
    if (totalBats == people.length - 1) {
        allBats = true
    }

}

function attack(location) {
    let foundPeople = people.filter((person) => person.location == location)
    foundPeople.map((person) => {
        if (person.name == hunter) {
            // if there are ppl left that aren't bats
            isBats()
            if (allBats == false) {
                hoursLeft = 1
                hasWon()
            } else {
                hasWon()
            }
        }
    })
    if (hoursLeft > 0) {
        foundPeople.map((person) => person.picture = '🦇')
        movePeople()
        draw()
    }
}

function movePeople() {
    people.forEach((person) => {
        let locationNumber = Math.floor(Math.random() * locations.length)
        person.location = locations[locationNumber]
    })

}

function hasWon() {
    let won = true
    hoursLeft = hoursLeft - 1;

    for (let i = 0; i < people.length; i++) {
        if (people[i].picture != '🦇' && people[i].name != hunter) {
            won = false
        }
    }
    if (won == true) {
        window.alert("YOU WIN")
    } else if (hoursLeft <= 0) {
        window.alert("YOU LOSE!")
    }
}

function draw() {
    locations.forEach(location => {
        let filteredPeople = people.filter((person) => person.location == location)
        let emojiPeople = filteredPeople.map((person) => person.picture)
        let pTag = document.getElementById(location)
        pTag.innerText = emojiPeople.join(' ')
    })
}

selectHunter()
draw()


