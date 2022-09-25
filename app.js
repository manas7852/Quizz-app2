
// To show the Cndidate's Name
function person () {
    let name = document.getElementById("inputbox").value
    document.getElementById("person").innerHTML = "Hello " + name + "  Your Score Card is Here"
}

// Timer Code Start

let totalTime = 600;
let min = 0;
let sec = 0;
let counter = 0;
let timer = setInterval (function() {
    counter++;
    min = Math.floor((totalTime-counter)/60);
    sec = totalTime - min * 60 -counter;
    document.getElementById("timerbox").innerHTML ="Time Left " + min + ":" + sec;
    document.getElementById("timerbox1").innerHTML ="Time Left " + min + ":" + sec; 
    document.getElementById("timerbox2").innerHTML ="Time Left " + min + ":" + sec; 
    document.getElementById("timerbox3").innerHTML ="Time Left " + min + ":" + sec;
    if (counter == totalTime) {
        clearInterval(timer)
    }
    
},1000)
// To Show The Pipes And Cistern Question Section
function pipes () {
    document.querySelector('#section2').style.display = 'block'
    document.querySelector('#section1').style.display = 'none'
}

// PIPES AND CISTERN QUESTION
const pipes_cistern = [
    {
        Question :"Q1. Pipes A and B can fill a tank in 5 and 6 hours respectively.Pipe C can can empty it in 12 hours.If all the three pipes are opened together,then the tank will be filled in :",
        A : "30/17 hours",
        B : "30/11 hours",
        C : "60/17 hours",
        D : "9/2 hours",
        ans : "ans3"
    },
    {
        Question : "Q2. A pump can fill a tank with water in 2 hours.Because of a leak, it took 7/3 hours to fill the tank.The leak can drain all the water of the tank in:",
        A : "13/3 hours",
        B : "7 hours",
        C : "8 hours",
        D : "14 hours",
        ans : "ans4"  
    },
    {
        Question : "Q3. Two pipes A and B can fill a cistern in 75/2 minutes and 45 minutes respectively.Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after:",
        A : "5 min.",
        B : "9 min.",
        C : "10 min.",
        D : "15 min.",
        ans : "ans2" 
    },
    {
        Question : "Q4. Two pipes can fill a tank in 20 and 24 minutes respectively and a waste pipe can empty 3 gallons per minute. All the three pipes working together can fill the tank in 15 minutes. The capacity of the tank is:",
        A : "60 gallons",
        B : "100 gallons",
        C : "120 gallons",
        D : "180 gallons",
        ans : "ans3"
    },
    {
        Question : "Q5. A tank is filled in 5 hours by three pipes A, B and C. The pipe C is twice as fast as B and B is twice as fast as A.How much time will pipe A alone take to fill the tank?",
        A : "20 hours",
        B : "25 hours",
        C : "35 hours",
        D : "Cannot be determined",
        ans : "ans3"
    },
    {
        Question : "Q6.Two pipes A and B can fill a tank in 20 and 30 minutes respectively.If both the pipes are used together, then how long will it take to fill the tank?",
        A : "12 min", 
        B : "15 min",
        C : "25 min",
        D : "50 min",
        ans : "ans1"
    },
    {
        Question : "Q7.Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively.Both the pipes are opened together butafter 4 minutes, pipe A is turned off. What is the total time required to fill the tank?",
        A : "10 min. 20 sec.",
        B : "11 min. 45 sec.",
        C : "12 min. 30 sec.",
        D : "14 min. 40 sec.",
        ans : "ans4"
    },
    {
        Question : "Q8.One Pipe can fill a tank three times as fast as another pipe.If together the two pipes can fill the tank in 36 minutes,then the slower pipe alone will be able to fill the tank in:",
        A : "81 min.",
        B : "108 min.",
        C : "144 min.",
        D : "192 min.",
        ans : "ans3"
    },
    {
        Question : "Q9. A large tanker can be filled by two pipes A and B in 60  minutes and 40 minutes respectively. How many minutes will it take to fill the tanker from empty state if B is used for half the time and A and B fill it together for the other half?" ,
        A : "15 min",
        B : "20 min",
        C : "27.5 min",
        D : "30 min",
        ans : "ans4"
    },
    {
        Question : "Q10. A tap can  fill a tank in 6 hours. After half the tank is filled, three more similar taps are opened. What is the total time taken to fill the tank completely?",
        A : "3 hrs 15 min",
        B : "3 hrs 45 min",
        C : "4 hrs",
        D : "4 hrs 15 min",
        ans : "ans2"
    }
];
// To get Reference from Question and Options 

 let question = document.querySelector('.question');
 const option1 = document.querySelector('#option1');
 const option2 = document.querySelector('#option2');
 const option3 = document.querySelector('#option3');
 const option4 = document.querySelector('#option4');
 const next = document.querySelector('#next');
 const submit = document.querySelector('#submit');
 let answers = document.querySelectorAll('.answer')
 let showScore = document.querySelector('#result');
 let scorebox = document.querySelector('#scorebox')
 let questionCount = 0;
 let score = 0 ;
 let wrong = 0;
 let attempt = 0;
 let correct = 0;
 let totalnquestion = pipes_cistern.length
 // To Load the Question And Options Dynamically
 const loadQuestion = () => {
    const questionList = pipes_cistern[questionCount];
    question.innerHTML = questionList.Question;
    option1.innerHTML  = questionList.A;
    option2.innerHTML  = questionList.B;
    option3.innerHTML  = questionList.C;
    option4.innerHTML  = questionList.D;
 }

 loadQuestion();  
