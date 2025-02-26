AFRAME.registerComponent('btnclick', {
    init: function () {
        this.el.sceneEl.addEventListener('click', () => {
            // redirect to custom URL
            //window.location = 'https://github.com/AR-js-org/AR.js';
            alert('test popup');
        });
    }
});