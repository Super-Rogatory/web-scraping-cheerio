# Web Scraping with Cheerio

- ## We have to find which webpage we are interested in scraping from.
<hr />

- ## We can then perform an axios.get request to the url and get back a response. We can load the html data from the response into cheerio and begin scraping.
- ## `const $ = cheerio.load(html);`
- ## Using `$('selector')` will return an HTML element whose data can be manipulated.

<hr />

# Taking a look at the output. 
`console.log(siteOutput.html());`
```
<div class="rs-external-header-links" style="display:none"><span class="rs-header-icon rs-header-icon-rs" data-text="RuneScape" data-title="The RuneScape Wiki also has an article on Scimitar." data-site="rs">The RuneScape Wiki also has an article on: <a href="https://runescape.wiki/w/Scimitar" class="extiw" title="rsw:Scimitar">rsw:Scimitar</a></span></div>
<table class="plainlinks rsw-infobox infobox no-parenthesis-style"><tbody><tr><th colspan="20" class="infobox-header">Scimitar</th></tr><tr><td colspan="20" class="infobox-padding"></td></tr><tr><td colspan="20" class="infobox-image"><span class="plinkp-template"><a href="/w/Bronze_scimitar" title="Bronze scimitar"><img alt="Bronze scimitar.png" src="/images/f/f7/Bronze_scimitar.png?49cfc" width="27" height="30" data-file-width="27" data-file-height="30"></a></span><span class="plinkp-template"><a href="/w/Iron_scimitar" title="Iron scimitar"><img alt="Iron scimitar.png" src="/images/b/b3/Iron_scimitar.png?e5c40" width="27" height="30" data-file-width="27" data-file-height="30"></a></span><span class="plinkp-template"><a href="/w/Steel_scimitar" title="Steel scimitar"><img alt="Steel scimitar.png" src="/images/7/78/Steel_scimitar.png?d11f2" width="27" height="30" data-file-width="27" data-file-height="30"></a></span><span class="plinkp-template"><a href="/w/Black_scimitar" title="Black scimitar"><img alt="Black scimitar.png" src="/images/5/53/Black_scimitar.png?7748c" width="27" height="30" data-file-width="27" data-file-height="30"></a></span><span class="plinkp-template"><a href="/w/White_scimitar" title="White scimitar"><img alt="White scimitar.png" src="/images/8/8b/White_scimitar.png?3ef63" width="27" height="30" data-file-width="27" data-file-height="30"></a></span><span class="plinkp-template"><a href="/w/Mithril_scimitar" title="Mithril scimitar"><img alt="Mithril scimitar.png" src="/images/0/04/Mithril_scimitar.png?dd3b6" width="27" height="30" data-file-width="27" data-file-height="30"></a></span><span class="plinkp-template"><a href="/w/Adamant_scimitar" title="Adamant scimitar"><img alt="Adamant scimitar.png" src="/images/b/be/Adamant_scimitar.png?b94c4" width="27" height="30" data-file-width="27" data-file-height="30"></a></span><span class="plinkp-template"><a href="/w/Rune_scimitar" title="Rune scimitar"><img alt="Rune scimitar.png" src="/images/d/d9/Rune_scimitar.png?a7233" width="27" height="30" data-file-width="27" data-file-height="30"></a></span><span class="plinkp-template"><a href="/w/Dragon_scimitar" title="Dragon scimitar"><img alt="Dragon scimitar.png" src="/images/8/8b/Dragon_scimitar.png?9e9b8" width="26" height="29" data-file-width="26" data-file-height="29"></a></span></td></tr><tr><td colspan="20" class="infobox-padding"></td></tr><tr><th colspan="7">Primary <a href="/w/Attack_type" class="mw-redirect" title="Attack type">type</a></th><td colspan="13"><a href="/w/Slash" class="mw-redirect" title="Slash">Slash</a></td></tr><tr><th colspan="7">Secondary <a href="/w/Attack_type" class="mw-redirect" title="Attack type">type</a></th><td colspan="13"><a href="/w/Stab" class="mw-redirect" title="Stab">Stab</a></td></tr><tr><td colspan="20" class="infobox-padding"></td></tr><tr><th colspan="20" class="infobox-subheader"><a href="/w/Monster_attack_speed" class="mw-redirect" title="Monster attack speed">Attack speed</a></th></tr><tr><td colspan="20" class="infobox-padding"></td></tr><tr><td colspan="20" class="infobox-full-width-content"><a href="/w/Attack_speed" title="Attack speed"><img alt="Monster attack speed 4.png" src="/images/8/89/Monster_attack_speed_4.png?cf852" width="164" height="46" data-file-width="164" data-file-height="46"></a></td></tr><tr><td colspan="20" class="infobox-padding"></td></tr></tbody></table><div class="infobox-smw-data" style="display:none"></div>
<p><b>Scimitars</b> (pronounced <i>"sim-i-tar"</i>) are a type of <a href="/w/Slash_weapon" class="mw-redirect" title="Slash weapon">slash weapon</a> that can also be used as a <a href="/w/Stab_weapon" class="mw-redirect" title="Stab weapon">stab weapon</a>, although less effectively. They can deal slightly higher hits than <a href="/w/Swords" class="mw-redirect" title="Swords">swords</a>, but less than <a href="/w/Longswords" class="mw-redirect" title="Longswords">longswords</a>.
</p><p>Scimitars have exactly the same <a href="/w/Attack_speed" title="Attack speed">attack speed</a> as <a href="/w/Daggers" class="mw-redirect" title="Daggers">daggers</a> and <a href="/w/Claws" title="Claws">claws</a>, but provide a higher <a href="/w/Attack_bonus" class="mw-redirect" title="Attack bonus">attack bonus</a> than daggers and yield lower <a href="/w/Equipment_Stats#Defence_bonuses" title="Equipment Stats">defence bonuses</a> than claws. The combination of high attack and swing speed give the scimitar its large popularity in <a href="/w/Melee" title="Melee">melee</a> training.
</p><p>Most types of scimitars are made with the <a href="/w/Smithing" title="Smithing">Smithing</a> skill, purchased at a <a href="/w/Scimitar_shop" class="mw-redirect" title="Scimitar shop">scimitar shop</a> identified with the scimitar <a href="/w/Icon" title="Icon">icon</a> <a href="/w/File:Scimitar_shop_icon.png" class="image"><img alt="Scimitar shop icon.png" src="/images/3/34/Scimitar_shop_icon.png?00933" width="15" height="15" data-file-width="15" data-file-height="15"></a> on the <a href="/w/Map" title="Map">map</a>, or traded through other players.
</p>
<div id="toc" class="toc"><div class="toctitle" lang="en-GB" dir="ltr"><h2>Contents</h2></div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#Combat_styles"><span class="tocnumber">1</span> <span class="toctext">Combat styles</span></a></li>
<li class="toclevel-1 tocsection-2"><a href="#Standard_scimitars"><span class="tocnumber">2</span> <span class="toctext">Standard scimitars</span></a></li>
<li class="toclevel-1 tocsection-3"><a href="#Other_scimitars"><span class="tocnumber">3</span> <span class="toctext">Other scimitars</span></a></li>
<li class="toclevel-1 tocsection-4"><a href="#Scimitar_vs._Longsword"><span class="tocnumber">4</span> <span class="toctext">Scimitar vs. Longsword</span></a></li>
</ul>
</div>

.
.
.
.
.

```

