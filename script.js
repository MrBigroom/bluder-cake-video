AFRAME.registerComponent('screenhandler', {
  init: function() {
      console.log("In Init for Screen Handler");

      var el = this.el;
      el.addEventListener('click', function() {
          el.setAttribute("material", "src", "#bluder-cake");

          var videoEl = document.querySelector("#bluder-cake");
          el.setAttribute("visible", true);

          console.log("Playing video");
          videoEl.play();
      });
  }
});

AFRAME.registerComponent('play-on-click', {
  init: function() {
      this.onClick = this.onClick.bind(this);
  },
  play: function() {
      window.addEventListener('click', this.onClick);
  },
  pause: function() {
      window.removeEventListener('click', this.onClick);
  },
  onClick: function(evt) {
      var video = this.el.components.material.material.map.image;
      if(!video) {
          return;
      }
      video.play();
  }
});