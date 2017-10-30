console.log("it works!");

//We just going to be experimenting with what we remember from the TS course whilst the internet is down, here...

type Person = {firstName: string, lastName: string, age: number, hobbies: string[]}

let tunde: Person = {
    firstName: "Ayotunde",
    lastName: "Ikuesan",
    age: 22,
    hobbies: ["blogging", "writing", "coding", "baking"]
};

let liz: Person = {
    firstName: "Elizabeth",
    lastName: "Ikuesan",
    age: 25,
    hobbies: ["cooking", "films", "swimming", "music"]
};

let sam: Person = {
    firstName: "Samuele",
    lastName: "Cinarelli",
    age: 24,
    hobbies: ["cars", "films", "sweets", "tech"]
}

let people: Person[] = [tunde, liz, sam];

for(var i = 0; i < people.length; i++) {
    console.log("Now printing information for: " + people[i].firstName);
    console.log("Full name: " + people[i].firstName + " " + people[i].lastName);
    console.log("Age: " + people[i].age);
    console.log("Hobbies: ");
    for(var j = 0; j < people[i].hobbies.length; j++){
        console.log(j+1 + ": " + people[i].hobbies[j]);
    }
    console.log("And that's all you need to know!\n");
}