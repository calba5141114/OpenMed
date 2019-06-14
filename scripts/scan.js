
if(window.File && window.FileReader && window.FileList && window.Blob){
  const directory  = 'https://calba5141114.github.io/OpenMed/documents/';
  fetch(directory).
  then(response => {
    console.log(response);
  });
else {
  alert('The File APIs are not fully supported in this browser.');
}


// https://calba5141114.github.io/OpenMed/documents/contribution-test.md
