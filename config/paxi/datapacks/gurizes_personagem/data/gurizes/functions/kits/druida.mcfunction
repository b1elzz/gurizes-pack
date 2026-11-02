execute unless entity @s[advancements={gurizes:interno/kit_druida=true}] run give @s irons_spellbooks:artificer_cane 1
execute unless entity @s[advancements={gurizes:interno/kit_druida=true}] run give @s irons_spellbooks:copper_spell_book 1
execute unless entity @s[advancements={gurizes:interno/kit_druida=true}] run give @s irons_spellbooks:scroll{ISB_Spells:{data:[{id:"irons_spellbooks:heal",index:0,level:1,locked:0b}],maxSpells:1,mustEquip:0b,spellWheel:0b}} 1
execute unless entity @s[advancements={gurizes:interno/kit_druida=true}] run give @s irons_spellbooks:scroll{ISB_Spells:{data:[{id:"irons_spellbooks:root",index:0,level:1,locked:0b}],maxSpells:1,mustEquip:0b,spellWheel:0b}} 1
execute unless entity @s[advancements={gurizes:interno/kit_druida=true}] run give @s minecraft:oak_sapling 8
advancement grant @s only gurizes:interno/kit_druida
