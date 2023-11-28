import Smartlook, { Properties } from 'react-native-smartlook-analytics';

Smartlook.instance.preferences.setProjectKey(
  '8bbc5b796b7f81026fecdfc9f5d2fffb858f48f7'
);
Smartlook.instance.start();


function calculerPrixEtoile(){
    var result0=0;
    var j=0;
    
    var liste5=document.getElementsByName("liste5");
    
    while (liste5[j].checked==false){
        j++;
    }
      if (liste5[j].id=="3Etoile"){
      result0=parseFloat(liste5[j].value);
    }
    if (liste5[j].id=="4Etoile"){
        result0=parseFloat(liste5[j].value);
    }
    if (liste5[j].id=="5Etoile"){
        result0=parseFloat(liste5[j].value);
    } 
   
    return result0;

}

function calculerTotalExtras(){
    var liste6 = document.getElementsByName('liste6');

var result = 0;

for (var i = 0; i < liste6.length; i++) {
    if (liste6[i].checked) {

        result += parseFloat(liste6[i].value);
    // console.log( parseFloat(agence.liste6[i].value));
    }
    return result
}


}

var liste5=calculerPrixEtoile();
var liste6=calculerTotalExtras();


function creerObjet(liste5,liste6){
    const prixAdulte=150;
    const prixEnfant=70;
     var  agence= {};

     
    agence.liste1=(document.getElementById("liste1")).value*prixAdulte;
    //console.log(agence.liste1);
    agence.liste2=(document.getElementById("liste2")).value*prixEnfant;
    //console.log(agence.liste2);
    agence.liste3=document.getElementById("liste3").value;
    //console.log(agence.liste
    agence.liste4=document.getElementById("liste4").value;
    agence.liste5=liste5;
    agence.liste6=liste6;
    //console.log(agence.liste4);
    //console.log(agence.liste5);

    
                
    agence.getTotal=function() {
       
        var resultat;
        
        
         
        resultat = parseFloat(this.liste1)+parseFloat(this.liste2)+parseFloat(this.liste3)+parseFloat(this.liste4)+parseFloat(this.liste5)+parseFloat(this.liste5);
        //console.log(resultat);
        return resultat;
       
    }

    //console.log(agence);
    return agence;
}
    



function calculerCoutVoyage(){
    var liste5=calculerPrixEtoile();
    var liste6=calculerTotalExtras();
    var p = creerObjet(liste5,liste6);
var nbrAdulte=p.liste1;
var zero=0;

var valeur=p.getTotal();
    if (nbrAdulte == zero)
    alert("veuillez saisir le nombre total Adulte "+nbrAdulte);
    else if (p.liste3=="")
    alert("veuillez saisir Tout Les Champs Obligatoirs  ");//tout les champs sont obligatoire 
    else  if (p.liste4=="")
    alert("veuillez saisir Tout Les Champs Obligatoirs  ")
    else
    document.getElementById("total").value=p.getTotal()+'$';
    
        
        
        //document.getElementById("liste1").value="";

    
    
}


function afficherDetail() {
    var liste5 = calculerPrixEtoile();
    var liste6 = calculerTotalExtras();
    var p = creerObjet(liste5, liste6);

    var detail = [p.liste1, p.liste2, p.liste3, p.liste4, p.liste5, p.liste6];
    var noms = ['Total Prix Adulte ', 'Total Prix Enfant', 'Total prix Chambre', 'Durée du voyage', 'Choix de la catégorie hôtel', 'Quelques extras '];

    var table = document.createElement('table');
    table.style.width = '50%';
    table.setAttribute('border', '1');
    table.setAttribute('cellspacing', '10');

    for (var i = 0; i < noms.length; i++) {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = noms[i];
        cell2.innerHTML = detail[i] + " $";
    }

    // Ajouter le tableau à un élément existant dans le DOM, par exemple un div avec un id spécifique
    var container = document.getElementById('tableContainer');
    container.innerHTML = ''; // Efface tout contenu précédent
    container.appendChild(table);
    
}


/*function afficherDetail (){

    var liste5=calculerPrixEtoile();
    var liste6=calculerTotalExtras();
    var p = creerObjet(liste5,liste6);
    

    console.log(p.liste1);
    console.log(p.liste2);
    console.log(p.liste3);

    var detail= [];
    detail[0]= p.liste1;
    detail[1]= p.liste2;
    detail[2]= p.liste3;
    detail[3]= p.liste4;
    detail[4]= p.liste5; // total de la liste des bouttons 
    detail[5]= p.liste6; // total de la liste des check box


    var noms=[];
    noms[0]='Total Prix Adulte ';
    noms[1]='Total Prix Enfant';
    noms[2]='Total prix Chambre';
    noms[3]='Durée du voyage';
    noms[4]='Choix de la catégorie hôtel';
    noms[5]='Quelques extras ';

    document.write('<table width = "50%" border="1" cellspacing="10">');

    for (i=0; i< noms.length;i++){

        document.write("<tr>");
        document.write("<td width='50%'>" +noms[i]+"</td>");
        document.write("<td width='50%'>"+detail[i]+" $"+"</td>");
        document.write("</tr>");
        
    }
    document.write("</table>");

        
}*/




















































 