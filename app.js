const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣'
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
}
]


let hoursLeft = 6


function attack(location) {
    console.log(location)
    let foundPeople = people.filter((person) => person.location == location)
    foundPeople.map((person) => person.picture = '🦇')
    movePeople()
    draw()
    hoursLeft--
}

function movePeople() {
    people.forEach((person) => {
        let locationNumber = Math.floor(Math.random() * locations.length)
        person.location = locations[locationNumber]
    })

}

function hasWon() {
    let won = true
    for (let i = 0; i < people.length; i++) {
        if (people[i].picture != '🦇') {
            won = false
        }
    }
    if (won == true) {
        window.alert("YOU WIN")
    }
}

function draw() {
    locations.forEach(location => {
        let filteredPeople = people.filter((person) => person.location == location)
        let emojiPeople = filteredPeople.map((person) => person.picture)
        let pTag = document.getElementById(location)
        pTag.innerText = emojiPeople.join(' ')
    })
    hasWon()
}

draw()


