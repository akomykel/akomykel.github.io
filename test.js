AFRAME.registerComponent('markerhandler', {
    init: function () {
        this.el.sceneEl.addEventListener('markerFound', () => {
            // redirect to custom URL
            //window.location = 'https://github.com/AR-js-org/AR.js';
            alert('hello ar');
            var et = document.querySelector('#refresh-button');
            et.addEventListener('click', function() {
                alert('button clicked!');
            })
        });
    }
});