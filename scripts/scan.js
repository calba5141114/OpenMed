const converter = new showdown.Converter();
const rootDirectory = 'https://calba5141114.github.io/OpenMed/documents'

async function getMarkdownfiles(){
  const dir  = 'https://calba5141114.github.io/OpenMed/documents/documents.json';
  const response = await fetch(dir);
  const data = await response.json();

  // for every document in the directory
  for (page of data) {
    // fetching markdown document
    const pageData = await fetch(`${rootDirectory}/${page.title}`)
    // converting page data to an arrayBuffer
    const loaded = await pageData.arrayBuffer()
    var string = new TextDecoder("utf-8").decode(loaded);
    const generatedHTML =  converter.makeHtml(string);
    console.log(generatedHTML);
  }

}



if(window.File && window.FileReader && window.FileList && window.Blob){
  getMarkdownfiles();
}
else {
  alert('The File APIs are not fully supported in this browser.');
}

// https://calba5141114.github.io/OpenMed/documents/contribution-test.md
