// Iteration 1: Names and Input
//1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "Crazy Driver"
//1.2 Print `"The driver's name is XXXX"`.
console.log("1.2) The driver's name is",hacker1)
//1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Fearless Navigator"
//1.4 Print `"The navigator's name is YYYY"`.
console.log("1.4) The navigator's name is",hacker2)

// Iteration 2: Conditionals
//2.1. Depending on which name is longer, print:
//- The driver has the longest name, it has XX characters. or
//- It seems that the navigator has the longest name, it has XX characters. or
//- Wow, you both have equally long names, XX characters!.
if (hacker1.length>hacker2.length){
    console.log("2.1)",hacker1,"has the longest name, it has",hacker1.length, "characters.")
   }else if(hacker1.length<hacker2.length){
     console.log("2.1) It seems that",hacker2,"has the longest name, it has",hacker2.length, "characters.")
   }else{
     console.log("2.1) Wow, you both have equally long names,", hacker2.length ,"characters!")
   }

// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let hacker1NewFormat = "3.1) "
for (let i = 0; i <= hacker1.length-1; i++){
    hacker1NewFormat += hacker1.charAt(i).toUpperCase() + " ";
}
console.log(hacker1NewFormat);
//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let hacker2NewFormat = "3.2) "
for (let i = hacker2.length-1; i >= 0; i--){
    hacker2NewFormat += hacker2.charAt(i);
}
console.log(hacker2NewFormat);
//3.3 Depending on the lexicographic order of the strings, print:
//- The driver's name goes first.
//- Yo, the navigator goes first definitely.
//- What?! You both have the same name?*/

if ((hacker1.charCodeAt(0)-96)<(hacker2.charCodeAt(0)-96)){
 console.log("3.3) The driver's name goes first.")
}else if ((hacker1.charCodeAt(0)-96)>(hacker2.charCodeAt(0)-96)){
 console.log("3.3) Yo, the navigator goes first definitely.")
}else{
  console.log("3.3) What?! You both have the same name?")
}