// priority: 800
// Restrições AStages por estágio (progressao-economia.md §1.4 e §3.3).
// Regra geral de item selado: pode pegar e guardar, não pode usar, equipar, atacar, colocar nem craftar.
// Cada restrição fica em gurizesTentar: um método com assinatura diferente na versão instalada só gera aviso no log,
// sem derrubar as outras travas.

const GURIZES_ATO_TXT = { ato_2: 'II', ato_3: 'III', ato_4: 'IV', ato_5: 'V', ato_6: 'VI', epilogo: 'do Epílogo' }

Object.keys(GURIZES_ATO_TXT).forEach(estagio => {
  global.gurizesTentar(`trava de tag ${estagio}`, () => {
    const r = AStages.addRestrictionForTag(`gurizes/item/${estagio}`, estagio, `gurizes:trava/${estagio}`)
    global.gurizesTentar('allowPickup', () => r.allowPickup())
    global.gurizesTentar('allowInventoryStorage', () => r.allowInventoryStorage())
    global.gurizesTentar('allowContainerStorage', () => r.allowContainerStorage())
    global.gurizesTentar('globalShowName', () => r.globalShowName())
    global.gurizesTentar('showInRecipeViewer', () => r.showInRecipeViewer())
    global.gurizesTentar('tooltipMessage', () => r.tooltipMessage(stack =>
      Text.of(estagio === 'epilogo' ? 'Selado pelo Juramento: libera no Epílogo' : `Selado pelo Juramento: libera no Ato ${GURIZES_ATO_TXT[estagio]}`).gold()))
    global.gurizesTentar('useMessage', () => r.useMessage(stack =>
      Text.of('Este item ainda está selado pelo Juramento.').red()))
  })
})

const GURIZES_DIMENSOES = {
  'twilightforest:twilight_forest': ['ato_2', 'A névoa da Floresta Crepuscular só se abre ao portador do primeiro Fragmento.'],
  'minecraft:the_nether': ['ato_3', 'O calor da Fornalha te repele. Derrote o porteiro do Ato II.'],
  'aether:the_aether': ['ato_3', 'Os céus ainda não reconhecem teu juramento.'],
  'deeperdarker:otherside': ['ato_4', 'O Abismo exige o terceiro Fragmento do Selo.'],
  'minecraft:the_end': ['ato_5', 'O Fim só se abre a quem reuniu quatro Fragmentos.'],
  'gurizes:alem_do_selo': ['ato_5', 'As estrelas ainda não te enxergam.']
}

Object.keys(GURIZES_DIMENSOES).forEach(dim => {
  const estagio = GURIZES_DIMENSOES[dim][0]
  const msg = GURIZES_DIMENSOES[dim][1]
  global.gurizesTentar(`trava de dimensão ${dim}`, () => {
    const r = AStages.addRestrictionForDimension(`gurizes/dim/${dim.replace(':', '_')}`, estagio, dim)
    global.gurizesTentar('enterMessage', () => r.enterMessage(rl => Text.of(msg).red()))
  })
})

global.gurizesTentar('trava de receita netherite', () =>
  AStages.addRestrictionForRecipe('gurizes/receita/netherite', 'ato_4', 'minecraft:smithing',
    ['sword', 'axe', 'pickaxe', 'shovel', 'hoe', 'helmet', 'chestplate', 'leggings', 'boots']
      .map(p => `minecraft:netherite_${p}_smithing`)))

;['iceandfire:fire_dragon', 'iceandfire:ice_dragon', 'iceandfire:lightning_dragon'].forEach(mob => {
  global.gurizesTentar(`trava de mob ${mob}`, () =>
    AStages.addRestrictionForMob(`gurizes/mob/${mob.split(':')[1]}`, 'ato_6', mob).disableOverallSpawning())
})

;[['block_factorys_bosses:infernal_dragon', 'ato_2'], ['block_factorys_bosses:kraken', 'ato_3'], ['block_factorys_bosses:underworld_knight', 'ato_3']].forEach(par => {
  global.gurizesTentar(`trava de mob ${par[0]}`, () =>
    AStages.addRestrictionForMob(`gurizes/mob/${par[0].split(':')[1]}`, par[1], par[0]).disableOverallSpawning())
})

const GURIZES_ENC_TETO = [['ato_2', 2], ['ato_3', 3], ['ato_4', 4], ['ato_5', 5]]
const GURIZES_ENC_LISTA = ['minecraft:sharpness', 'minecraft:protection', 'minecraft:power', 'minecraft:smite', 'minecraft:bane_of_arthropods',
  'minecraft:fire_protection', 'minecraft:projectile_protection', 'minecraft:blast_protection', 'minecraft:efficiency', 'minecraft:fortune', 'minecraft:looting']

GURIZES_ENC_LISTA.forEach(enc => GURIZES_ENC_TETO.forEach(par =>
  global.gurizesTentar(`trava de encantamento ${enc} ${par[0]}`, () =>
    AStages.addRestrictionForEnchant(`gurizes/enc/${enc.split(':')[1]}_${par[0]}`, par[0], enc, 'great', par[1]))))

// A trava de raridade do Apotheosis (Raro no Ato III, Épico no IV, Mítico no V, Antigo no NG+ 1) saiu daqui em 08/11.
// A restrição por predicado do AStages derrubava o cliente: NPE em AClientItemPredicateRestriction.isRestricted ao
// mostrar qualquer tooltip, porque o modelo do predicado some do registro do cliente. Vai para o SealLock do mod.
