function valideerformulaire() {
	let estvalide = true;

	//validation du nom
	const nom=
	document.getElementById("nom").value;
	if (nom === "") {
		.textcontent = "Le nom et requis.";
		estvalide = fals;
	}
	else{
		document.getElementById("erreur-nom")
		textcontent = "";
	}
	//validation du postnom
	const post nom=
	document.getElementById("post nom").value;
	if (post nom === "") {
		.textcontent = "le post nom et requis";
		estvalide = fals;
	}
	else{
		textcontent= "";
		}
	}

		
	