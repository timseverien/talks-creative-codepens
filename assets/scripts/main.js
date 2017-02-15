Reveal.initialize({
  controls: false,

  dependencies: [{
    src: 'plugin/notes/notes.js',
    async: true,
    condition: function () {
      return !!document.body.classList;
    }
  }],
});
