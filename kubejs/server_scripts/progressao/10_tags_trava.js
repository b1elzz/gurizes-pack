// priority: 900
// Tags de trava por ato (progressao-economia.md §1.4 e campanha-bosses.md §3.5 item 3).
// Inclui os itens das antigas receitas de Mestre das profissões (abertas a todos na 0.1.2, D28): craftáveis por todos, usáveis a partir do Ato IV.
// Única lista de itens selados: a equipe de balanço só edita este arquivo.
// Ids de terceiros conferidos no índice dos jars do servidor de teste (02/11/2026); os marcados [validar] dependem de teste em jogo.

ServerEvents.tags('item', event => {
  event.add('gurizes:trava/ato_2', [
    'minecraft:diamond_sword', 'minecraft:diamond_axe', 'minecraft:diamond_pickaxe',
    'minecraft:diamond_shovel', 'minecraft:diamond_hoe', 'minecraft:diamond_helmet',
    'minecraft:diamond_chestplate', 'minecraft:diamond_leggings', 'minecraft:diamond_boots',
    'irons_spellbooks:rare_ink', 'apotheosis:reforging_table', 'meetyourfight:dusk_key',
    'simplyswords:diamond_chakram', 'simplyswords:diamond_claymore', 'simplyswords:diamond_cutlass',
    'simplyswords:diamond_glaive', 'simplyswords:diamond_greataxe', 'simplyswords:diamond_greathammer',
    'simplyswords:diamond_halberd', 'simplyswords:diamond_katana', 'simplyswords:diamond_longsword',
    'simplyswords:diamond_rapier', 'simplyswords:diamond_sai', 'simplyswords:diamond_scythe',
    'simplyswords:diamond_spear', 'simplyswords:diamond_twinblade', 'simplyswords:diamond_warglaive',
    'immersive_armors:heavy_helmet', 'immersive_armors:heavy_chestplate', 'immersive_armors:heavy_leggings',
    'immersive_armors:heavy_boots', 'immersive_armors:warrior_helmet', 'immersive_armors:warrior_chestplate',
    'immersive_armors:warrior_leggings', 'immersive_armors:warrior_boots', 'immersive_armors:steampunk_helmet',
    'immersive_armors:steampunk_chestplate', 'immersive_armors:steampunk_leggings', 'immersive_armors:steampunk_boots',
    'mowziesmobs:wrought_axe', 'mowziesmobs:wrought_helmet'
  ])
  event.add('gurizes:trava/ato_3', [
    'apotheosis:hellshelf', 'apotheosis:seashelf', 'irons_spellbooks:epic_ink',
    'irons_spellbooks:gold_spell_book', 'waystones:warp_stone', 'minecraft:brewing_stand',
    'aquamirae:shell_horn', 'simplyswords:bramblethorn', 'simplyswords:icewhisper',
    'simplyswords:frostfall', 'simplyswords:whisperwind', 'simplyswords:hearthflame',
    'simplyswords:emberlash', 'simplyswords:shadowsting', 'simplyswords:wickpiercer',
    'simplyswords:twisted_blade', 'simplyswords:waxweaver', 'simplyswords:toxic_longsword',
    'simplyswords:soulkeeper', 'irons_spellbooks:diamond_spell_book', 'irons_spellbooks:legionnaire_flamberge',
    'irons_spellbooks:amethyst_rapier', 'irons_spellbooks:archevoker_helmet', 'irons_spellbooks:archevoker_chestplate',
    'irons_spellbooks:archevoker_leggings', 'irons_spellbooks:archevoker_boots', 'aquamirae:terrible_sword',
    'aquamirae:fin_cutter', 'aquamirae:remnants_saber', 'aquamirae:poisoned_blade',
    'aquamirae:dagger_of_greed', 'aquamirae:sweet_lance', 'aquamirae:coral_lance',
    'aquamirae:terrible_helmet', 'aquamirae:terrible_chestplate', 'aquamirae:terrible_leggings',
    'aquamirae:terrible_boots', 'aquamirae:three_bolt_helmet', 'aquamirae:three_bolt_leggings',
    'aquamirae:three_bolt_boots', 'cataclysm:infernal_forge', 'cataclysm:the_incinerator',
    'cataclysm:the_immolator', 'cataclysm:gauntlet_of_guard', 'cataclysm:monstrous_helm',
    'mowziesmobs:earthrend_gauntlet', 'mowziesmobs:sunblock_staff', 'mowziesmobs:naga_fang_dagger'
  ])
  event.add('gurizes:trava/ato_4', [
    'gurizes:kit_de_reparo_superior', 'gurizes:oleo_de_tempera', 'gurizes:elixir_do_heroi', 'gurizes:frasco_de_cura_maior',
    'gurizes:banquete_real', 'gurizes:pergaminho_de_retorno_grupo', 'gurizes:selo_de_caravana',
    'minecraft:netherite_ingot', 'minecraft:netherite_upgrade_smithing_template', 'minecraft:netherite_sword',
    'minecraft:netherite_axe', 'minecraft:netherite_pickaxe', 'minecraft:netherite_shovel',
    'minecraft:netherite_hoe', 'minecraft:netherite_helmet', 'minecraft:netherite_chestplate',
    'minecraft:netherite_leggings', 'minecraft:netherite_boots', 'apotheosis:deepshelf',
    'irons_spellbooks:legendary_ink', 'irons_spellbooks:netherite_spell_book', 'apotheosis:sigil_of_socketing',
    'born_in_chaos_v1:lord_pumpkinheads_lamp', 'irons_spellbooks:dead_king_phylactery', 'irons_spellbooks:dead_king_phylactery_shard',
    'simplyswords:netherite_chakram', 'simplyswords:netherite_claymore', 'simplyswords:netherite_cutlass',
    'simplyswords:netherite_glaive', 'simplyswords:netherite_greataxe', 'simplyswords:netherite_greathammer',
    'simplyswords:netherite_halberd', 'simplyswords:netherite_katana', 'simplyswords:netherite_longsword',
    'simplyswords:netherite_rapier', 'simplyswords:netherite_sai', 'simplyswords:netherite_scythe',
    'simplyswords:netherite_spear', 'simplyswords:netherite_twinblade', 'simplyswords:netherite_warglaive',
    'simplyswords:sunfire', 'simplyswords:emberblade', 'simplyswords:molten_edge',
    'simplyswords:flamewind', 'simplyswords:stormbringer', 'simplyswords:storms_edge',
    'simplyswords:stormscale', 'simplyswords:ionbound_stormscale', 'simplyswords:magiblade',
    'simplyswords:magic_estoc', 'simplyswords:magiscythe', 'simplyswords:magispear',
    'simplyswords:soulrender', 'simplyswords:soulstalker', 'simplyswords:soulstealer',
    'simplyswords:soulpyre', 'simplyswords:dreadtide', 'simplyswords:dreadwhisper',
    'simplyswords:wraithfang', 'simplyswords:wraithmaw', 'simplyswords:riftmane',
    'simplyswords:ribboncleaver', 'simplyswords:tempest', 'simplyswords:twilight',
    'simplyswords:thunderbrand', 'simplyswords:arcanethyst', 'simplyswords:bloodwake',
    'simplyswords:brimstone_claymore', 'simplyswords:caelestis', 'simplyswords:chompolotl',
    'simplyswords:dawnquiver', 'simplyswords:watcher_claymore', 'simplyswords:watching_warglaive',
    'simplyswords:harbinger', 'simplyswords:hiveheart', 'simplyswords:awakened_lichblade',
    'simplyswords:waking_lichblade', 'simplyswords:slumbering_lichblade', 'immersive_armors:wither_helmet',
    'immersive_armors:wither_chestplate', 'immersive_armors:wither_leggings', 'immersive_armors:wither_boots',
    'immersive_armors:divine_helmet', 'immersive_armors:divine_chestplate', 'immersive_armors:divine_leggings',
    'immersive_armors:divine_boots', 'irons_spellbooks:legendary_spell_book', 'irons_spellbooks:dragonskin_spell_book',
    'irons_spellbooks:keeper_flamberge', 'irons_spellbooks:hellrazor', 'irons_spellbooks:blood_staff',
    'irons_spellbooks:misery', 'irons_spellbooks:decrepit_scythe', 'irons_spellbooks:staff_of_the_nines',
    'irons_spellbooks:twilight_gale', 'irons_spellbooks:netherite_mage_helmet', 'irons_spellbooks:netherite_mage_chestplate',
    'irons_spellbooks:netherite_mage_leggings', 'irons_spellbooks:netherite_mage_boots', 'cataclysm:black_steel_sword',
    'cataclysm:black_steel_axe', 'cataclysm:black_steel_pickaxe', 'cataclysm:black_steel_shovel',
    'cataclysm:black_steel_hoe', 'cataclysm:black_steel_targe', 'cataclysm:bone_reptile_helmet',
    'cataclysm:bone_reptile_chestplate', 'cataclysm:ignitium_helmet', 'cataclysm:ignitium_chestplate',
    'cataclysm:ignitium_leggings', 'cataclysm:ignitium_boots', 'cataclysm:meat_shredder',
    'cataclysm:wither_assault_shoulder_weapon', 'cataclysm:soul_render', 'cataclysm:wrath_of_the_desert',
    'cataclysm:khopesh', 'cataclysm:athame', 'cataclysm:cursed_bow',
    'aether:gravitite_helmet', 'aether:gravitite_chestplate', 'aether:gravitite_leggings',
    'aether:gravitite_boots', 'aether:valkyrie_helmet', 'aether:valkyrie_chestplate',
    'aether:valkyrie_leggings', 'aether:valkyrie_boots', 'aether:neptune_helmet',
    'aether:neptune_chestplate', 'aether:neptune_leggings', 'aether:neptune_boots',
    'aether:phoenix_helmet', 'aether:phoenix_chestplate', 'aether:phoenix_leggings',
    'aether:phoenix_boots', 'aether:obsidian_helmet', 'aether:obsidian_chestplate',
    'aether:obsidian_leggings', 'aether:obsidian_boots', 'aether:gravitite_sword',
    'aether:gravitite_axe', 'aether:gravitite_pickaxe', 'aether:valkyrie_axe',
    'aether:valkyrie_pickaxe'
  ])
  event.add('gurizes:trava/ato_5', [
    'minecraft:elytra', 'apotheosis:endshelf', 'irons_spellbooks:cinderous_soulcaller', 'irons_spellbooks:tyros_statue', 'mutantmonsters:chemical_x',
    'mutantmonsters:hulk_hammer', 'simplyswords:runic_chakram', 'simplyswords:runic_claymore',
    'simplyswords:runic_cutlass', 'simplyswords:runic_glaive', 'simplyswords:runic_greataxe',
    'simplyswords:runic_greathammer', 'simplyswords:runic_halberd', 'simplyswords:runic_katana',
    'simplyswords:runic_longsword', 'simplyswords:runic_rapier', 'simplyswords:runic_sai',
    'simplyswords:runic_scythe', 'simplyswords:runic_spear', 'simplyswords:runic_twinblade',
    'simplyswords:runic_warglaive', 'simplyswords:livyatan', 'simplyswords:mjolnir',
    'simplyswords:stars_edge', 'simplyswords:the_devourer', 'simplyswords:enigma',
    'simplyswords:gloampiercer', 'cataclysm:cursium_helmet', 'cataclysm:cursium_chestplate',
    'cataclysm:cursium_leggings', 'cataclysm:cursium_boots', 'cataclysm:cursium_upgrade_smithing_template',
    'cataclysm:ignitium_elytra_chestplate', 'cataclysm:laser_gatling', 'cataclysm:the_annihilator',
    'cataclysm:void_assault_shoulder_weapon', 'cataclysm:gauntlet_of_maelstrom', 'cataclysm:final_fractal',
    'cataclysm:zweiender', 'cataclysm:astrape', 'cataclysm:ceraunus'
  ])
  event.add('gurizes:trava/ato_6', [
    'apotheosis:draconic_endshelf', 'gurizes:mesa_do_selo', 'cataclysm:abyssal_sacrifice',
    'cataclysm:tidal_claws', 'cataclysm:coral_bardiche', 'iceandfire:dragonsteel_fire_sword',
    'iceandfire:dragonsteel_fire_axe', 'iceandfire:dragonsteel_fire_pickaxe', 'iceandfire:dragonsteel_fire_helmet',
    'iceandfire:dragonsteel_fire_chestplate', 'iceandfire:dragonsteel_fire_leggings', 'iceandfire:dragonsteel_fire_boots',
    'iceandfire:dragonarmor_dragonsteel_fire_head', 'iceandfire:dragonarmor_dragonsteel_fire_neck', 'iceandfire:dragonarmor_dragonsteel_fire_body',
    'iceandfire:dragonarmor_dragonsteel_fire_tail', 'iceandfire:dragonsteel_ice_sword', 'iceandfire:dragonsteel_ice_axe',
    'iceandfire:dragonsteel_ice_pickaxe', 'iceandfire:dragonsteel_ice_helmet', 'iceandfire:dragonsteel_ice_chestplate',
    'iceandfire:dragonsteel_ice_leggings', 'iceandfire:dragonsteel_ice_boots', 'iceandfire:dragonarmor_dragonsteel_ice_head',
    'iceandfire:dragonarmor_dragonsteel_ice_neck', 'iceandfire:dragonarmor_dragonsteel_ice_body', 'iceandfire:dragonarmor_dragonsteel_ice_tail',
    'iceandfire:dragonsteel_lightning_sword', 'iceandfire:dragonsteel_lightning_axe', 'iceandfire:dragonsteel_lightning_pickaxe',
    'iceandfire:dragonsteel_lightning_helmet', 'iceandfire:dragonsteel_lightning_chestplate', 'iceandfire:dragonsteel_lightning_leggings',
    'iceandfire:dragonsteel_lightning_boots', 'iceandfire:dragonarmor_dragonsteel_lightning_head', 'iceandfire:dragonarmor_dragonsteel_lightning_neck',
    'iceandfire:dragonarmor_dragonsteel_lightning_body', 'iceandfire:dragonarmor_dragonsteel_lightning_tail', 'iceandfire:armor_red_helmet',
    'iceandfire:armor_red_chestplate', 'iceandfire:armor_red_leggings', 'iceandfire:armor_red_boots',
    'iceandfire:armor_green_helmet', 'iceandfire:armor_green_chestplate', 'iceandfire:armor_green_leggings',
    'iceandfire:armor_green_boots', 'iceandfire:armor_bronze_helmet', 'iceandfire:armor_bronze_chestplate',
    'iceandfire:armor_bronze_leggings', 'iceandfire:armor_bronze_boots', 'iceandfire:armor_gray_helmet',
    'iceandfire:armor_gray_chestplate', 'iceandfire:armor_gray_leggings', 'iceandfire:armor_gray_boots',
    'iceandfire:armor_blue_helmet', 'iceandfire:armor_blue_chestplate', 'iceandfire:armor_blue_leggings',
    'iceandfire:armor_blue_boots', 'iceandfire:armor_white_helmet', 'iceandfire:armor_white_chestplate',
    'iceandfire:armor_white_leggings', 'iceandfire:armor_white_boots', 'iceandfire:armor_sapphire_helmet',
    'iceandfire:armor_sapphire_chestplate', 'iceandfire:armor_sapphire_leggings', 'iceandfire:armor_sapphire_boots',
    'iceandfire:armor_silver_helmet', 'iceandfire:armor_silver_chestplate', 'iceandfire:armor_silver_leggings',
    'iceandfire:armor_silver_boots', 'iceandfire:armor_electric_helmet', 'iceandfire:armor_electric_chestplate',
    'iceandfire:armor_electric_leggings', 'iceandfire:armor_electric_boots', 'iceandfire:armor_amythest_helmet',
    'iceandfire:armor_amythest_chestplate', 'iceandfire:armor_amythest_leggings', 'iceandfire:armor_amythest_boots',
    'iceandfire:armor_black_helmet', 'iceandfire:armor_black_chestplate', 'iceandfire:armor_black_leggings',
    'iceandfire:armor_black_boots'
  ])
  event.add('gurizes:trava/ato_2', [
    'block_factorys_bosses:ice_gauntlet', 'block_factorys_bosses:sandworm_gauntlet', 'block_factorys_bosses:warrior_sword',
    'block_factorys_bosses:dragon_guard_shield', 'block_factorys_bosses:dragon_bones_chestplate', 'block_factorys_bosses:dragon_bones_leggings',
    'block_factorys_bosses:dragon_bones_boots', 'dungeons_plus:frosted_cowl', 'dungeons_plus:warped_axe',
    'stalwart_dungeons:diamond_hammer', 'nethersdelight:diamond_machete'
  ])
  event.add('gurizes:trava/ato_3', [
    'block_factorys_bosses:kraken_trident', 'block_factorys_bosses:enhanced_shield', 'block_factorys_bosses:large_sword',
    'block_factorys_bosses:knight_sword', 'block_factorys_bosses:knight_helmet', 'block_factorys_bosses:knight_chestplate',
    'block_factorys_bosses:knight_leggings', 'block_factorys_bosses:knight_boots', 'dungeons_plus:leviathan_blade', 'dungeons_plus:soul_cannon',
    'stalwart_dungeons:nether_hammer', 'stalwart_dungeons:tungsten_sword', 'stalwart_dungeons:tungsten_axe', 'stalwart_dungeons:tungsten_pickaxe',
    'stalwart_dungeons:tungsten_shovel', 'stalwart_dungeons:tungsten_hoe', 'stalwart_dungeons:tungsten_hammer', 'stalwart_dungeons:tungsten_shield',
    'stalwart_dungeons:tungsten_helmet', 'stalwart_dungeons:tungsten_chestplate', 'stalwart_dungeons:tungsten_leggings', 'stalwart_dungeons:tungsten_boots',
    'stalwart_dungeons:warted_tungsten_helmet', 'stalwart_dungeons:warted_tungsten_chestplate', 'stalwart_dungeons:warted_tungsten_leggings',
    'stalwart_dungeons:warted_tungsten_boots', 'stalwart_dungeons:warted_tungsten_shield', 'stalwart_dungeons:awful_dagger', 'stalwart_dungeons:awful_gun',
    'stalwart_dungeons:obsidian_striker'
  ])
  event.add('gurizes:trava/ato_4', [
    'stalwart_dungeons:netherite_hammer', 'nethersdelight:netherite_machete', 'delightful:gilded_netherite_knife', 'delightful:netherite_opal_knife'
  ])
  event.add('gurizes:trava/ato_5', [
    'stalwart_dungeons:chorundum_sword', 'stalwart_dungeons:chorundum_axe', 'stalwart_dungeons:chorundum_pickaxe', 'stalwart_dungeons:chorundum_shovel',
    'stalwart_dungeons:chorundum_hoe', 'stalwart_dungeons:chorundum_shield', 'stalwart_dungeons:chorundum_armor_helmet',
    'stalwart_dungeons:chorundum_armor_chestplate', 'stalwart_dungeons:chorundum_armor_leggings', 'stalwart_dungeons:chorundum_armor_boots',
    'stalwart_dungeons:shulker_cannon_item', 'stalwart_dungeons:teleporter', 'stalwart_dungeons:teleporter_pearl'
  ])
  event.add('gurizes:trava/ato_6', [
  ])
  event.add('gurizes:trava/epilogo', [])
})
