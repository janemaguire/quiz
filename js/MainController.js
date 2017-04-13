angular.module('quizApp')
  .controller('MainController', MainController);

function MainController() {
  this.title = 'Quiz';
  this.image = 'http://www.glospride.org.uk/quiz-nights/files/quiz.jpg';
}
