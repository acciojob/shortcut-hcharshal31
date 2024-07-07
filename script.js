function shortcut(s1, s2) {
  let shortForm = "";
	if(s1 == undefined || s2 == undefined){
	    shortForm += "'" + "'";
	} else {
		shortForm += "'"+s1[0] + s2[0]+"'"
	}
	return shortForm;
}

// Do not change the code below.
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
