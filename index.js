var submitButton = document.querySelector('.submit-button');
var clearButton = document.querySelector('.clear-button');
var favoriteButton = document.querySelector('.favorite-button');
var imageBall = document.querySelector('.ball');
var textWrapper = document.querySelector('.text-wrapper');
var form = document.querySelector('.form');

var error = document.querySelector('.error');


submitButton.addEventListener('click', function() {

  var inputValue = document.querySelector('input').value;
  var questionSpot = document.querySelector('.question');
  var answerSpot = document.querySelector('.answer');
  var predictTextes = [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes - definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    "Don't count on it.",
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.'
  ];
  var randomText = predictTextes[Math.floor(Math.random()*predictTextes.length)];

  error.style.display = 'none';

  imageBall.style.display = 'none';
  textWrapper.style.display = 'block';
  questionSpot.innerText = inputValue;
  answerSpot.innerText = randomText;

  submitButton.classList.add('submit-button-disabled');
  clearButton.classList.add('clear-button-active');

  form.reset();

  submitButton.disabled = true;

  window.inputValue = inputValue;
  window.randomText = randomText;

});

clearButton.addEventListener('click', function() {

  if (imageBall.style.display == 'none') {

    imageBall.style.display = 'block';
    textWrapper.style.display = 'none';

    submitButton.classList.remove('submit-button-disabled');
    clearButton.classList.remove('clear-button-active');

    submitButton.disabled = false;

  } else {

    error.style.display = 'block';

  }

});

favoriteButton.addEventListener('click', function() {

  var parentSpot = document.querySelector('.text-wrapper');
  var favQuestionSpot = document.querySelector('.favorite-question');
  var favAnswerSpot = document.querySelector('.favorite-answer');
  var favSpot = parentSpot.querySelector('.favorite');

  var favouriteQuestions = [];
  var favouriteAnswers = [];

  favouriteQuestions.push(inputValue);
  favouriteAnswers.push(randomText);

  for (var i = 0; i < favouriteQuestions.length; i++) {

    var pQuestion = document.createElement('p');
    pQuestion.classList.add('favorite-question');
    var pAnswer = document.createElement('p');
    pAnswer.classList.add('favorite-answer');
    pQuestion.innerHTML = favouriteQuestions[i];
    pAnswer.innerHTML = favouriteAnswers[i];

    favSpot.appendChild(pQuestion);
    favSpot.appendChild(pAnswer);
  }

});
