document.addEventListener('DOMContentLoaded', postData)

const data = document.location.search;
const params = new URLSearchParams(data);

const place = params.get('place');
const club = params.getAll('club');
const friday = params.get('friday');
const tradition = params.get('tradition');
const credit = params.get('credit');
const side = params.get('side');
const dining = params.get('dining');

let gryffindor = 0;
let slytherin = 0;
let hufflepuff = 0;
let ravenclaw = 0;
let sortinghat;
let motto;
let image;


if (place == "tt") {
    slytherin += 1;
} else if (place == "library") {
    ravenclaw += 1;
} else if (place == "stadium") {
    gryffindor += 1;
} else if (place == "center") {
    hufflepuff += 1;
}

if (club.includes("leadership")) {
    slytherin += 1;
}
if (club.includes("academic")) {
    ravenclaw += 1;
}

if (club.includes("sports")) {
    gryffindor += 1;
}

if (club.includes("volunteer")) {
    hufflepuff += 1;
}

if (friday == "games") {
    slytherin += 1;
} else if (friday == "study") {
    ravenclaw += 1;
} else if (friday == "party") {
    gryffindor += 1;
} else if (friday == "movie") {
    hufflepuff += 1;
}

if (tradition == "wreck") {
    slytherin += 1;
} else if (tradition == "whistle") {
    ravenclaw += 1;
} else if (tradition == "buzz") {
    gryffindor += 1;
} else if (tradition == "welcome") {
    hufflepuff += 1;
}

if (credit >= 6 && credit < 13) {
    slytherin += 1;
} else if (credit >= 13 && credit < 16) {
    hufflepuff += 1;
} else if (credit >= 16 && credit < 18) {
    gryffindor += 1;
} else if (credit >= 18 && credit <= 21) {
    ravenclaw += 1;
} 

if (side == "east") {
    slytherin += 1;
    gryffindor += 1;
}
else {
    hufflepuff += 1;
    ravenclaw += 1;
}


if (dining == "ew") {
    slytherin += 1;
} else if (dining == "britain") {
    ravenclaw += 1;
} else if (dining == "nav") {
    gryffindor += 1;
} else if (dining == "willage") {
    hufflepuff += 1;
}

if (slytherin > gryffindor && slytherin > hufflepuff && slytherin > ravenclaw) {
    sortinghat = "Slytherin";
    motto = "cunningness and ambition";
    image = 'Slytherin_Crest.webp';
} else if (gryffindor > slytherin && gryffindor > hufflepuff && gryffindor > ravenclaw) {
    sortinghat = "Gryffindor";
    motto = "strength and courage";
    image = "Gryffindor_crest.webp";
} else if (hufflepuff > slytherin && hufflepuff > gryffindor && hufflepuff > ravenclaw) {
    sortinghat = "Hufflepuff";
    motto = "hard work and loyalty";
    image = 'Hufflepuff_crest.webp';
} else if (ravenclaw > slytherin && ravenclaw > gryffindor && ravenclaw > hufflepuff) {
    sortinghat = "Ravenclaw";
    motto = "wit and unity";
    image = 'Ravenclaw_crest.webp';
} else {
    sortinghat = "2 or more houses, try again with different answers"
    motto = "so many things"
    image = 'Sorting_Hat.webp';
}

function postData() {
    const container = document.getElementById('house');
    container.innerHTML = `<h1>Hmm... you are in ${sortinghat}!</h1>
                            <p>You value ${motto} above the rest!<p>
                            <img src="${image}"></img>
                            <div>
                                <a href="form.html"><button>Sort Me Again!</button></a>
                            </div>`;
}

