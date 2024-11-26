let z = 0
player.onChat("1", function () {
    z = 4
    for (let index = 0; index < 5; index++) {
        blocks.fill(
        REDSTONE_WIRE,
        pos(9, 0, z),
        pos(15, 0, z),
        FillOperation.Replace
        )
        blocks.place(DARK_OAK_PRESSURE_PLATE, pos(12, 0, z))
        blocks.place(DISPENSER, pos(9, 0, z))
        blocks.place(DISPENSER, pos(15, 0, z))
        z += 2
    }
    agent.teleport(pos(12, 0, z), NORTH)
})
player.onChat("2", function () {
    agent.teleportToPlayer()
    agent.move(FORWARD, 3)
    agent.setItem(ACACIA_PRESSURE_PLATE, 1, 1)
    agent.place(FORWARD)
    agent.move(FORWARD, 2)
    for (let index = 0; index < 4; index++) {
        agent.setSlot(2)
        agent.setItem(REDSTONE_WIRE, 1, 2)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.setSlot(3)
    agent.move(FORWARD, 1)
    agent.setItem(STICKY_PISTON, 1, 3)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.place(FORWARD)
    agent.setSlot(4)
    agent.move(BACK, 1)
    agent.setItem(EMERALD_BLOCK, 1, 4)
    agent.place(FORWARD)
})
loops.forever(function () {
    if (blocks.testForBlock(EMERALD_BLOCK, world(-4, 0, 26))) {
        gameplay.title(mobs.target(RANDOM_PLAYER), "§a funcionando ", "")
        gameplay.timeSet(gameplay.time(NIGHT))
        for (let index = 0; index < 4; index++) {
            mobs.spawn(FIREWORKS_ROCKET, world(-4, 0, 26))
        }
    }
})
player.onItemInteracted(APPLE, function () {
    gameplay.title(mobs.target(ALL_PLAYERS), "§5 funcionando ", "§a Party Time")
    for (let index = 0; index < 8; index++) {
        agent.move(FORWARD, 20)
        agent.move(BACK, 20)
    }
})
player.onItemInteracted(DIAMOND, function () {
    gameplay.timeSet(gameplay.time(MIDNIGHT))
})
