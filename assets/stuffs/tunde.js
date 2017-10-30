console.log("it works!");
var tunde = {
    firstName: "Ayotunde",
    lastName: "Ikuesan",
    age: 22,
    hobbies: ["blogging", "writing", "coding", "baking"]
};
var liz = {
    firstName: "Elizabeth",
    lastName: "Ikuesan",
    age: 25,
    hobbies: ["cooking", "films", "swimming", "music"]
};
var sam = {
    firstName: "Samuele",
    lastName: "Cinarelli",
    age: 24,
    hobbies: ["cars", "films", "sweets", "tech"]
};
var people = [tunde, liz, sam];
for (var i = 0; i < people.length; i++) {
    console.log("Now printing information for: " + people[i].firstName);
    console.log("Full name: " + people[i].firstName + " " + people[i].lastName);
    console.log("Age: " + people[i].age);
    console.log("Hobbies: ");
    for (var j = 0; j < people[i].hobbies.length; j++) {
        console.log(j + 1 + ": " + people[i].hobbies[j]);
    }
    console.log("And that's all you need to know!\n");
}
