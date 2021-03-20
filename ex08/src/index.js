var contacts = [
    {
        "firstname": "John",
        "lastName": "Doe",
        "number": "12365495208",
        "likes": ["C", "C++", "C#"]
    },
    {
        "firstname": "Jane",
        "lastName": "Doe",
        "number": "4568295761",
        "likes": ["Python", "Swift", "R"]
    },
    {
        "firstname": "Richard",
        "lastName": "Roe",
        "number": "6938257149",
        "likes": ["React", "Angular", "Vue"],
    },
    {
        "firstname": "Jane",
        "lastName": "Roe",
        "number": "unknown",
        "likes": ["Javascript", "Node", "HTML & CSS"]
    },
];

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstname === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            }
            else {
                return "No such property";
            }
        }
    }
    return "No such contact";
}

console.log(lookUpProfile("Richard", "likes"));
module.exports = lookUpProfile; 