//  To get the id of that option whichh is user Select
 const getCheckedAnswer = () => {
     let answer;
    answers.forEach((curAnsElm) => {
       if(curAnsElm.checked){
           answer = curAnsElm.id
       }  
    });
     return answer;
 };
 // To remove previous checkmark in options
 const deSelectAll = () => {
    answers.forEach((curAnsElm) => curAnsElm.checked = false );
 };
// To Compare the answer id of the Question to the User select ooption
 submit.addEventListener('click',() => {
       document.querySelector('#next').style.display = 'block'
       const checkedAnswer = getCheckedAnswer();
       console.log(checkedAnswer)
       if (checkedAnswer == pipes_cistern[questionCount].ans) {
           score ++;
           attempt ++;
       } else {
           wrong++;
           attempt++
       }  
       document.getElementById("scorebox").innerHTML = "Score " + ":" +score ;    
 });

//  To Load  the Next Question when clicked the next button
 next.addEventListener('click',() => {
    deSelectAll();
    document.querySelector('#next').style.display = 'none'
     questionCount++;
     if(questionCount < pipes_cistern.length){
        loadQuestion();
     }
 });
//  To Show The  Result
 function result() {
    document.querySelector('#section3').style.display = 'block'
    document.querySelector('#section1').style.display = 'none'
    document.querySelector('#section2').style.display = 'none'
    document.querySelector('#section4').style.display = 'none'
    document.getElementById("totalQuestion").innerHTML = totalnquestion;
    document.getElementById("attemptQuestion").innerHTML = attempt;
    document.getElementById("correctAnswer").innerHTML = score;
    document.getElementById("wrongAnswer").innerHTML = wrong;
    document.getElementById("scorepercentage").innerHTML = (score / 10) * 100;

 }

 // Probability part start
 function probbaility_que () {
     document.querySelector('#section2').style.display = 'none';    
     document.querySelector('#section1').style.display = 'none';
     document.querySelector('#section3').style.display = 'none';
     document.querySelector('#section4').style.display = 'block';
 }

 // PROBABILITY QUESTION START

 const probability = [
     {
        Question : "Q1. Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random.What is the probability that the ticket drawn has a number which is a multiple of 3 or 5?",
        A : "1/2",
        B : "2/5",
        C : "8/15",
        D : "9/20",
        ans : "ansA"
     },
     {
        Question : "Q2. A bag Contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random What is the probability that none of the balls drawn is blue?",
        A : "10/21",
        B : "11/21",
        C : "2/7",
        D : "5/7",
        ans : "ansA"
     },
     {
         Question : "Q3. In a box  there are 8 red, 7 blue and 6 green balls.One ball is picked up randomly. What is the probability that it is neither red nor green?",
         A : "1/3",
         B : "3/4",
         C : "7/19",
         D : "9/21",
         ans : "ansA"
     },
     {
         Question : "Q4. What is the probability of getting a sum 9 from two throws of a dice?",
         A : "1/6",
         B : "1/8",
         C : "1/9",
         D : "1/12",
         ans : "ansC"
     },
     {
        Question : "Q5. Three unbiased coins are tossed. What is the probability of getting at most two heads?",
        A : "3/4",
        B : "1/4",
        C : "3/8",
        D : "7/8",
        ans : "ansD"
     },
     {
        Question : "Q6. Two dice are thrown simultaneously.What is the probability of getting two numbers whose product is even?",
        A : "1/2",
        B : "3/4",
        C : "3/8",
        D : "5/16",
        ans : "ansB"
     },
     {
         Question : "Q7.In a class there are 15 boys and 10 girls.Three students are selected at random. The probability that 1 girl and 2 boys are selected, is:",
         A : "21/46",
         B : "25/117",
         C : "1/50",
         D : "3/25",
         ans : "ansA"
     },
     {
         Question : "Q8. In a Loterry  there are 10 prizes and 25 blanks. A lottery is drawn at random. What is the probability of getting a prize ?",
         A : "21/46",
         B : "25/117",
         C : "1/50",
         D : "3/25",
         ans : "ansA"
     },
     {
        Question : "Q9.From a pack of 52 cards, two cards are drawn together at random. What is the probability of both the cards being king ?",
        A : "1/15",
        B : "25/57",
        C : "35/256",
        D : "1/221",
        ans : "ansD" 
     },
     {
         Question : "Q10.Two dice are tossed. The probability that the total score is a prime number is:",
         A : "1/6",
         B : "5/12",
         C : "1/2",
         D : "7/9",
         ans : "ansB"
     }
 ]
 // To get Reference from Question and Option  of probability Question
    let question1 = document.querySelector('.question1');
    const optionA = document.querySelector('#optionA');
    const optionB = document.querySelector('#optionB');
    const optionC = document.querySelector('#optionC');
    const optionD = document.querySelector('#optionD');
    const next1 = document.querySelector('#next1');
    const submit1 = document.querySelector('#submit1');
    let answers1 = document.querySelectorAll('.answer1')
    let showScore1 = document.querySelector('#result1');
    let scorebox1 = document.querySelector('#scorebox1');
    let questionCount1 = 0;
    let score1 = 0 ;
    let wrong1 = 0;
    let attempt1 = 0;
    let correct1 = 0;
    let totalnquestion1 = probability.length;
    // To Load the Qquestion
    const loadQuestion1 = () => {
       const questionList1 = probability[questionCount1];
       question1.innerHTML = questionList1.Question;
       optionA.innerHTML  = questionList1.A;
       optionB.innerHTML  = questionList1.B;
       optionC.innerHTML  = questionList1.C;
       optionD.innerHTML  = questionList1.D;
    }
    loadQuestion1();  
   // To check the id of that question which is user select
    const getCheckedAnswer1 = () => {
     let answer1;
    answers1.forEach((curAnsElm) => {
       if(curAnsElm.checked){
           answer1 = curAnsElm.id
       }  
    });
     return answer1;
  };
  // To remove previous checkmark in options
 const deSelectAll1 = () => {
    answers1.forEach((curAnsElm) => curAnsElm.checked = false );
  };
  // To Compare the answer id of the Question to the User select ooption
  submit1.addEventListener('click',() => {
    document.querySelector('#next1').style.display = 'block'
    const checkedAnswer1 = getCheckedAnswer1();
    console.log(checkedAnswer1)
    if (checkedAnswer1 == probability[questionCount1].ans) {
        score1 ++;
        attempt1++
    } else {
        wrong1 ++;
        attempt1++
    }  
    document.getElementById("scorebox1").innerHTML = "Score " + ":" +score1  
});
// To load the next question when clicked the next button
next1.addEventListener('click',() => {
    deSelectAll1()
    document.querySelector('#next1').style.display = 'none'
    questionCount1++;
    if(questionCount < probability.length){
       loadQuestion1();
    }
});
// To Show the result of the Cndidate
function result1() {
    document.querySelector('#section3').style.display = 'block'
    document.querySelector('#section1').style.display = 'none'
    document.querySelector('#section2').style.display = 'none'
    document.querySelector('#section4').style.display = 'none'
    document.getElementById("totalQuestion").innerHTML = totalnquestion1;
    document.getElementById("attemptQuestion").innerHTML = attempt1;
    document.getElementById("correctAnswer").innerHTML = score1;
    document.getElementById("wrongAnswer").innerHTML = wrong1;
    document.getElementById("scorepercentage").innerHTML = (score1 / 10) * 100;

 }
