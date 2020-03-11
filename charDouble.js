var makeBack = function(school){
	return "<td class='card'><div class='outer-container'><div class='inner-container'><div class='background "+school+"-back'><div class='school-back'><img src='images/"+school+".png'></div></div></div></div></td>";
}

var template3 = `[{{#spells}}"{{school}}",{{/spells}}]`;

var swap = function(s1,s2){
	return [s2,s1];
}

window.onload = function () {
  document.getElementById('spells').innerHTML ="<div class='card-columns'><table><tr>"+Mustache.render(template, {spells: spellbook})+"</tr></table></div>";  
  
  var list=eval(Mustache.render(template3, {spells: spellbook}));
    
  var i;
  for (i = 0; i < list.length; i+=4 ) {
	var pair=swap(list[i],list[i+2]);
	list[i]=pair[0];
	list[i+2]=pair[1];
		
	pair=swap(list[i+1],list[i+3]);
	list[i+1]=pair[0];
	list[i+3]=pair[1];
	
  }
    
  var backs="";
  for (i = 0; i < list.length; i++ ) {
	  backs+=makeBack(list[i])
  }
  document.getElementById('spellsBack').innerHTML ="<div class='card-columns'><table><tr>"+backs+"</tr></table></div>";
  
  
}


