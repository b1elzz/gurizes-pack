// Espelho no cliente dos modelos de raridade (progressao-economia.md §3.3), para tooltip e JEI.
// No cliente o AStages expõe AModels por KubeJSClientModelUtils; a assinatura é a mesma do servidor.

const gurizesRaridadeCliente = stack => {
  try {
    if (!stack || !stack.hasTag()) return null
    const tag = stack.getTag()
    if (!tag.contains('affix_data')) return null
    return String(tag.getCompound('affix_data').getString('rarity'))
  } catch (err) {
    return null
  }
}

const gurizesModeloClienteExiste = id => {
  try {
    return !!Java.loadClass('com.alessandro.astages.engine.AClientModelManager').MODELS.getModel(id)
  } catch (err) {
    return false
  }
}

;['rare', 'epic', 'mythic', 'ancient'].forEach(raridade => {
  try {
    const id = `gurizes:raridade_${raridade}`
    if (gurizesModeloClienteExiste(id)) return
    AModels.createPredicateModel(id,
      stack => gurizesRaridadeCliente(stack) === `apotheosis:${raridade}`)
  } catch (err) {
    console.warn(`[gurizes] modelo de raridade ${raridade} (cliente) não criado: ${err}`)
  }
})