//Code For Age Question Category

 function age_que () {
    document.querySelector('#section2').style.display = 'none';    
   document.querySelector('#section1').style.display = 'none';
    document.querySelector('#section3').style.display = 'none';
    document.querySelector('#section4').style.display = 'none';
    document.querySelector('#section5').style.display = 'block';
}
 // oQuestion Of Age
 const age_question = [
     {
         Question : "Q1.Father is age three times more than his son Ronit. After 8 years he would be two and a half times of Ronit's age. After further 8 years, how many times would he be of Ronit's age?",
         A : "2 times",
         B : "4 times",
         C : "6 times",
         D : "8 times",
         ans : "ansE"
     },
     {
         Question : "Q2.The sum of ages of 5 children born at the intervals of 3 years each is 50 years.What is the age of the youngest child?",
         A : "4 years",
         B : "8 years",
         C : "10 years",
         D : "Non of these",
         ans : "ansE"
     },
     {
        Question : "Q3.A father said to his son,I was as old as you are at the present at the time of your birth If the father's age is 38 years now, the son's age five years back was:",
         A : "14 years",
         B : "19 yers",
         C : "33 years",
         D : "38 years",
         ans : "ansE"
     },
     {
         Question : "Q4.A is two  years older than B who is twice as old as C.If the total of the ages of A, B and C be 27, then how old is B?",
         A : "7",
         B : "8",
         C : "9",
         D : "10",
         ans : "ansH"
     },
     {
        Question : "Q5.Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?",
        A : "24",
        B : "27",
        C : "40",
        D : "Non of thses",
        ans : "ansE"
     },
     {
        Question : "Q6.A man is 24 years older than his son. In two years,his age will be twice the age of his son.The present age of his son is:",
        A : "14",
        B : "18",
        C : "20",
        D : "22",
        ans : "ansH"  
     },
     {
        Question : "Q7.Six years ago, the ratio of the ages of Kunal and Sagar was 6 : 5.Four years hence, the ratio of their ages will be 11: 10. What is Sagar's age at present?",
        A : "16",
        B : "18",
        C : "20",
        D : "30",
        ans : "ansE"
     },
     {
        Question : "Q8.The sum of the present ages of a father and his son is 60 years.Six years ago, father's age was five times the age of the son. After 6 years, son's age will be:",
        A : "12",
        B : "14",
        C : "18",
        D : "20",
        ans : "ansH" 
     },
     {
        Question : "Q9.At Present the ratio between the ages of Arun and Deepak is 4 : 3.After 6 years, Arun's age will be 26 years. What is the age of Deepak at present ?",
        A : "12",
        B : "15",
        C : "19",
        D : "21",
        ans : "ansF" 
     },
     {
        Question : "Q10.Sachin is younger than Rahul by 7 years.If their ages are in the respective ratio of 7 : 9, how old is Sachin?",
        A : "16",
        B : "18",
        C : "128",
        D : "24.5",
        ans : "ansH"
     }
 ]
 // To get Reference from Question and Option  of Age  Question
 let question2 = document.querySelector('.question2');
 let optionE = document.querySelector('#optionE');
 let optionF = document.querySelector('#optionF');
 let optionG = document.querySelector('#optionG') ;
 let optionH = document.querySelector('#optionH');
 const next2 = document.querySelector('#next2');
 const submit2 = document.querySelector('#submit2');
 let answers2 = document.querySelectorAll('.answer2')
 let showScore2 = document.querySelector('#result2');
 let scorebox2 = document.querySelector('#scorebox2');
 let questionCount2 = 0;
 let score2 = 0 ;
 let wrong2 = 0;
 let attempt2 = 0;
 let correct2 = 0;
 let totalQuestion2 = age_question.length;
 //Function For the Load Question
 const loadQuestion2 = () =>{
     const questionList2 = age_question[questionCount2];
     question2.innerHTML = questionList2.Question;
     optionE.innerHTML = questionList2.A;
     optionF.innerHTML = questionList2.B;
     optionG.innerHTML = questionList2.C;
     optionH.innerHTML = questionList2.D;
 }
 loadQuestion2();
