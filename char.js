var template2 = `
{{#spells}}
<td class="card">
<div class="outer-container"><div class="inner-container">
      <div class="background {{school}}-back">
        <div class="school-back"><img src="images/{{school}}.png"></div>
      </div>
	  </div>
</div>
    </td>
{{/spells}}
`;


window.onload = function () {
  document.getElementById('spells').innerHTML ="<div class='card-columns'><table><tr>"+Mustache.render(template, {spells: spellbook})+"</tr></table></div>";
  document.getElementById('spellsBack').innerHTML ="<div class='card-columns'><table><tr>"+Mustache.render(template2, {spells: spellbook})+"</tr></table></div>";
  /* autoSizeText(); */
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


