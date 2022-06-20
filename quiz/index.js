var quizdata=[
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
]

var quiz = document.getElementById('quizbody');
var answer = document.querySelectorAll('ans');
var question = document.getElementById('que');

var options = [];
for(var ch = 0;ch<4;ch++){
    var cc = String.fromCharCode(97+ch);
    // console.log(cc+'_value');
    options.push(document.getElementById(`${cc}_value`));
}

var submit_btn = document.getElementById('submit');