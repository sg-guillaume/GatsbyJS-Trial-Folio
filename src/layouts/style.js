const init = function() {
  let cards = Array.from(document.getElementsByTagName('section'));

  cards.forEach( function(card) {
  	card.addEventListener( 'click', function() {

  		let classElt = this.getAttribute('class');

    	if (classElt === 'flipped') {
				this.removeAttribute('class');
			} else {
				this.setAttribute('class', 'flipped');
			}

  	});
  });
};

window.addEventListener('DOMContentLoaded', init, false);