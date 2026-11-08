// priority: 1000
// Gurizes RPG Fantasy: estágios AStages (progressao-economia.md §1.1–1.3).
// O mod gurizes concede os estágios de servidor (ato_2..ato_6, epilogo, panteao); este arquivo só declara
// os estágios e expõe utilitários globais usados pelos outros scripts.
// API conferida no jar astages-2.5.3-1.20.1 (javap): customizeStage(String[, String]) -> serverOnly/playerOnly/whenGranted;
// serverHasStage(String[, MinecraftServer]); addStageToServer(String, boolean, boolean, boolean).

global.GURIZES_ESTAGIOS_SERVIDOR = ['ato_1', 'ato_2', 'ato_3', 'ato_4', 'ato_5', 'ato_6', 'epilogo', 'ng_1', 'ng_2', 'ng_3', 'panteao']
global.GURIZES_ESTAGIOS_JOGADOR = ['juramentado',
  'classe_paladino', 'classe_berserker', 'classe_mago_elemental', 'classe_necromante', 'classe_cacador',
  'classe_lamina_arcana', 'classe_bardo', 'classe_druida', 'classe_monge', 'classe_assassino']

global.GURIZES_NOME_ESTAGIO = {
  ato_1: 'Ato I: A Coroa Oca', ato_2: 'Ato II: O Bosque que Sangra', ato_3: 'Ato III: A Forja Afundada',
  ato_4: 'Ato IV: O Olho da Tormenta', ato_5: 'Ato V: O Céu Partido', ato_6: 'Ato VI: O Trono do Selo',
  epilogo: 'Epílogo: o Selo Refeito', ng_1: 'Juramento Renovado: Ciclo 1', ng_2: 'Juramento Renovado: Ciclo 2',
  ng_3: 'Juramento Renovado: Ciclo 3', panteao: 'O Panteão Reconhece',
  juramentado: 'Juramentado'
}

const GURIZES_STAGE_ATTR = Java.loadClass('com.alessandro.astages.engine.store.StageAttributes')

global.gurizesTentar = (descricao, fn) => {
  try {
    return fn()
  } catch (err) {
    console.warn(`[gurizes] falhou: ${descricao}: ${err}`)
    return null
  }
}

global.gurizesServidorTem = (server, estagio) => {
  let r = global.gurizesTentar(`serverHasStage ${estagio}`, () => AStages.serverHasStage(estagio, server))
  if (r === null) r = global.gurizesTentar(`serverHasStage ${estagio} (sem server)`, () => AStages.serverHasStage(estagio))
  return r === true
}

global.gurizesJogadorTem = (player, estagio) =>
  global.gurizesTentar(`playerHasStage ${estagio}`, () => AStages.playerHasStage(player, estagio)) === true

global.gurizesAtoAtual = server => {
  if (global.gurizesServidorTem(server, 'epilogo')) return 7 + global.gurizesCicloNG(server)
  let a = 1
  for (let n = 2; n <= 6; n++) if (global.gurizesServidorTem(server, `ato_${n}`)) a = n
  return a
}

global.GURIZES_ESTAGIOS_SERVIDOR.forEach(estagio => {
  global.gurizesTentar(`customizeStage ${estagio}`, () => {
    const s = AStages.customizeStage(estagio, global.GURIZES_NOME_ESTAGIO[estagio] || estagio).serverOnly()
    global.gurizesTentar(`silenciar ${estagio}`, () => s.set(GURIZES_STAGE_ATTR.SHOW_DEFAULT, false))
    // Sem titleOnAdd aqui: o avanço de ato já tem o cartão de fim de ato do mod (HistoriaCenas) e, onde não há
    // cartão, o título curto do ActService. O título do AStages saía junto, em escala 4, maior que a tela, por cima
    // do cartão (visto no cliente em 08/11).
    global.gurizesTentar(`whenGranted ${estagio}`, () => s.whenGranted(e => {
      let server = null
      global.gurizesTentar('server do evento', () => { server = e.server })
      if (!server) server = Utils.server
      if (server && global.gurizesSincronizarNivel) global.gurizesSincronizarNivel(server)
    }))
  })
})

global.GURIZES_ESTAGIOS_JOGADOR.forEach(estagio => {
  global.gurizesTentar(`customizeStage ${estagio}`, () => {
    const s = AStages.customizeStage(estagio, global.GURIZES_NOME_ESTAGIO[estagio] || estagio).playerOnly()
    global.gurizesTentar(`silenciar ${estagio}`, () => s.set(GURIZES_STAGE_ATTR.SHOW_DEFAULT, false))
  })
})

global.gurizesDarEstagioJogador = (player, estagio) =>
  global.gurizesTentar(`add ${estagio}`, () => AStages.addStageToPlayer(player, estagio, false, false, false))

global.gurizesTirarEstagioJogador = (player, estagio) =>
  global.gurizesTentar(`remove ${estagio}`, () => AStages.removeStageFromPlayer(player, estagio, false, false, false))
