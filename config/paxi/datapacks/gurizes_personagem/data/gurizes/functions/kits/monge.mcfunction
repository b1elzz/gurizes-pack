execute unless entity @s[advancements={gurizes:interno/kit_monge=true}] run give @s gurizes:bastao_de_treino 1
execute unless entity @s[advancements={gurizes:interno/kit_monge=true}] run give @s irons_spellbooks:copper_spell_book 1
execute unless entity @s[advancements={gurizes:interno/kit_monge=true}] run give @s irons_spellbooks:scroll{ISB_Spells:{data:[{id:"irons_spellbooks:charge",index:0,level:1,locked:0b}],maxSpells:1,mustEquip:0b,spellWheel:0b}} 1
advancement grant @s only gurizes:interno/kit_monge
