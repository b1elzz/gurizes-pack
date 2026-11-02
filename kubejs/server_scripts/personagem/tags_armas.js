// priority: 500
// Tags de arma e de armadura usadas pelas condições dos poderes do Origins (personagem.md §2.7).
// Preenchidas a partir dos mods presentes: se um mod de armas sair do pack, o poder continua valendo para o resto.
// Regex só casa itens registrados, então ids de mods ausentes não quebram nada.

ServerEvents.tags('item', event => {
  event.add('gurizes:armas/espadas', ['#minecraft:swords',
    /^simplyswords:.*_(longsword|katana|rapier|cutlass|twinblade)$/,
    /^magistuarmory:.*_(shortsword|katzbalger|bastardsword|estoc|flamebladedsword)$/])
  event.add('gurizes:armas/machados', ['#minecraft:axes',
    /^simplyswords:.*_greataxe$/, /^magistuarmory:.*_lochaberaxe$/])
  event.add('gurizes:armas/montantes', [
    /^simplyswords:.*_(claymore|greathammer)$/,
    /^magistuarmory:.*_(zweihander|claymore|heavywarhammer|heavymace|lucernhammer)$/])
  event.add('gurizes:armas/adagas', [/^simplyswords:.*_sai$/, /^magistuarmory:.*_stylet$/])
  event.add('gurizes:armas/lancas', ['minecraft:trident',
    /^simplyswords:.*_(spear|glaive|halberd|warglaive)$/,
    /^magistuarmory:.*_(pike|ranseur|ahlspiess|guisarme|concavehalberd)$/])
  event.add('gurizes:armas/bastoes', [/^magistuarmory:.*_(morgenstern|chainmorgenstern)$/])
  event.add('gurizes:armas/cajados', [/^irons_spellbooks:.*_staff$/, 'irons_spellbooks:artificer_cane'])
  event.add('gurizes:armas/foices', [/^simplyswords:.*_scythe$/, /^irons_spellbooks:.*_scythe$/])
  event.add('gurizes:armas/arcos', ['#forge:tools/bows', 'minecraft:bow'])
  event.add('gurizes:armas/bestas', ['#forge:tools/crossbows', 'minecraft:crossbow'])
  event.add('gurizes:armas/escudos', ['#forge:tools/shields', 'minecraft:shield',
    /^magistuarmory:.*_(buckler|ellipticalshield|heatershield|kiteshield|pavese|rondache|roundshield|target|tartsche)$/])

  event.add('gurizes:armaduras/pesadas', [
    'minecraft:iron_chestplate', 'minecraft:chainmail_chestplate', 'minecraft:diamond_chestplate', 'minecraft:netherite_chestplate',
    /^magistuarmory:.*(armor|plate|maximilian|gothic|kastenbrust|brigandine|lamellar|crusader|kettlehat).*chestplate$/,
    /^immersive_armors:(steel|heavy|warrior|divine|bone|wither)_chestplate$/,
    /^cataclysm:.*_chestplate$/])

  const assinaturas = {
    paladino: 'egide_do_juramento', berserker: 'machado_rubro', mago_elemental: 'cetro_do_selo',
    necromante: 'grimorio_partido', cacador: 'arco_de_valdren', lamina_arcana: 'lamina_runica',
    bardo: 'estandarte_do_ultimo_reino', druida: 'cajado_do_carvalho_primevo', monge: 'bastao_dos_mil_passos',
    assassino: 'adaga_do_ultimo_suspiro'
  }
  Object.keys(assinaturas).forEach(classe => {
    const item = assinaturas[classe]
    event.add(`gurizes:assinaturas/${classe}`, `gurizes:${item}`)
    event.add('gurizes:assinaturas', `gurizes:${item}`)
  })
  event.add('gurizes:armas/escudos', 'gurizes:egide_do_juramento')
  event.add('gurizes:armas/machados', 'gurizes:machado_rubro')
  event.add('gurizes:armas/cajados', ['gurizes:cetro_do_selo', 'gurizes:cajado_do_carvalho_primevo'])
  event.add('gurizes:armas/arcos', 'gurizes:arco_de_valdren')
  event.add('gurizes:armas/espadas', 'gurizes:lamina_runica')
  event.add('gurizes:armas/lancas', 'gurizes:estandarte_do_ultimo_reino')
  event.add('gurizes:armas/bastoes', 'gurizes:bastao_dos_mil_passos')
  event.add('gurizes:armas/adagas', 'gurizes:adaga_do_ultimo_suspiro')
})
