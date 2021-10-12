if(localStorage.getItem("orange")!="false"&&localStorage.getItem("orange")!="true") 
{
localStorage.setItem("orange","false");
}

var theme = document.getElementById("theme");
var button = document.createElement("button");
var a1 = document.createAttribute("class");
a1.value="button";
button.setAttributeNode(a1);
var a2 = document.createAttribute("onclick");
a2.value="changeTheme(orange)";
button.setAttributeNode(a2);
theme.appendChild(button);
var t = document.createTextNode("Zmień kolor!"); 
button.appendChild(t);

var orange=localStorage.getItem("orange");

function setTheme()
{
	if(orange=="false")
	{
		document.getElementById("content").style.backgroundColor="#595959";
		document.getElementsByTagName("body")[0].style.backgroundColor="#222222";
		document.getElementsByClassName("button")[0].style.backgroundColor="#222222";
	}
	
	else
	{
		document.getElementById("content").style.backgroundColor="orange";
		document.getElementsByTagName("body")[0].style.backgroundColor="#FF7213";
		document.getElementsByClassName("button")[0].style.backgroundColor="#FF7213";
	}
}

window.onload = function()
{
	setTheme();
};

function changeTheme(o)
{
	if(o=="false")
	{
		document.getElementById("content").style.backgroundColor="orange";
		document.getElementsByTagName("body")[0].style.backgroundColor="#FF7213";
		document.getElementsByClassName("button")[0].style.backgroundColor="#FF7213";
		orange="true";
		localStorage.setItem("orange","true");
	}
	else
	{
		document.getElementById("content").style.backgroundColor="#595959";
		document.getElementsByTagName("body")[0].style.backgroundColor="#222222";
		document.getElementsByClassName("button")[0].style.backgroundColor="#222222";
		orange="false";
		localStorage.setItem("orange","false");
	}
}
var i;
function count(picture)
{
	if(sessionStorage.counter)
	{
		sessionStorage.counter = Number(sessionStorage.counter) + 1;
	}
	else
	{
		sessionStorage.counter=1;
	}
	i=Number(sessionStorage.counter);
	switch(picture)
	{
		case 1:picture="Wściekłe psy"; break;
		case 2:picture="Pulp fiction"; break;
		case 3:picture="Jackie Brown"; break;
		case 4:picture="Kill Bill"; break;
		case 5:picture="Grindhouse: Death Proof"; break;
		case 6:picture="Bękarty wojny"; break;
		case 7:picture="Django"; break;
		case 8:picture="Nienawistna ósemka"; break;
		case 9:picture="Pewnego razu w Hollywood"; break;
	}
	$("#counter").html("Powiększyłeś obrazki "+i+" razy<br />Ostatnio powiększany plakat(przed tym co teraz): "+sessionStorage.poster);
	sessionStorage.poster=picture;
	i++;
}



 $( function() 
		  {
			$( document ).tooltip();
		  } );
		  
		  $( function() {
			var availableTags = [
			  "Agata",
			  "Alicja",
			  "Anastazja",
			  "Bartłomiej",
			  "Barbara",
			  "Celina",
			  "Cecylia",
			  "Dobromir",
			  "Damian",
			  "Ewa",
			  "Eustachy",
			  "Feliks",
			  "Faustyna",
			  "Grzegorz",
			  "Gloria",
			  "Horacy",
			  "Hilary",
			  "Igor",
			  "Iga",
			  "Julia",
			  "Justyna",
			  "Krystyna",
			  "Katarzyna",
			  "Lucjan",
			  "Lucyna",
			  "Łukasz",
			  "Łucja",
			  "Michał",
			  "Marek",
			  "Natalia",
			  "Nikodem",
			  "Ola",
			  "Olga",
			  "Patrycja",
			  "Paweł",
			  "Rozalia",
			  "Romek",
			  "Stanisław",
			  "Sonia",
			  "Tomasz",
			  "Tadeusz",
			  "Urszula",
			  "Ubysław",
			  "Weronika",
			  "Wiktoria",
			  "Zuzanna",
			  "Zdzisław",
			  "Żaneta",
			  "Żeligniew"
			  
			];
			$( "#name" ).autocomplete({
			  source: availableTags
			});
		  } );
