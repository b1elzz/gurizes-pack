// priority: 400
// Ressincronização das escolhas de Classe e Ofício (personagem.md §2.6).
// O poder "registro" de cada origem grava a tag de entidade gurizes.<camada>.<id>, o estágio AStages e o advancement
// interno. Se um callback se perder (troca de camada, crash, reload), no login corrigimos o estágio e o advancement a
// partir da tag, que é a fonte que o mod gurizes lê.

const GURIZES_CLASSES = ['paladino', 'berserker', 'mago_elemental', 'necromante', 'cacador', 'lamina_arcana', 'bardo', 'druida', 'monge', 'assassino']
const GURIZES_OFICIOS = ['ferreiro', 'alquimista', 'cozinheiro', 'explorador', 'mercador', 'encantador']

const gurizesSincronizarCamada = (player, camada, ids) => {
  ids.forEach(id => {
    const tag = `gurizes.${camada}.${id}`
    const estagio = `${camada}_${id}`
    const temTag = player.tags.contains(tag)
    const temEstagio = global.gurizesJogadorTem(player, estagio)
    if (temTag && !temEstagio) {
      player.server.runCommandSilent(`astages add ${player.username} ${estagio} true true`)
      player.server.runCommandSilent(`advancement grant ${player.username} only gurizes:interno/${estagio}`)
    } else if (!temTag && temEstagio) {
      player.server.runCommandSilent(`astages remove ${player.username} ${estagio} true true`)
      player.server.runCommandSilent(`advancement revoke ${player.username} only gurizes:interno/${estagio}`)
    }
  })
}

PlayerEvents.loggedIn(event => {
  const player = event.player
  global.gurizesTentar('ressincronizar classe', () => gurizesSincronizarCamada(player, 'classe', GURIZES_CLASSES))
  global.gurizesTentar('ressincronizar ofício', () => gurizesSincronizarCamada(player, 'oficio', GURIZES_OFICIOS))
})
