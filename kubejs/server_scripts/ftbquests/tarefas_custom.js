// Gerado por docs/build-log/conteudo/gerar_quests.py: não editar à mão.
// Tarefas custom do FTB Quests (FTB XMod Compat): progresso lido de placares do mod gurizes.
// Mapa: id da tarefa -> [placar, alvo].
const GURIZES_TAREFAS_PLACAR = {
  "23722C643BB5C08F": [
    "gurizes_pvp_vitorias",
    5
  ],
  "2FD8A0F63072E023": [
    "gurizes_pvp_vitorias",
    10
  ],
  "566AB935DA01FFC0": [
    "gurizes_pvp_vitorias",
    25
  ]
}

FTBQuestsEvents.customTask(event => {
  const id = String(event.task.codeString).toUpperCase()
  const alvo = GURIZES_TAREFAS_PLACAR[id]
  if (!alvo) return
  event.maxProgress = alvo[1]
  event.checkTimer = 100
  event.check = (task, player) => {
    const sb = player.server.scoreboard
    const obj = sb.getObjective(alvo[0])
    if (!obj) return
    if (!sb.hasPlayerScore(player.username, obj)) return
    const valor = sb.getOrCreatePlayerScore(player.username, obj).score
    task.progress = Math.min(alvo[1], valor)
  }
})
