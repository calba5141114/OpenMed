const converter = new showdown.Converter();
const rootDirectory = 'https://calba5141114.github.io/OpenMed/documents'

async function getMarkdownfiles(){
  const dir  = 'https://calba5141114.github.io/OpenMed/documents/documents.json';
  const response = await fetch(dir);
  const data = await response.json();

  for (page of data) {
    const pageData = await fetch(`${rootDirectory}/${page.title}`)
    console.log(`${rootDirectory}/${page.title}`);
    const loaded = await pageData.arrayBuffer()
    console.log(loaded);
    // var string = new TextDecoder("utf-8").decode(loaded);
    // console.log(string);
  }

}



if(window.File && window.FileReader && window.FileList && window.Blob){
  getMarkdownfiles();
}
else {
  alert('The File APIs are not fully supported in this browser.');
}

// https://calba5141114.github.io/OpenMed/documents/contribution-test.md
