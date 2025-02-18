AFRAME.registerComponent('btn-click', {
    init: function() {
        var el = this.el;

        el.addEventListener('click', function() {
            alert('hello AR JS!');
        })
    }
});