// priority: 100
// Modelos de predicado do AStages para selar raridades do Apotheosis (progressao-economia.md §3.3).
// Roda no startup (servidor e cliente), porque a restrição de servidor e o cliente precisam do mesmo modelo.
// NBT do Apotheosis 7.x: affix_data.rarity = "apotheosis:<raridade>" [validar no M1].

;['rare', 'epic', 'mythic', 'ancient'].forEach(raridade => {
  try {
    AModels.createPredicateModel(`gurizes:raridade_${raridade}`, stack => {
      const nbt = stack.nbt
      if (!nbt || !nbt.contains('affix_data')) return false
      return String(nbt.getCompound('affix_data').getString('rarity')) === `apotheosis:${raridade}`
    })
  } catch (err) {
    console.warn(`[gurizes] modelo de raridade ${raridade} não criado: ${err}`)
  }
})
