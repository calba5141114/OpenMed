
async function getMarkdownfiles(){
  const directory  = 'https://calba5141114.github.io/OpenMed/documents/';
  const data = await fetch(directory);
  return data;
}



if(window.File && window.FileReader && window.FileList && window.Blob){
  const data = getMarkdownfiles();
  console.log(data);
}
else {
  alert('The File APIs are not fully supported in this browser.');
}

// https://calba5141114.github.io/OpenMed/documents/contribution-test.md
