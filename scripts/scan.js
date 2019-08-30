const converter = new showdown.Converter();
const root = 'https://calba5141114.github.io/OpenMed/documents';
const links = document.querySelector('#linkList');

const fmt = title => {
  return title.split('-')[1]
}

async function spawnMarkdown(title) {
  const loaded = await(await fetch(`${root}/${title}`)).arrayBuffer();
  let string = new TextDecoder("utf-8").decode(loaded);
  const generatedHTML = converter.makeHtml(string);
  window.open("").document.write(generatedHTML);
}

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