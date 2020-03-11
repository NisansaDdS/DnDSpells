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
}


