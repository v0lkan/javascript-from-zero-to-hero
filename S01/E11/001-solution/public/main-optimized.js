/*
 *  \
 *  \\,
 *   \\\,^,.,,.                    “Zero to Hero”
 *   ,;7~((\))`;;,,               <zerotohero.dev>
 *   ,(@') ;)`))\;;',    stay up to date, be curious: learn
 *    )  . ),((  ))\;,
 *   /;`,,/7),)) )) )\,,
 *  (& )`   (,((,((;( ))\,
 */

const textEditor = document.querySelector(".text-editor");
const preview = document.querySelector(".preview");
const converter = new showdown.Converter();

// Stores the converted HTML of the markdown text.
let html = "";

// Timer ids.
let id;
let tid;

/**
 *  Update the preview area from the cached `html` value
 *  on the next available animation frame.
 */
const renderPreview = () => {
  window.cancelAnimationFrame(id);
  id = window.requestAnimationFrame(() => {
    preview.innerHTML = html;
  });
};

textEditor.addEventListener("keyup", (evt) => {
  const { value } = evt.target;

  // Debounce the update of the preview area if the user is typing.
  // The update will wait at least half a second after the user
  // types his last key.
  //
  // We can also make it a generalize function instead of inlining here
  // (see the lesson notes for that).
  clearTimeout(tid);
  tid = setTimeout(() => {
    html = converter.makeHtml(value);
    window.localStorage.setItem("markdown", value);
    renderPreview();
  }, 500);
});

const storedMarkdown = window.localStorage.getItem("markdown");

if (storedMarkdown) {
  textEditor.value = storedMarkdown;
  renderPreview();
} else {
  renderPreview();
}
