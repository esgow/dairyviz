/** First, initialize reveal */

Reveal.initialize({
  width: 960,
  height: 700,
  margin: 0.05,

  view: "scroll",
  //scrollLayout: "compact",
  scrollSnap: false,
  //hash: true,
  controls: true,
  progress: true,
  mouseWheel: false,
  showNotes: false,
  slideNumber: false,
  fragmentInURL: true,

  autoSlide: 0,
  autoSlideStoppable: true,

  autoAnimateMatcher: SL.deck.AutoAnimate.matcher,

  scrollActivationWidth: null,

  center: false,
  shuffle: false,
  loop: false,
  rtl: false,
  navigationMode: "default",

  transition: "slide",
  backgroundTransition: "slide",

  highlight: {
    escapeHTML: false,
  },

  plugins: [RevealZoom, RevealNotes, RevealMarkdown, RevealHighlight],
});
