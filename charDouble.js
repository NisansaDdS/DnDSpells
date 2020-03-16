var makeBack = function(school){
	return "<td class='card'><div class='outer-container'><div class='inner-container'><div class='background "+school+"-back'><div class='school-back'><img src='images/"+school+".png'></div></div></div></div></td>";
}

var template3 = `[{{#spells}}"{{school}}",{{/spells}}]`;

var swap = function(s1,s2){
	return [s2,s1];
}



window.onload = function () {
   var fronts=Mustache.render(template, {spells: spellbook});
  
  var list=eval(Mustache.render(template3, {spells: spellbook}));
  var overlap=4-list.length%4;
  
  
  if(overlap!=4){
	  while(overlap>0){
		  list.push("Empty");
		  fronts=fronts+makeBack("Empty");
		  overlap--;
	  }
  }
    
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
  
  document.getElementById('spells').innerHTML ="<div class='card-columns'><table><tr>"+fronts+"</tr></table></div>"; 
  document.getElementById('spellsBack').innerHTML ="<div class='card-columns'><table><tr>"+backs+"</tr></table></div>";
  /* autoSizeText(); */
  /* $('.resize').textfill({maxFontPixels:5});  */
  
  $('.resize').each(function( index ) {	  
	  var html_org = $(this).html();
	  var html_calc = '<span>' + html_org + '</span>';
	  $(this).html(html_calc);
      var width = $(this).find('span:first').width();
      $(this).html(html_org);
 
	  if(width>260){	   
			$(this).css( "font-size","20px" );
			if(width>320){
				$(this).css( "font-size","19px" );
			}		
	  }
  });
  
}




