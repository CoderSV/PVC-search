var form = document.getElementById("form");


function Search(){
	
	var searchTerm;
	searchTerm = document.getElementById("searchTerm").value;
	var newURL = "https://pvcmig-prod.googleplex.com/#mig_status:d="+searchTerm;
	chrome.tabs.create({url: newURL});
}
form.onsubmit=function(){Search()};