<hr />

# Some methods include -> **.text()**, **.find('selector')**, **.children('selector')**

## .text()
```
The RuneScape Wiki also has an article on: rsw:Scimitar
ScimitarPrimary typeSlashSecondary typeStabAttack speed
Scimitars (pronounced "sim-i-tar") are a type of slash weapon that can also be used as a stab weapon, although less effectively. They can deal slightly higher hits than swords, but less than longswords.
Scimitars have exactly the same attack speed as daggers and claws, but provide a higher attack bonus than daggers and yield lower defence bonuses than claws. The combination of high attack and swing speed give the scimitar its large popularity in melee training.
Most types of scimitars are made with the Smithing skill, purchased at a scimitar shop identified with the scimitar icon  on the map, or traded through other players.

Contents

1 Combat styles
2 Standard scimitars
3 Other scimitars
4 Scimitar vs. Longsword



Combat styles[edit | edit source]
Combat OptionsCombat StyleAttack typesStyleExperienceChopSlashAccurateAttack and HitpointsSlashSlashAggressiveStrength and HitpointsLungeStabControlledShared and HitpointsBlockSlashDefensiveDefence and Hitpoints
Standard scimitars[edit | edit source]
ItemAttack BonusesDefence BonusesOtherBronze scimitar17-2000100060%001.8Iron scimitar210-2000100090%001.8Steel scimitar315-20001000140%001.8Black scimitar419-20001000140%001.8White scimitar419-20001000140%011.8Mithril scimitar521-20001000200%001.6Adamant scimitar629-20001000280%002.0Rune scimitar745-20001000440%001.8Dragon scimitar867-20001000660%001.8
Other scimitars[edit | edit source]
ItemAttack BonusesDefence BonusesOtherStarter sword521-20001000200%001.8Cleaver745-20001000440%001.8Gilded scimitar745-20001000440%001.8Brine sabre747-20000000460%001.8Blade of saeldor559400000000890%001.8Blade of saeldor (c)559400000000890%001.8
.
.
.
```

