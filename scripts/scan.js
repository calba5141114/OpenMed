const converter = new showdown.Converter();
const root = 'https://calba5141114.github.io/OpenMed/documents';
const links = document.querySelector('#linkList');

const fmt = title => {
  return title.split('-')[1]
}

/**
 * 
 * @param {*} title - File to be decoded. 
 */
async function spawnMarkdown(title) {
  /**
   * Fetches and Decodes Markdown from documents directory of project.
   */
  const loaded = await(await fetch(`${root}/${title}`)).arrayBuffer();
  let string = new TextDecoder("utf-8").decode(loaded);
  /**
   * Evaluates markdown to HTML and opens it as a pop up on our App.
   */
  const generatedHTML = converter.makeHtml(string);
  window.open("").document.write(generatedHTML);
}

/**
 * Fetches markdown documents information from directories on github
 */
async function getMarkdownfiles() {
  /**
   * Fetching and parsing data from documents.json file 
   * our serverless backend
   */
  const dir = 'https://calba5141114.github.io/OpenMed/documents/documents.json';
  const data = await (await fetch(dir)).json();

  /**
   * Generate a link for every object in the Markdown File Directory
   */
  data.map(page => {
    links.innerHTML += `
    <li id="${page.title}" class="list-group-item">
      <a href="javascript:spawnMarkdown('${page.title}')" >  ${fmt(page.title)} </a>
    </li>
    `
  });

}


if (window.File && window.FileReader && window.FileList && window.Blob) {
  getMarkdownfiles();
} else {
  alert('The File APIs are not fully supported in this browser.');
  throw (new Error("File APIs are not fully supported in this browser."))
}