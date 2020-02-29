var template = `
{{#spells}}
<div class="spell card pmd-card bg-light">  
  <div class="card-header">  
  <h3>  
  {{#school}}
  <img class="school" src="{{{school}}}.png">
  {{/school}}  
  {{name}}  
  </h3>  
  {{#concentration}}
  <img class="badges"  src="https://www.dndbeyond.com/content/1-0-842-0/skins/waterdeep/images/icons/core_mechanics/concentration.svg">
  {{/concentration}}  
  </div>
  <div class="card-body">
  <table width="100%;">
	<tr>
		<td colspan="2"><div class="type">{{type}}</div></td>
		<td><b>Casting Time:</b>{{casting_time}}</td>
	</tr>
	<tr>
		<td width="30%;"><b>Range:</b><br>{{range}}</td>
		<td width="20%;"><b>Components:</b><br>{{component_desc}}</td>
		<td width="50%;"><b>Duration:</b><br>{{duration}}</td>
	</tr>
	{{#material_cost}}
	<tr>
		<td colspan="3"><br>{{material_desc}}</td>	
	</tr>
	{{/material_cost}}	
  </table>
  <hr>  
  {{{desc}}}  
  {{#higher_level}}  
  <div class="card bg-info">
  <div class="card-header inner-headder"><b>At higher levels:</b></div>
  <div class="card-body inner-card">
  {{{higher_level}}}   
  </div>
  </div>  
  {{/higher_level}}  
</div>
</div>
{{/spells}}
`;

Mustache.parse(template);

var query = window.location.search.substring(1),
    spellbook = new BitSet('0x' + query).toArray().sort().map(id => spells[id]);

spellbook.sort(function(a, b) {
  if (a.level === b.level)
	  if(a.school === b.school)
		  return a.name < b.name ? -1 : 1;
	  else
		  return a.school < b.school ? -1 : 1;
    return a.level - b.level;
});

for (let sp of spellbook) {
  if (sp.level === 0)
    sp.type = `${sp.school} Cantrip`
  else
    sp.type = `${sp.level_desc} ${sp.school}`
}

window.onload = function () {
  document.getElementById('spells').innerHTML ="<div class='card-columns'>"+Mustache.render(template, {spells: spellbook})+"</div>";
}

var closeHeader = function() {
  document.getElementById('header').style.display = 'none';
}

var edit = function() {
  window.location.pathname = window.location.pathname + '/..'
}
