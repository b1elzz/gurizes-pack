// Espelho no cliente dos modelos de raridade (progressao-economia.md §3.3), para tooltip e JEI.
// No cliente o AStages expõe AModels por KubeJSClientModelUtils; a assinatura é a mesma do startup.

;['rare', 'epic', 'mythic', 'ancient'].forEach(raridade => {
  try {
    AModels.createPredicateModel(`gurizes:raridade_${raridade}`, stack => {
      const nbt = stack.nbt
      if (!nbt || !nbt.contains('affix_data')) return false
      return String(nbt.getCompound('affix_data').getString('rarity')) === `apotheosis:${raridade}`
    })
  } catch (err) {
    console.warn(`[gurizes] modelo de raridade ${raridade} (cliente) não criado: ${err}`)
  }
})
