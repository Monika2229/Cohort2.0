//1st question
// for (let i=0; i<=10; i++){
//     console.log(i);
// }
//2nd question
// for(let i=1;i<=20;i++){
//     if(i%2==0){
//         console.log(`even numbers are: ${i}`);;
//     }
// }


//3rd question
// for(let i=10;i>0;i--){
//     console.log(i);
// }

//4th question
// for(let i=1;i<6;i++){
//     console.log("Yes");
// }

//5th question
// for(let i=1;i<=10;i++){
//     if(i%2===0)console.log(`${i} -"Even"`);
//     else console.log(`${i} -"Odd"`);
// }

//6th question
// let a=+prompt("Enter a number");
// if(a>0) console.log("Positive");
// else if(a<0) console.log("Negative");
// else console.log("Zero");

//7th question
// let age=+prompt("Enter your age");
// if(age>=18) console.log("Eligible");
// else console.log("Not Eligible");

//8th question
// let b=+prompt("Enter a number");
// for(let i=1;i<=10;i++){
//     console.log(`${b} x ${i} = ${b*i}`);
// }

// //9th question
// let count=0;
// for(let i=1; i<=15;i++){
//     if(i>8) count++;
//     console.log(count);
// }

// 10th question
// let password="admin123";
// let c = prompt("Enter password");
// if(c===password) console.log("Access Granted");
// else console.log("Access Denied");

//11th question
// let password="admin123";
// for(let i=1;i<=3;i++){
//     let s=prompt("Enter password");
//     if(s===password){
//         console.log("Access Granted");
//     break;
//     }
//     else{
//         console.log("Account Locked");
//     }
// }   

//12th question
//Ask user for words until they type “stop”. Count how many times they typed “yes”
//Loop until "stop" is typed. Count "yes".

// let count=0;
// while(true){
//     let word=prompt("Enter a word");   
//     if(word==="stop"){
//         break;
//     }
//     if(word==="yes"){
//         count++;
//     }       
// }
// console.log(`You typed "yes" ${count} times`);

//13th question
// let a=+prompt("Enter a number");
// for(let i=1;i<=50;i++){
//     if(i%a===0){
//         console.log(i);
//     }
// }

// //14th question
// let sum=0;
// for(let i=1;i<=30;i++){
//     if(i%2===1){
//         sum+=i;
//     }
// }
// console.log(`sum of odd numbers between 1 to 30 is: ${sum}`);

//15th question
// while(true){
//     let a=+prompt("Enter a number");
//     if(a%2===0){
//         break;
//     }
// }
// console.log("You have entered a even number so, Program terminated.");

//16th question

// let Moni = +prompt("Enter a number which you like the most:");
// let Bhav = +prompt("Enter a number which you like the most:");

// if(Moni===Bhav || Moni<=0 || Bhav<=0){
//     console.log("Invalid Range");
// }
// else{
//     for(let i=Moni; i<=Bhav; i++){
//     console.log(i);
//     }
// }


//17th question
// let count=0;
// for(let i=1; i<=20; i++){
//     if(i%2===1){
//         console.log(i);
//         count++;
//         if(count===3){
//             break;
//         }
//     }
// }


//18th question

// let balance = 1000;
// for(let i=1; i<=3; i++){
//     let withdraw = +prompt("Enter amount to withdraw:");
//     if(withdraw > balance){
//         console.log("Insufficient balance");
//     }
//     else{
//         balance -= withdraw;
//         console.log(`Withdrawal successful. Remaining balance: ${balance}`);
//     }
// }


// let max = prompt("Enter maximum number which you like:");
// const random =Math.floor(Math.random()*max) +1;
// let guess = prompt("Guess a number");
// while(true){
//     if(guess==="quit"){
//         console.log("Game exited.");
//         break;
//     }  
//     guess = +guess; 
//     if(guess<random){
//         console.log("Too low! Try again.");
//     }
//     else if(guess>random){
//         console.log("Too high! Try again.");
//     }
//     else{
//         console.log("Congratulations! You guessed the correct number",random);
//         break;
//     }
//     guess = prompt("Wrong guess! Enter again:");
// }


// let prices = [100, 250, 500, 1200];

// let finalprices = prices.map(n => n * 1.18);

// console.log(finalprices);

// let number= [5, 12, 18, 3, 20];
// let filternumber = number.filter(n => n%2===0);
// console.log(filternumber);

// let number= [5, 12, 18, 3, 20];
// let filternumber = number.filter(function(n){
//     return n%2===0;
// });
// console.log(filternumber);  

// let prices = [100, 250, 500, 1200];

// let finalprices = prices.filter(function(n){
//     if(n>=500){
//         n = n * 1.18;
//         return n;
//     }
// });
// console.log(finalprices);

// let marks=[20, 35, 60, 28, 90];

// let failmarks= marks.filter(n => n <35) .map(n => n+5) . reduce((total,n) => total+n,0);
// console.log(failmarks);

// let marks=[20, 35, 60, 28, 90];

// let totalgracemarks=marks
// .filter(function(n){
//     return n<35;
// })
// .map(function(n){
//     return n+5;
// })
// .reduce(function(total,n){
//     return total+n;
// },0);
// console.log(totalgracemarks);


// let arr =[1,4,3,6,8,5,7,9,2];

// let finalresult= arr.reduce(function(max,n){
//     if(max < n){
//         return n;
//     }else{
//         return max;
//     }
// })
// console.log(`The largest number in the array is: ${finalresult}`);

// let arr =[2,8, 9, 6, 5 ,4,10,90,60,49,30,20];

// let finalresut=arr.every(n => n%2===0);
// console.log(finalresut);


var arr = [
    {
        Team: "CSK",
        Captain: "MS Dhoni",
        Championships: 4,
        fullname: "Chennai Super Kings",
        primarycolor: "Yellow",
        secondarycolor: "Blue"
    },
    {
        Team: "MI",
        Captain: "Rohit Sharma",
        Championships: 5,
        fullname: "Mumbai Indians",
        primarycolor: "Blue",
        secondarycolor: "Gold"
    },
    {
        Team: "RCB",
        Captain: "Faf du Plessis",
        Championships: 0,
        fullname: "Royal Challengers Bangalore",
        primarycolor: "Red",
        secondarycolor: "Black"
    }, 
    {
        Team: "KKR",
        Captain: "Shreyas Iyer",
        Championships: 2,
        fullname: "Kolkata Knight Riders",
        primarycolor: "Purple",
        secondarycolor: "Gold"
    },
    {
        Team: "SRH",
        Captain: "Aiden Markram",
        Championships: 1,
        fullname: "Sunrisers Hyderabad",
        primarycolor: "Orange",
        secondarycolor: "Black"
    },
    {
        Team: "DC",
        Captain: "Rishabh Pant",
        Championships: 0,
        fullname: "Delhi Capitals",
        primarycolor: "Blue",
        secondarycolor: "Red"
    }
];

var btn = document.querySelector("button");
var h1 = document.querySelector("h1");
var ma= document.querySelector("main");

btn.addEventListener("click", function () {
    var winnerTeam = arr[Math.floor(Math.random() * arr.length)];
    h1.innerHTML = `${winnerTeam.Captain}`;
    h1.style.backgroundColor = `${winnerTeam.primarycolor}`;
    ma.style.backgroundColor = `${winnerTeam.secondarycolor}`;
    h1.style.transition = "all 0.5s ease-in-out";
    ma.style.transition = "all 0.5s linear-in-out";
    h1.style.color = "#fff";
});

