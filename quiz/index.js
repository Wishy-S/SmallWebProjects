const quizdata=[
    {
        question:'Which framework is related to JS?',
        a:'.net',
        b:'flask',
        c:'react',
        d:'django',
        correct : 'c'
    },
    {
        question:'Which is not a programming language?',
        a:'HTML',
        b:'python',
        c:'C++',
        d:'JS',
        correct : 'a'
    },
    {
        question:'Which is not a framework?',
        a:'react',
        b:'javascript',
        c:'angular',
        d:'django',
        correct : 'b'
    },
    {
        question:'CSS stands for ?',
        a:'Cascading Style State',
        b:'Cascading Style Sheet',
        c:'Cascading Sheet of Style',
        d:'none',
        correct : 'b'
    }
];

let quiz = document.getElementById('quizbody');
let answer = document.querySelectorAll('.ans');
let question = document.getElementById('que');

var options = [];
for(var ch = 0;ch<4;ch++){
    var cc = String.fromCharCode(97+ch);
    // console.log(cc+'_value');
    options.push(document.getElementById(`${cc}_value`));
}

let submit_btn = document.getElementById('submit');

let currentQuestion = 0;
let quiz_score = 0;


loadquiz();


function loadquiz(){
    
    deselect();
    
    question.innerHTML = quizdata[currentQuestion].question;
    let ch = 97;
    options
    .forEach(option => 
        option.innerHTML = quizdata[currentQuestion][String.fromCharCode(ch++)]);
}
function deselect(){
    answer.forEach(answer=>answer.checked=false);
}
submit_btn.addEventListener('click',()=>{
    answer.forEach(_answer=>
        {
            if(_answer.checked===true && _answer.id===quizdata[currentQuestion].correct){
                ++quiz_score;
            }
    }
    );
    ++currentQuestion;
    
    if(currentQuestion === quizdata.length){
        document.getElementById('quizbody').innerHTML = `<h1 class='lastone'>You have scored ${quiz_score}/${quizdata.length}</h1>`;
    }else{
        loadquiz();
    }
})