const converter = new showdown.Converter();

async function getMarkdownfiles(){
  const dir  = 'https://calba5141114.github.io/OpenMed/documents/documents.json';
  const response = await fetch(dir);
  const data = await response.json();
  return data;
}



if(window.File && window.FileReader && window.FileList && window.Blob){
  const data = getMarkdownfiles();
  console.log(data[0]);
}
else {
  alert('The File APIs are not fully supported in this browser.');
}

// https://calba5141114.github.io/OpenMed/documents/contribution-test.md
