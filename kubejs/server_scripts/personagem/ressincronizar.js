// priority: 400
// Ressincronização da escolha de Classe (personagem.md §2.6).
// O poder "registro" de cada origem grava a tag de entidade gurizes.<camada>.<id>, o estágio AStages e o advancement
// interno. Se um callback se perder (troca de camada, crash, reload, morte), no login e no renascimento corrigimos tag,
// estágio e advancement a partir da origem escolhida no Origins (a tag é o fallback se a API do Origins falhar).

const GURIZES_CLASSES = ['paladino', 'berserker', 'mago_elemental', 'necromante', 'cacador', 'lamina_arcana', 'bardo', 'druida', 'monge', 'assassino']
// Resíduos do Ofício (camada removida na 0.1.2, D28): o Origins já tira os poderes da origem sumida, mas as marcas
// gravadas pelo antigo poder "registro" (tag e estágio) ficam no jogador e são limpas aqui.
const GURIZES_OFICIOS_LEGADO = ['ferreiro', 'alquimista', 'cozinheiro', 'explorador', 'mercador', 'encantador']
const GURIZES_ORIGINS_COMPAT = Java.loadClass('dev.gurizes.rpg.compat.OriginsCompat')

const gurizesOrigemDaCamada = (player, camada) => {
  const mapa = global.gurizesTentar('OriginsCompat.choices', () => GURIZES_ORIGINS_COMPAT.choices(player))
  if (!mapa || mapa.isEmpty()) return undefined
  const origem = mapa.get(`gurizes:${camada}`)
  if (!origem) return null
  const s = String(origem)
  return s.startsWith(`gurizes:${camada}/`) ? s.substring(`gurizes:${camada}/`.length) : null
}

const gurizesSincronizarCamada = (player, camada, ids) => {
  const escolhida = gurizesOrigemDaCamada(player, camada)
  ids.forEach(id => {
    const tag = `gurizes.${camada}.${id}`
    const estagio = `${camada}_${id}`
    const deve = escolhida === undefined ? player.tags.contains(tag) : escolhida === id
    if (deve) {
      if (!player.tags.contains(tag)) player.addTag(tag)
      if (!global.gurizesJogadorTem(player, estagio)) global.gurizesDarEstagioJogador(player, estagio)
      player.server.runCommandSilent(`advancement grant ${player.username} only gurizes:interno/${estagio}`)
    } else if (player.tags.contains(tag) || global.gurizesJogadorTem(player, estagio)) {
      player.removeTag(tag)
      global.gurizesTirarEstagioJogador(player, estagio)
      player.server.runCommandSilent(`advancement revoke ${player.username} only gurizes:interno/${estagio}`)
    }
  })
}

global.gurizesLimparOficioLegado = player => {
  GURIZES_OFICIOS_LEGADO.forEach(id => {
    const tag = `gurizes.oficio.${id}`
    const estagio = `oficio_${id}`
    if (player.tags.contains(tag)) player.removeTag(tag)
    if (global.gurizesJogadorTem(player, estagio)) global.gurizesTirarEstagioJogador(player, estagio)
  })
}

const gurizesRessincronizar = (server, uuid) => {
  const player = server.getPlayerList().getPlayer(uuid)
  if (!player || player.isRemoved()) return
  global.gurizesTentar('ressincronizar classe', () => gurizesSincronizarCamada(player, 'classe', GURIZES_CLASSES))
  global.gurizesTentar('limpar ofício legado', () => global.gurizesLimparOficioLegado(player))
  console.info(`[gurizes] classe ressincronizada: ${player.username}`)
}

const gurizesAgendarRessincronizacao = event => {
  const server = event.server
  const uuid = event.player.getUuid()
  server.scheduleInTicks(20, () => gurizesRessincronizar(server, uuid))
}

PlayerEvents.loggedIn(gurizesAgendarRessincronizacao)
PlayerEvents.respawned(gurizesAgendarRessincronizacao)
