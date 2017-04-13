angular.module('AngularArtApp')
  .controller('GeneralController', GeneralController);

function GeneralController() {
  this.items = [
    { 'day': 'Monday', 'hours': '10:00am - 5:30pm'},
    { 'day': 'Tuesday', 'hours': '10:00am - 5:30pm'},
    { 'day': 'Wednesday', 'hours': '10:00am - 5:30pm'},
    { 'day': 'Thursday', 'hours': '10:00am - 5:30pm'},
    { 'day': 'Friday', 'hours': '10:00am - 9:00pm'},
    { 'day': 'Saturday', 'hours': '10:00am - 9:00pm'},
    { 'day': 'Sunday', 'hours': '10:00am - 5:30pm'}
  ];
}
