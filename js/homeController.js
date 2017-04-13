angular.module('AngularArtApp')
  .controller('HomeController', HomeController);

function HomeController() {
  this.title = 'The Metropolitan Museum of Art';
  this.exhib = 'Exhibit:';
  this.person = {
    painting: 'Sargent Portraits of Artist and Friends',
    artist: 'By John Sargent'
  },
  this.image = 'http://i.imgur.com/2BEV7Tc.jpg/{{hash}}';
}

// function ArtistController() {
//   this.person = {
//     painting: 'Sargent Portraits of Artist and Friends',
//     artist: 'By John Sargent'
//   }
// }