// To check the id of that question which is user select
 const getCheckedAnswer2 = () => {
  let answer2;
 answers2.forEach((curAnsElm) => {
    if(curAnsElm.checked){
        answer2 = curAnsElm.id
    }  
 });
  return answer2;
};
// To remove previous checkmark in options

 const deSelectAll2 = () => {
    answers2.forEach((curAnsElm) => curAnsElm.checked = false );
  };

// To Compare the answer id of the Question to the User select ooption

submit2.addEventListener('click',() => {
    document.querySelector('#next2').style.display = 'block'
    const checkedAnswer2 = getCheckedAnswer2();
    console.log(checkedAnswer2)
    if (checkedAnswer2 == age_question[questionCount2].ans) {
        score2 ++;
        attempt2++
    } else {
        wrong2 ++;
        attempt2++
    }  
    document.getElementById("scorebox2").innerHTML = "Score " + ":" +score2 
});
// To Load Next Question When User Clicked The Next Button
next2.addEventListener('click',() => {
    deSelectAll2();
    document.querySelector('#next2').style.display = 'none'
    questionCount2++;
    if(questionCount2 < age_question.length){
       loadQuestion2();
    }
});
// To Show the Result Of the Owner
function result2() {
    document.querySelector('#section3').style.display = 'block'
    document.querySelector('#section1').style.display = 'none'
    document.querySelector('#section2').style.display = 'none'
    document.querySelector('#section5').style.display = 'none'
    document.querySelector('#section4').style.display = 'none'
    document.getElementById("totalQuestion").innerHTML = totalQuestion2;
    document.getElementById("attemptQuestion").innerHTML = attempt2;
    document.getElementById("correctAnswer").innerHTML = score2;
    document.getElementById("wrongAnswer").innerHTML = wrong2;
    document.getElementById("scorepercentage").innerHTML = (score2 / 10) * 100;
 }


