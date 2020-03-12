var template = `
{{#spells}}
<td class="card">
<div class="outer-container"><div class="inner-container">
<div class="background {{#school}}{{{school}}}{{/school}} "> 

<div class="title-row l t b r">
          <div class="title-right">
            <div class="title-name black-text">
              {{#concentration}}
					<img class="badgesS"  src="https://www.dndbeyond.com/content/1-0-842-0/skins/waterdeep/images/icons/core_mechanics/concentration.svg">
				{{/concentration}}
				{{^concentration}}
					<img class="badgesS"  src="images/Empty.png">
				{{/concentration}}
              {{name}}
              {{#ritual}}
					<img class="badges2S"  src="https://www.dndbeyond.com/content/1-0-842-0/skins/waterdeep/images/icons/core_mechanics/ritual.svg">
			   {{/ritual}}
			   {{^ritual}}
					<img class="badgesS"  src="images/Empty.png">
			   {{/ritual}}
            </div>
          </div>
</div>

<div class="properties l r b">
          <div class="property-row">
            <div class="property r2">

              <div class="property-text2  black-text">
                {{casting_time}}
              </div>
            </div>
            <div class="property">

              <div class="property-text2  black-text">
                {{range}}
              </div>

            </div>
          </div>
          <div class="property-row">
            <div class="property r2">

              <div class="property-text black-text">
                {{component_desc}}
              </div>
            </div>
            <div class="property">

              <div class="property-text2 black-text">
                {{duration}}
              </div>

            </div>
          </div>
        </div>
<div class="content l r black-text">
	{{#material_desc}}
	<i><strong>Material Requirements: </strong>{{material_desc}}</i>
	<hr class="divider" />
	{{/material_desc}}
	{{{desc}}}  
	{{#extra_desc}} 
	<strong><i>Please refer the Spellbook for the rest of the details.</i></strong>  
	{{/extra_desc}} 
	{{#higher_level}}	
	<hr class="divider" /><b>At Higher Levels</b>. {{{higher_level}}}
	{{/higher_level}} 
	
	
	<div class="damgeClass">
	{{#direct}}<hr class="divider" />{{/direct}}
		<table><tr>
  {{#saving}}<td style='vertical-align: text-top;'><b>Saving Throw&nbsp;&nbsp;&nbsp;&nbsp;</b><br><img class='damage'  src='https://www.dndbeyond.com/Content/Skins/Waterdeep/images/icons/abilities/{{{type}}}.svg'>&nbsp;{{{type}}}&nbsp;&nbsp;&nbsp;&nbsp;</td>{{/saving}}
  {{#direct}}<td style='vertical-align: text-top;'><b>Direct&nbsp;&nbsp;&nbsp;&nbsp;</b><br><img class='damage'  src='images/{{{type}}}.png'>&nbsp;&nbsp;{{{damage}}}&nbsp;&nbsp;&nbsp;&nbsp;</td>{{/direct}} 
  {{#subsequent}}<td style='vertical-align: text-top;'><b>Subsequent&nbsp;&nbsp;</b><br><img class='damage'  src='images/{{{type}}}.png'>&nbsp;&nbsp;&nbsp;&nbsp;{{{damage}}}&nbsp;&nbsp;&nbsp;&nbsp;</td>{{/subsequent}}
  {{#continuous}}<td style='vertical-align: text-top;'><b>Continuous&nbsp;&nbsp;&nbsp;&nbsp;</b><br><img class='damage'  src='images/{{{type}}}.png'>&nbsp;&nbsp;{{{damage}}}</td>{{/continuous}}
  
  </tr>
  </table>
  
   </div>
	
	
 </div>  
  
   
   <div class="footer white-text">
          <div class="l footer-left">{{level_desc}}</div>
          <div class="footer-middle"><img class="school" src="images/{{school}}.png"></div>
          <div class="r footer-right">{{school}}</div>
        </div>
  
</div> 
</div>
</div>
</td>
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

var closeHeader = function() {
  document.getElementById('header').style.display = 'none';
}

var edit = function() {
  window.location.pathname = window.location.pathname + '/..'
}