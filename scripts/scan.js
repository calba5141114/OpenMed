
async function getMarkdownfiles(){
  const dir  = 'https://calba5141114.github.io/OpenMed/documents/documents.json';
  const response = fetch(directory)
}



if(window.File && window.FileReader && window.FileList && window.Blob){
  const data = getMarkdownfiles();
  for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
  }
}
else {
  alert('The File APIs are not fully supported in this browser.');
}

// https://calba5141114.github.io/OpenMed/documents/contribution-test.md