// PROFIT AND LOSS SECTION
 function profit_loss_que () {
    document.querySelector('#section2').style.display = 'none';    
    document.querySelector('#section1').style.display = 'none';
    document.querySelector('#section3').style.display = 'none';
    document.querySelector('#section4').style.display = 'none';
    document.querySelector('#section5').style.display = 'none';
    document.querySelector('#section6').style.display = 'block';
}
// PROFIT AND LOSS QUESTION
 const profit_loss = [
     {
         Question : "Q1.Alfraid buys an old scooter for Rs. 4700 and spends Rs. 800 on its repairs.If he sells the scooter for Rs. 5800, his gain percent is:",
         I : "32/7%",
         J : "60/5%",
         K : "10%",
         L : "12%",
         ans : "ansJ"
     },
     {
         Question : "Q2.The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
         I : "15",
         J : "16",
         K : "18",
         L : "25",
         ans : "ansK"
     },
     {
         Question : "Q3.If selling price is doubled, the profit triples. Find the profit percent",
         I : "200/3",
         J : "100",
         K : "316/3",
         L : "120",
         ans : "ansK"
     },
     {
         Question : "Q4.In a certain store the profit is 320% of the cost.If the cost increases by 25% but the selling price remains constant,approximately what percentage of the selling price is the profit?",
         I : "30%",
         J : "70%",
         K : "100%",
         L : "250%",
         ans : "ansJ"
     },
     {
         Question : "Q5.A Vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
         I : "3",
         J : "4",
         K : "5",
         L : "6",
         ans : "ansK"
     },
     {
         Question : "Q6.A shopkeeper expects a gain of 22.5% on his cost price.If in a week, his sale was of Rs. 392, what was his profit?",
         I : "Rs. 18.20",
         J : "Rs. 70",
         K : "Rs. 72",
         L : "Rs. 88.5",
         ans : "ansK"
     },
     {
         Question : "Q7.Sam purchased 20 dozens of toys at the rate of Rs. 375 per dozen.He sold each one of them at the rate of Rs. 33,What was his percentage profit?",
         I : "3.5",
         J : "4.5",
         K : "5.6",
         L : "6.5",
         ans : "ansK"
     },
     {
         Question : "Q8.Some articles were bought at 6 articles for Rs. 5 and sold at 5 articles for Rs. 6. Gain percent is:",
         I : "30%",
         J : "100/3%",
         K : "35%",
         L : "44%",
         ans : "ansL" 
     },
     {
         Question : "Q9.On selling 17 balls at Rs. 720, there is a loss equal to the cost price of 5 balls. The cost price of a ball is:",
         I : "Rs 45",
         J : "Rs 50",
         K : "Rs 55",
         L : "Rs 60",
         ans : "ansL"
     },
     {
         Question : "Q10.when a  plot is sold for Rs. 18,700, the owner loses 15%. At what price must that plot be sold in order to gain 15%?",
         I : "Rs. 21,000",
         J : "Rs 22,500",
         K : "Rs 25,300",
         L : "Rs 25,800",
         ans : "ansK"
     }
 ]
 // To get Reference from Question and Option  of Age  Question and Others
 let question3 = document.querySelector('.question3');
 let optionI = document.querySelector('#optionI');
 let optionJ = document.querySelector('#optionJ');
 let optionK = document.querySelector('#optionK') ;
 let optionL = document.querySelector('#optionL');
 const next3 = document.querySelector('#next3');
 const submit3 = document.querySelector('#submit3');
 let answers3 = document.querySelectorAll('.answer3')
 let showScore3 = document.querySelector('#result3');
 let scorebox3 = document.querySelector('#scorebox3');
 let questionCount3 = 0;
 let score3 = 0 ;
 let wrong3 = 0;
 let attempt3 = 0;
 let correct3 = 0;
 let totalQuestion3 = profit_loss.length;

 // To Load the Profit And Loss Question

 const loadQuestion3 = () =>{
    const questionList3 = profit_loss[questionCount3];
    question3.innerHTML = questionList3.Question;
    optionI.innerHTML = questionList3.I;
    optionJ.innerHTML = questionList3.J;
    optionK.innerHTML = questionList3.K;
    optionL.innerHTML = questionList3.L;
}
loadQuestion3();
// To check the id of that question which is user select
const getCheckedAnswer3 = () => {
    let answer3;
   answers3.forEach((curAnsElm) => {
      if(curAnsElm.checked){
          answer3 = curAnsElm.id
      }  
   });
    return answer3;
  };
  // To remove previous checkmark in options

 const deSelectAll3 = () => {
      answers3.forEach((curAnsElm) => curAnsElm.checked = false );
   };
  // To Compare the answer id of the Question to the User select ooption

 submit3.addEventListener('click',() => {
    document.querySelector('#next3').style.display = 'block'
    const checkedAnswer3 = getCheckedAnswer3();
    console.log(checkedAnswer3)
    if (checkedAnswer3 == profit_loss[questionCount3].ans) {
        score3 ++;
        attempt3++
    } else {
        wrong3 ++;
        attempt3++
    }  
    document.getElementById("scorebox3").innerHTML = "Score " + ":" +score3 
 });
 // To Load The Next Question When User Clicked The Next Button
next3.addEventListener('click',() => {
    deSelectAll3();
    document.querySelector('#next3y').style.display = 'none'
    questionCount3++;
    if(questionCount3 < profit_loss.length){
       loadQuestion3();
    }
 });
 // To Show The Result of the User1
 function result3() {
    document.querySelector('#section3').style.display = 'block'
    document.querySelector('#section1').style.display = 'none'
    document.querySelector('#section2').style.display = 'none'
    document.querySelector('#section5').style.display = 'none'
    document.querySelector('#section4').style.display = 'none'
    document.querySelector('#section6').style.display = 'none'
    document.getElementById("totalQuestion").innerHTML = totalQuestion3;
    document.getElementById("attemptQuestion").innerHTML = attempt3;
    document.getElementById("correctAnswer").innerHTML = score3;
    document.getElementById("wrongAnswer").innerHTML = wrong3;
    document.getElementById("scorepercentage").innerHTML = (score3 / 10) * 100;
 }

