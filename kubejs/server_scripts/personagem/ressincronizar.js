// priority: 400
// Ressincronização das escolhas de Classe e Ofício (personagem.md §2.6).
// O poder "registro" de cada origem grava a tag de entidade gurizes.<camada>.<id>, o estágio AStages e o advancement
// interno. Se um callback se perder (troca de camada, crash, reload, morte), no login e no renascimento corrigimos tag,
// estágio e advancement a partir da origem escolhida no Origins (a tag é o fallback se a API do Origins falhar).

const GURIZES_CLASSES = ['paladino', 'berserker', 'mago_elemental', 'necromante', 'cacador', 'lamina_arcana', 'bardo', 'druida', 'monge', 'assassino']
const GURIZES_OFICIOS = ['ferreiro', 'alquimista', 'cozinheiro', 'explorador', 'mercador', 'encantador']
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

const gurizesRessincronizar = (server, uuid) => {
  const player = server.getPlayerList().getPlayer(uuid)
  if (!player || player.isRemoved()) return
  global.gurizesTentar('ressincronizar classe', () => gurizesSincronizarCamada(player, 'classe', GURIZES_CLASSES))
  global.gurizesTentar('ressincronizar ofício', () => gurizesSincronizarCamada(player, 'oficio', GURIZES_OFICIOS))
}

const gurizesAgendarRessincronizacao = event => {
  const server = event.server
  const uuid = event.player.getUUID()
  server.scheduleInTicks(20, () => gurizesRessincronizar(server, uuid))
}

PlayerEvents.loggedIn(gurizesAgendarRessincronizacao)
PlayerEvents.respawned(gurizesAgendarRessincronizacao)
