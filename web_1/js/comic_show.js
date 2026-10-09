//comic_show.js was created by geno7, with much needed assistance from Dannarchy

//this is the script that actually displays the comics, nav and comic title on the page. 

//SHOW COMIC PAGE
writePageClickable(".writePageClickable", false);

// below this point is more under-the-hood type stuff that we only encourage messing with if you're more familiar with js, 
// but it's still commented as extensively as possible anyway just in case

//SHOW COMIC PAGE, without clickable link
function writePageClickable(div, clickable) {
    document.querySelector(div).innerHTML = `<div class="comicPage">${writePage()}</div>`;
}

//function used to split pages into multiple images if needed, and add alt text
function writePage() {
  let partExtension = ""; //part extension to add to the url if the image is split into multiple parts
  let altText = ""; //variable for alt text
  let path = (folder != "" ? folder + "/" : "") + image + pg + partExtension + "." + ext; //path for your comics made out of variables strung together
  let page = ``;

  if (pgData.length < pg) { //if the array is blank or not long enough to have an entry for this page
    page = `<img alt="` + altText + `" title="` + altText + `" src="` + path + `" />`;
    return page;
  } else if (pgData.length >= pg) { //if the array is not blank, and if its at least long enough to have an entry for the current page

    altText = pgData[pg - 1].altText; //set alt text to the text defined in the array

    if (pgData[pg-1].imageFiles > 1) { //if theres more than one page segment
      for (let i = 1; i < pgData[pg-1].imageFiles+1; i++) { //for loop to put all the parts of the image on the webpage
        partExtension = imgPart + i.toString();
        path = (folder != "" ? folder + "/" : "") + image + pg + partExtension + "." + ext; //reinit path
        if (i > 1) {page += `<br/>`} //add line break
        page += `<img alt="` + altText + `" title="` + altText + `" src="` + path + `" />`; //add page segment
      }
    } else {
      page = `<img alt="` + altText + `" title="` + altText + `" src="` + path + `" />`;
    }
    return page;
  }
}