const converter = new showdown.Converter();
const rootDirectory = 'https://calba5141114.github.io/OpenMed/documents'

function formatTitle(title){
  return title.split('-')[1]
}

// closed for testing
// async function getMarkdownfiles(){
//   const dir  = 'https://calba5141114.github.io/OpenMed/documents/documents.json';
//   const response = await fetch(dir);
//   const data = await response.json();
//
//   // for every document in the directory
//   for (page of data) {
//     // fetching markdown document
//     const pageData = await fetch(`${rootDirectory}/${page.title}`)
//     // converting page data to an arrayBuffer
//     const loaded = await pageData.arrayBuffer()
//     // converting arrayBuffer to string
//     var string = new TextDecoder("utf-8").decode(loaded);
//     // converting markdown document our string to html
//     const generatedHTML =  converter.makeHtml(string);
//     // opening newly generatedHTML
//     const opened = window.open("");
//     opened.document.write(generatedHTML);
//   }
//
// }
//
//
//
// if(window.File && window.FileReader && window.FileList && window.Blob){
//   getMarkdownfiles();
// }
// else {
//   alert('The File APIs are not fully supported in this browser.');
// }

// https://calba5141114.github.io/OpenMed/documents/contribution-test.md
