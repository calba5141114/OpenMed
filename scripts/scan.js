const converter = new showdown.Converter();
const rootDirectory = 'https://calba5141114.github.io/OpenMed/documents';
const linkList = document.querySelector('#linkList');

function formatTitle(title){
  return title.split('-')[1]
}

function spawnMarkdown(title){
   const pageData = await fetch(`${rootDirectory}/${title}`)
   const loaded = await pageData.arrayBuffer();
   let string = new TextDecoder("utf-8").decode(loaded);
   const generatedHTML =  converter.makeHtml(string);
   const opened = window.open("");
   opened.document.write(generatedHTML);
}

function makeLink(title){
return `
  <li id="${title}" class="list-group-item">
    <a href="javascript:spawnMarkdown(${title})" >  ${formatTitle(title)} </a>
  </li>
  `
}

async function getMarkdownfiles(){
  const dir  = 'https://calba5141114.github.io/OpenMed/documents/documents.json';
  const response = await fetch(dir);
  const data = await response.json();

  // for every document in the directory
  for (page of data) {
    linkList.innerHTML += makeLink(page.title)
  }

}


if(window.File && window.FileReader && window.FileList && window.Blob){
  getMarkdownfiles();
}
else {
  alert('The File APIs are not fully supported in this browser.');
}

// https://calba5141114.github.io/OpenMed/documents/contribution-test.md
