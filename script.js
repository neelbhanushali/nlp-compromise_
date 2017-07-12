$(document).ready(function() {
	
});

function getPOS() {
	var nlp = window.nlp_compromise;

	var statement = nlp.statement($("#in").val());

	var terms = statement.terms;

	for(var i = 0; i < terms.length; i++) {
		$("#out").append("<pre>`" + terms[i].text + "` is a " + terms[i].tag + "</pre>");
	}

	console.log(terms);

}