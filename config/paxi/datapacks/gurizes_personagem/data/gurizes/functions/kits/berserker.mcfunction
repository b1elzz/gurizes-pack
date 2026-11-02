execute unless entity @s[advancements={gurizes:interno/kit_berserker=true}] run give @s minecraft:iron_axe 1
execute unless entity @s[advancements={gurizes:interno/kit_berserker=true}] run give @s minecraft:bread 8
execute unless entity @s[advancements={gurizes:interno/kit_berserker=true}] run give @s irons_spellbooks:copper_spell_book 1
execute unless entity @s[advancements={gurizes:interno/kit_berserker=true}] run give @s irons_spellbooks:scroll{ISB_Spells:{data:[{id:"irons_spellbooks:blood_slash",index:0,level:1,locked:0b}],maxSpells:1,mustEquip:0b,spellWheel:0b}} 1
advancement grant @s only gurizes:interno/kit_berserker
