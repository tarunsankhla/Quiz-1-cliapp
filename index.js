var readlinesync = require("readline-sync");
var score =0;

var Previous_HighScore =[{
  name:"Tarun",
  score:3,
},
{
  name:"Tanay",
  score:3,
}]
//Task 14 and 15
var username = readlinesync.question("May I Know your Name ?")
console.log('Hi Welocome ' + username + ' !');

var USer_city = ['Mumbai', 'Delhi', 'Bangalore', 'Chenni', 'other'],
  index = readlinesync.keyInSelect(USer_city, 'Where are you from ?');
console.log('Okay ! ' + USer_city[index]);

function ques_an(qu ,ans){
  user_Ans = readlinesync.question(qu);
  if(user_Ans.toUpperCase() == ans.toUpperCase()){
    console.log("Correct");
    score +=1;
  }else{
    console.log("InCorrect");
    score -=1;
  }
}

var answer = readlinesync.question("do you know me ?");
if(answer.toUpperCase()=="YES"){
  console.log("Okay!, then lets have quiz..about how much you know me !...");
}
else{
  console.log("Okay!, now you will be force to answer some question and make a guess about me hahahahha.....")
}

var  obj_ques = [{
  ques : "where do I live ?",
  ans : "mumbai"
},
{
  ques : "where do think I work ?",
  ans : "Capgemini"
}]

for(var i =0;  i<obj_ques.length;i++){
  ques_an(obj_ques[i].ques,obj_ques[i].ans);
}

function highscore_list(){
  console.log(username +" Your Score: "+score)
console.log(" Highest score till now ");
Previous_HighScore.map(se => console.log(se.name +" Your Score: "+se.score))
}

highscore_list()
