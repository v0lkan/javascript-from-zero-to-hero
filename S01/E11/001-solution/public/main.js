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

const converter = new window.showdown.Converter();

const renderPreview = (value) => {
  const html = converter.makeHtml(value);
  preview.innerHTML = html;
};

textEditor.addEventListener("keyup", (evt) => {
  const { value } = evt.target;

  window.localStorage.setItem("markdown", value);

  renderPreview(value);
});

const storedMarkdown = window.localStorage.getItem("markdown");

if (storedMarkdown) {
  textEditor.value = storedMarkdown;
  renderPreview(storedMarkdown);
} else {
  renderPreview(textEditor.value);
}
