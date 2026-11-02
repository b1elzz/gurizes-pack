// priority: 700
// NG+ "Juramento Renovado" no plano A (progressao-economia.md §7) e ajustes de nível do mundo (§4.4).
//   /gurizes ng avancar           -> ciclo c+1 (até 3), estágio ng_c, +30 níveis
//   /gurizes nivel sincronizar    -> reaplica o nível do mundo a partir dos estágios
//   /gurizes nivel ajustar <n>    -> reduz/devolve o bônus de NG+ (loja de pós-jogo); nunca abaixo do alvo do ato
// Todos exigem permissão 2 (as quests usam recompensa de comando com elevate_perms).
// Sem reset do capítulo Juramento Eterno: pela D23 cada ciclo tem as próprias quests, lendo
// gurizes:ng/<c>/ato_N_vencido; resetar devolveria as recompensas dos ciclos anteriores.

const GURIZES_CICLOS_MAX = 3

const gurizesAvancarNG = server => {
  const c = global.gurizesCicloNG(server)
  if (c >= GURIZES_CICLOS_MAX) {
    server.tell(Text.of('O Juramento já foi renovado três vezes. Não há ciclo além deste.').gold())
    return 0
  }
  const novo = c + 1
  server.persistentData.putInt('gurizes_ng', novo)
  server.runCommandSilent(`astages server add ng_${novo}`)
  global.gurizesSincronizarNivel(server)
  server.runCommandSilent(`title @a subtitle {"text":"Ciclo ${novo}","color":"yellow"}`)
  server.runCommandSilent('title @a title {"text":"O Juramento se renova","color":"gold"}')
  return 1
}

const gurizesAjustarNivel = (server, delta) => {
  const maximo = 30 * global.gurizesCicloNG(server)
  let reducao = server.persistentData.getInt('gurizes_nivel_reducao') - delta
  reducao = Math.max(0, Math.min(maximo, reducao))
  server.persistentData.putInt('gurizes_nivel_reducao', reducao)
  global.gurizesSincronizarNivel(server)
  server.tell(Text.of(`Nível do mundo agora: +${server.persistentData.getInt('gurizes_nivel_mundo')}`).yellow())
  return 1
}

ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event
  event.register(Commands.literal('gurizes')
    .then(Commands.literal('ng')
      .requires(src => src.hasPermission(2))
      .then(Commands.literal('avancar').executes(ctx => gurizesAvancarNG(ctx.source.server)))
      .then(Commands.literal('ciclo').executes(ctx => {
        ctx.source.server.tell(Text.of(`Ciclo de NG+: ${global.gurizesCicloNG(ctx.source.server)}`).yellow())
        return 1
      })))
    .then(Commands.literal('nivel')
      .requires(src => src.hasPermission(2))
      .then(Commands.literal('sincronizar').executes(ctx => {
        global.gurizesSincronizarNivel(ctx.source.server)
        return 1
      }))
      .then(Commands.literal('ajustar')
        .then(Commands.argument('delta', Arguments.INTEGER.create(event))
          .executes(ctx => gurizesAjustarNivel(ctx.source.server, Arguments.INTEGER.getResult(ctx, 'delta')))))))
})
