const dateObj = new Date();
const month = dateObj.getUTCMonth() + 1; //months from 1-12
const day = dateObj.getUTCDate();
const year = dateObj.getUTCFullYear();

document.getElementById("bottomnote").innerHTML = "www.thomasmailaender.com *** Last update : "+day+"/"+month+"/"+year+"" ;