// priority: 950
// Estágio de ato -> nível do mundo do Auto Leveling (progressao-economia.md §1.3 e §2.2).
// Quem concede o estágio é o mod gurizes (campanha-bosses.md §5.8). Aqui só traduzimos estágio em nível.
// Comando conferido no jar AutoLeveling-1.20-1.19b: /autoleveling level add <valor> e /autoleveling level get.
// Idempotente: guarda o acréscimo já aplicado em persistentData e só soma a diferença.

const GURIZES_NIVEL_POR_ESTAGIO = { ato_2: 3, ato_3: 6, ato_4: 10, ato_5: 15, ato_6: 20, epilogo: 25 }
const GURIZES_NIVEL_POR_CICLO_NG = 30

global.gurizesCicloNG = server => server.persistentData.getInt('gurizes_ng')

global.gurizesNivelAlvo = server => {
  let alvo = 0
  Object.keys(GURIZES_NIVEL_POR_ESTAGIO).forEach(estagio => {
    if (global.gurizesServidorTem(server, estagio)) alvo = Math.max(alvo, GURIZES_NIVEL_POR_ESTAGIO[estagio])
  })
  const reducao = server.persistentData.getInt('gurizes_nivel_reducao')
  return Math.max(0, alvo + GURIZES_NIVEL_POR_CICLO_NG * global.gurizesCicloNG(server) - reducao)
}

global.gurizesSincronizarNivel = server => {
  const atual = server.persistentData.getInt('gurizes_nivel_mundo')
  const alvo = global.gurizesNivelAlvo(server)
  if (alvo !== atual) {
    server.runCommandSilent(`autoleveling level add ${alvo - atual}`)
    server.persistentData.putInt('gurizes_nivel_mundo', alvo)
    console.info(`[gurizes] nível do mundo: ${atual} -> ${alvo}`)
  }
}

ServerEvents.loaded(event => global.gurizesSincronizarNivel(event.server))

PlayerEvents.loggedIn(event => global.gurizesSincronizarNivel(event.server))
