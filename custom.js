/** First, initialize reveal */

const initialized = Reveal.initialize({
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
  autoplayMedia: true,
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

initialized.then(() => {
  const abstractDialog = document.querySelector("dialog.abstract");
  const abstractBtn = document.querySelectorAll("button.abstract");
  const referencesDialog = document.querySelector("dialog.references");
  const referencesBtn = document.querySelectorAll("button.references");
  const essayDialog = document.querySelector("dialog.essay");
  const essayBtn = document.querySelectorAll("button.essay");

  const showModal = window.sessionStorage.getItem("dairy-viz-modal") || "true";
  if (showModal === "true") {
    abstractDialog.showModal();
  }
  abstractBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      abstractDialog.showModal();
    });
  });
  referencesBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      referencesDialog.showModal();
    });
  });
  essayBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      essayDialog.showModal();
    });
  });
  abstractDialog.addEventListener("close", () => {
    window.sessionStorage.setItem("dairy-viz-modal", "false");
  });
});
