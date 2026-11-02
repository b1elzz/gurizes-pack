execute unless entity @s[advancements={gurizes:interno/kit_mago_elemental=true}] run give @s irons_spellbooks:artificer_cane 1
execute unless entity @s[advancements={gurizes:interno/kit_mago_elemental=true}] run give @s irons_spellbooks:copper_spell_book 1
execute unless entity @s[advancements={gurizes:interno/kit_mago_elemental=true}] run give @s irons_spellbooks:scroll{ISB_Spells:{data:[{id:"irons_spellbooks:firebolt",index:0,level:1,locked:0b}],maxSpells:1,mustEquip:0b,spellWheel:0b}} 1
execute unless entity @s[advancements={gurizes:interno/kit_mago_elemental=true}] run give @s irons_spellbooks:scroll{ISB_Spells:{data:[{id:"irons_spellbooks:icicle",index:0,level:1,locked:0b}],maxSpells:1,mustEquip:0b,spellWheel:0b}} 1
advancement grant @s only gurizes:interno/kit_mago_elemental
