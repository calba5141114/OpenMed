const converter = new showdown.Converter();
const rootDirectory = 'https://calba5141114.github.io/OpenMed/documents/'

async function getMarkdownfiles(){
  const dir  = 'https://calba5141114.github.io/OpenMed/documents/documents.json';
  const response = await fetch(dir);
  const data = await response.json();

  for (page of data) {
    console.log(page.title);
  }

}



if(window.File && window.FileReader && window.FileList && window.Blob){
  getMarkdownfiles();
}
else {
  alert('The File APIs are not fully supported in this browser.');
}

// https://calba5141114.github.io/OpenMed/documents/contribution-test.md
