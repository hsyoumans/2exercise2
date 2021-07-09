let name1 = "beth"
let name2 = "stanley";
let name3 = "michael"
let longest = [];

if (name1.length > name2.length && name1.length > name3.length) {
    longest = name1;
    console.log(longest);
}
else if (name2.length > name1.length && name2.length > name3.length) {
    longest = name2;
    console.log(longest);
}
else if (name3.length > name1.length && name3.length > name2.length) {
    longest = name3;
    console.log(longest);
}
else if (name1.length == name2.length && name1.length > name3.length) {
    longest.push(name1);
    longest.push(name2);
    console.log(longest);
}
else if (name2.length == name3.length && name2.length > name1.length) {
    longest.push(name2);
    longest.push(name3);
    console.log(longest);
}
else if (name1.length == name3.length && name1.length > name2.length) {
    longest.push(name1);
    longest.push(name3);
    console.log(longest);
}
else if (name1.length == name2.length && name1.length == name3.length) {
    longest.push(name1);
    longest.push(name2);
    longest.push(name3);
    console.log(longest);
}