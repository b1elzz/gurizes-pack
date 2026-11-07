// priority: 850
// Modelos de predicado do AStages para selar raridades do Apotheosis (progressao-economia.md §3.3).
// Roda nos server_scripts porque o AStages limpa os modelos do servidor a cada carga de mundo e /reload.
// NBT do Apotheosis 7.x: affix_data.rarity = "apotheosis:<raridade>".

global.GURIZES_RARIDADES_SELADAS = ['rare', 'epic', 'mythic', 'ancient']

global.gurizesRaridadeApotheosis = stack => {
  try {
    if (!stack || !stack.hasTag()) return null
    const tag = stack.getTag()
    if (!tag.contains('affix_data')) return null
    return String(tag.getCompound('affix_data').getString('rarity'))
  } catch (err) {
    return null
  }
}

global.GURIZES_RARIDADES_SELADAS.forEach(raridade => {
  global.gurizesTentar(`modelo de raridade ${raridade}`, () =>
    AModels.createPredicateModel(`gurizes:raridade_${raridade}`,
      stack => global.gurizesRaridadeApotheosis(stack) === `apotheosis:${raridade}`))
})
