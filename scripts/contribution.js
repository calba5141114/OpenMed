const contribution = document.querySelector("#contribution-markdown");
const contributionMarkdown = "https://github.com/calba5141114/OpenMed/blob/master/CONTRIBUTE.md";
const converter = new showdown.Converter();

(async function () {
    if (window.File && window.FileReader && window.FileList && window.Blob) {

        try {
            const loaded = await (await fetch(contributionMarkdown)).arrayBuffer();
            let string = new TextDecoder("utf-8").decode(loaded);
            const generatedHTML = converter.makeHtml(string);
            contribution.innerHTML = generatedHTML;
        } catch (error) {
            alert('something went wrong when trying to load the page.')
            console.error(error);
        }

    } else {
        alert('The File APIs are not fully supported in this browser.');
        throw (new Error("File APIs are not fully supported in this browser."))
    }
})();