## .find('p').text()
```
Scimitars (pronounced "sim-i-tar") are a type of slash weapon that can also be used as a stab weapon, although less effectively. They can deal slightly higher hits than swords, but less than longswords.
Scimitars have exactly the same attack speed as daggers and claws, but provide a higher attack bonus than daggers and yield lower defence bonuses than claws. The combination of high attack and swing speed give the scimitar its large popularity in melee training.
Most types of scimitars are made with the Smithing skill, purchased at a scimitar shop identified with the scimitar icon  on the map, or traded through other players.
In short, scimitars have better DPS against most monsters than longswords and are better suited for PvM and training melee stats. Longswords have slightly higher strength bonuses which gives them higher possible maximum hits. Overall, it is recommended to get a scimitar over a longsword whenever possible.
The scimitar and longsword are very similar weapons as they are both slash weapons and have nearly the same attack bonus for slash. However, scimitars have an attack speed of 4 while longswords have an attack speed of 5. This lets scimitars attack 1 tick (about 0.6 seconds) faster. Longswords have slightly higher strength bonuses than their scimitar counterpart, which gives them an additional +1 to the maximum hit.
Comparing the two weapons, the scimitar will hit 25% faster in exchange for 1 damage to the max hit. This makes them better to use than the longsword in most situations.
It gets more complicated as other factors come into play, such as enemy's defence bonuses, the player's Attack and Strength levels, and the player's attack bonuses from other gear. As a simple example, dragons are relatively weak to stab. Longswords have a much higher attack bonus for stab than scimitar and will do more DPS, assuming the player is using the stab attack style on the scimitar. Scimitars will still do more DPS to dragons than longswords if the slash style is used for the scimitar, even if the longsword is used on stab.
```

## Looping with .each((i, el) => {});
```
async function getScimitars() {
    try {
        const { data: html } = await axios.get('https://oldschool.runescape.wiki/w/Scimitar');
        const $ = cheerio.load(html);

        $('#mw-panel #p-Guides .body ul').each((index, element) => {
            const item = $(element).text();
            console.log(item);
        })
    } catch (err) {
        
    }
}
getScimitars();
```

```
Output: Recent updatesList of questsAchievement DiariesSkill trainingMoney makingCalculatorsTreasure TrailsNew player guide
```

## Getting rid of whitespace
```
const item = $(element).text().replace(/\s\s+/g, '');
```