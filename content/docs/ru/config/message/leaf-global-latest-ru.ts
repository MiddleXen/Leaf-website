import type { ConfigMessages } from "@/components/config/config-viewer"
import type config from "@/components/config/data/leaf-global-latest"

const ru: ConfigMessages<typeof config> = {
  async: {
    __desc__: `Раздел содержит асинхронные модули, разгружающие основной поток сервера (Server Thread).`,
    "async-chunk-send": {
      enabled: {
        desc: `Асинхронная упаковка и отправка пакетов чанков.<br>
Существенно снижает нагрузку на основной поток, особенно при массовом входе игроков, телепортациях и полётах на элитрах.<br>
<br>
__⚡Рекомендуемое значение: \`true\`__`,
      },
    },
    "async-entity-tracker": {
      enabled: {
        desc: `Асинхронный трекер сущностей.<br>
Заметно повышает производительность в локациях с высокой плотностью сущностей.<br>
<br>
__⚡Рекомендуемое значение: \`true\`__
                <div class="warning custom-block">
                    <p class="custom-block-title custom-block-title-default">Экспериментально</p>
                    Экспериментально feature, actively testing, please report any bugs you encounter.
                    </div>`,
      },
      threads: {
        desc: `Максимальное количество потоков для асинхронного трекера сущностей.<br>
При значении &leq; \`0\` используется 1/4 ядер CPU (минимум 1).<br>
<br>
__⚡Рекомендуемое значение: 1/2 ядер CPU__`,
      },
    },
    "async-mob-spawning": {
      enabled: {
        desc: `Асинхронная подготовка расчётов для спавна мобов.<br>
На серверах с частым спавном мобов даёт до 15% прироста производительности. Для работы требуется параметр Paper \`per-player-mob-spawns: true\`.`,
      },
    },
    "async-pathfinding": {
      enabled: {
        desc: `Асинхронный поиск пути для мобов.<br>
Выносит тяжёлые расчёты навигации мобов с основного потока сервера.<br>
<br>
__⚡Рекомендуемое значение: \`true\`__`,
      },
      keepalive: {
        desc: `Время удержания потоков (keepalive), потоки без задач завершаются по истечении времени.<br>
(Единица измерения: секунды)`,
      },
      "max-threads": {
        desc: `Максимальное количество потоков для асинхронного поиска пути.<br>
При значении &leq; \`0\` используется 1/4 ядер CPU (минимум 1).<br>
<br>
__⚡Рекомендуемое значение: 1/3 ядер CPU__`,
      },
      "queue-size": {
        desc: `Максимальный размер очереди задач поиска пути.<br>
При значении &leq; \`0\` размер рассчитывается динамически как \`max-threads * 256\`.`,
      },
      "reject-policy": {
        desc: `Политика поведения при переполнении очереди задач поиска пути.<br>
<ul>
<li>\`FLUSH_ALL\`: Все ожидающие задачи немедленно выполняются на основном потоке сервера.</li>
<li>\`CALLER_RUNS\`: Только поступившая задача выполняется на основном потоке.</li>
</ul>
<br>
__⚡Рекомендуемое значение: \`CALLER_RUNS\`__`,
      },
    },
    "async-playerdata-save": {
      enabled: {
        desc: `Асинхронное сохранение данных игроков для устранения дисковых лаг-спайков при операциях ввода-вывода.`,
      },
    },
    "parallel-world-ticking": {
      "async-unsafe-read-handling": {
        desc: `Обработка небезопасных чтений в системе параллельного тикинга.<br>
__⚡Рекомендуемое значение: \`BUFFERED\`__`,
      },
      "disable-hard-throw": {
        desc: `Отключает критические падения сервера (hard throw) при ошибках параллельного тикинга.<br>
Используйте с осторожностью на этапе тестирования.
                <div class="tip custom-block">
                    <p class="custom-block-title custom-block-title-default">Внимание</p>
                    This may mask underlying issues, but it can help prevent crashes during the testing stage of server development. Use with caution.
                    </div>`,
      },
      enabled: {
        desc: `Включить параллельную обработку различных миров в отдельных потоках.<br>
Концепция разработана проектом [SparklyPaper](https://github.com/SparklyPower/SparklyPaper). Каждый мир обрабатывается в своём потоке, снижая нагрузку на один поток.
                <div class="warning custom-block">
                    <p class="custom-block-title custom-block-title-default">Экспериментально</p>
                    Экспериментально feature, potentially unstable, and may cause compatibility issues with some plugins.
                    </div>`,
      },
      "log-container-creation-stacktraces": {
        desc: `Whether to log stacktraces when containers (like Block Entities or Entities) are created during parallel ticking.<br>
                    This is useful for debugging potential concurrency issues.`,
      },
      threads: {
        desc: `Количество потоков для параллельной обработки миров.`,
      },
    },
  },
  fixes: {
    __desc__: `Раздел содержит исправления ошибок и багфиксы для специфических проблем.`,
    "prevent-moving-into-weak-loaded-chunks": {
      __desc__: `Предотвращение перемещения сущностей в слабозагруженные чанки (weak-loaded chunks).`,
      enabled: {
        desc: `Включите эту опцию (\`true\`), чтобы активировать параметры ниже.`,
      },
      projectiles: {
        desc: `Предотвращать ли перемещение снарядов (стрелы, трезубцы и т.д.) в слабозагруженные чанки.`,
      },
    },
    "vanilla-bug-fix": {
      __desc__: `Раздел содержит исправления багов ванильного Minecraft.`,
      "mc-270656": {
        desc: `Исправляет ошибочную выдачу достижения «Кому вообще нужны ракеты?».<br>
Ссылка на Mojira: [MC-270656](https://mojira.dev/MC-270656).`,
      },
      "mc-301114": {
        desc: `Исправляет некорректное поведение при обработке редстоун-компонентов.<br>
Ссылка на Mojira: [MC-301114](https://mojira.dev/MC-301114).`,
      },
      "mc-301114-max-entries": {
        desc: `Максимальное количество записей для исправления бага MC-301114.`,
      },
      "mc-152094": {
          desc: `Исправляет баг [MC-152094](https://mojira.dev/MC-152094).`,
      },
    },
  },
  "gameplay-mechanisms": {
    __desc__: `Раздел содержит тонкие настройки игровых механик.`,
    "afk-command": {
      enabled: {
        desc: `Разрешить ли игрокам использовать встроенную команду \`/afk\`.`,
      },
    },
    "allow-tripwire-dupe": {
      desc: `Разрешить ли дюп нитей на растяжках.`,
    },
    "death-item-drop-knockback": {
      "drop-around": {
        desc: `Разбрасывать ли предметы вокруг игрока при смерти.`,
      },
      "horizontal-force": {
        desc: `Сила горизонтального импульса при выпадении предметов после смерти игрока.`,
      },
      "vertical-force": {
        desc: `Сила вертикального импульса при выпадении предметов после смерти игрока.`,
      },
    },
    "ice-and-snow-chance": {
      desc: `Шанс таяния или накопления снега и льда.
                <table>
                <tr><td><b>Значения для целей</b></td><td></td></tr>
                <tr><td><i>Оптимизация</i></td><td><code>384</code></td></tr>
                <tr><td><i>Ванильное поведение</i></td><td><code>48</code></td></tr>
                </table>`,
    },
    "inventory-overflow-event": {
      enabled: {
        desc: `Включить ли вызов события переполнения инвентаря.
                <div class="tip custom-block">
                    <p class="custom-block-title custom-block-title-default">Внимание</p>
                    This is not a proper solution to use! Please redesign your plugin logic to use the returned map of the \`Inventory#addItem\` method as soon as possible!
                    </div>`,
      },
      "listener-class": {
        desc: `Класс слушателя события переполнения инвентаря.`,
      },
    },
    knockback: {
      __desc__: `Настройки отбрасывания (knockback).`,
      "can-player-knockback-zombie": {
        desc: `Могут ли игроки отбрасывать зомби при ударе.`,
      },
      "egg-knockback-players": {
        desc: `Отбрасывают ли брошенные куриные яйца игроков.`,
      },
      "flush-location-while-knockback-player": {
        desc: `Немедленно синхронизировать ли позицию игрока при отбрасывании.
                <div class="warning custom-block">
                    <p class="custom-block-title custom-block-title-default">Экспериментально</p>
                    Экспериментально feature, actively testing, please report any bugs you encounter.
                    </div>`,
      },
      "old-blast-protection-explosion-knockback": {
        desc: `Использовать ли старую механику отбрасывания от взрывов версий <= 1.20.4 с чарами защиты от взрывов.`,
      },
      "snowball-knockback-players": {
        desc: `Отбрасывают ли брошенные снежки игроков.`,
      },
    },
    "only-player-pushable": {
      desc: `Могут ли только игроки толкать другие сущности.
                <div class="tip custom-block">
                <p class="custom-block-title custom-block-title-default">Внимание</p>
                It can break mob farms that are using mob collision to push mobs to fall or kill mobs by exceeding the value of the [maxEntityCramming](https://minecraft.wiki/w/Game_rule#:~:text=entity%20cramming%20damage) gamerule.
                </div>`,
    },
    player: {
      "max-use-item-distance": {
        desc: `Максимальная дистанция взаимодействия с предметом в руке.
                <div class="tip custom-block">
                    <p class="custom-block-title custom-block-title-default">Внимание</p>
                    If set to \`-1\` or any large positive values, players can use some packet modules of hack clients, and are also able to use [Nocom Exploit](https://github.com/nerdsinspace/nocom-explanation)! Adjusting this option requires careful consideration of potential exploits.
                    </div>`,
      },
    },
    "spawner-settings": {
      checks: {
        "check-for-nearby-players": {
          desc: `Проверять ли наличие игроков поблизости перед попыткой спавна моба спавнером.`,
        },
        "ignore-spawn-rules": {
          desc: `Игнорировать ли дополнительные правила спавна мобов для рассадников (спавнеров).`,
        },
        "light-level-check": {
          desc: `Проверять ли уровень освещения перед спавном моба из рассадника.`,
        },
        "spawner-block-checks": {
          desc: `Предотвращать ли спавн, если точка спавна заблокирована твёрдыми блоками.`,
        },
        "spawner-max-nearby-check": {
          desc: `Проверять ли превышение максимального числа мобов поблизости от спавнера.`,
        },
        "water-prevent-spawn-check": {
          desc: `Предотвращать ли спавн, если в точке спавна находится вода.`,
        },
      },
      enabled: {
        desc: `Включить ли пользовательские настройки рассадников монстров (спавнеров).`,
      },
      "max-spawn-delay": {
        desc: `Максимальная задержка между попытками спавна в рассаднике монстров.<br>
(Единица измерения: тики)`,
      },
      "min-spawn-delay": {
        desc: `Минимальная задержка между попытками спавна в рассаднике монстров.<br>
(Единица измерения: тики)`,
      },
    },
    "use-spigot-item-merging-mechanism": {
      desc: `Использовать ли алгоритм объединения лежащих предметов от Spigot.
                <table>
                <tr><td><b>Значения для целей</b></td><td></td></tr>
                <tr><td><i>SMP friendly</i></td><td><code>true</code></td></tr>
                <tr><td><i>Ванильное поведение</i></td><td><code>false</code></td></tr>
                </table>`,
    },
    "use-vanilla-hopper": {
      desc: `Использовать ли строго ванильное поведение воронок.
                <table>
                <tr><td><b>Значения для целей</b></td><td></td></tr>
                <tr><td><i>SMP friendly</i></td><td><code>true</code></td></tr>
                <tr><td><i>Ванильное поведение</i></td><td><code>false</code></td></tr>
                </table>`,
    },
  },
  misc: {
    __desc__: `Раздел содержит разнообразные дополнительные функции и настройки.`,
    "connection-message": {
      __desc__: `Настройки сообщений о подключении и отключении игроков.
                <div class="tip custom-block">
                <p class="custom-block-title custom-block-title-default">API / Plugin Friendly</p>
                This feature is API / plugin-friendly. It means that the connection message content can be overridden by plugins using \`PlayerJoinEvent\` or \`PlayerQuitEvent\`.
                </div>`,
      join: {
        enabled: {
          desc: `Отправлять ли сообщение в чат при входе игрока на сервер.`,
        },
        message: {
          desc: `Текст сообщения о входе игрока.`,
        },
      },
      quit: {
        enabled: {
          desc: `Отправлять ли сообщение в чат при выходе игрока с сервера.`,
        },
        message: {
          desc: `Текст сообщения о выходе игрока.`,
        },
      },
    },
    "disable-world-data-saving": {
      worlds: {
        desc: `Список миров, для которых отключено сохранение на диск.`,
      },
    },
    "including-5s-in-get-tps": {
      desc: `Включать ли 5-секундный показатель TPS в вызов API Leaf.
                <div class="tip custom-block">
                <p class="custom-block-title custom-block-title-default">Want to Go Deeper?</p>
                If you are using the Leaf API for your plugins. Or running on Leaf and using reflection to get TPS, you can use \`Bukkit#getTPSIncluding5SecondAverage\`, to get the TPS array including 5-second TPS \`[5s, 1m, 5m, 15m]\`.<br>
                Also, you can use \`Bukkit#get5SecondTPSAverage\` to get the average value of 5-second TPS in \`double\`.
                </div>`,
    },
    "region-format": {
      __desc__: `Формат регионов Linear со сжатием zstd вместо zlib.`,
      "format-name": {
        desc: `Имя формата регионов (\`MCA\`, \`B_LINEAR\`, \`LINEAR_V2\`). Рекомендуется \`B_LINEAR\`.
                <table>
                    <tr><th>Format</th><th>Description</th></tr>
                    <tr><td><code>MCA</code></td><td>Standard Minecraft ANVIL format using zlib compression.</td></tr>
                    <tr><td><code>B_LINEAR</code></td><td>Buffered Linear (or \`blinear\` for short) is a region format developed by [Luminol](https://github.com/LuminolMC/Luminol) and is currently on v3. Compared with Linear v2, it replaces the original Linear format's in-memory buffer with a swap-file-based design, and provides lower memory usage and faster chunk loading.</td></tr>
                    <tr><td><code>LINEAR_V2</code></td><td>Linear v2 implementation originates from [Xymb](https://github.com/xymb-endcrystalme)'s [Abomination](https://github.com/xymb-endcrystalme/Abomination). It is compatible with both v1 and v2 region files. Region files in the v1 format are automatically converted to v2 when loaded.</td></tr>
                    </table>
                    If set to \`MCA\`, this \`region-format\` option will be disabled.<br>
                    <br>
                    Due to Linear v2 having many design flaws and being very dangerous to production, we strongly recommend that you use Buffered Linear.`,
      },
      "compress-level": {
        desc: `Уровень сжатия формата Linear.`,
      },
      "io-thread-count": {
        desc: `Количество рабочих потоков формата регионов Linear.`,
      },
      "io-flush-delay": {
        desc: `Задержка сброса данных в файл региона при отсутствии операций записи.<br>
(Единица измерения: миллисекунды)
                <table>
                    <tr><td><b>Значения по умолчанию</b></td><td></td></tr>
                    <tr><td><i>B_LINEAR</i></td><td><code>3000</code></td></tr>
                    <tr><td><i>LINEAR_V2</i></td><td><code>100</code></td></tr>
                    </table>`,
      },
      "linear-use-virtual-thread": {
        desc: `Использовать ли виртуальные потоки Java 21 для формата Linear V2.`,
      },
    },
    "lag-compensation": {
      "enable-for-lava": {
        desc: `Включить ли компенсацию лагов для растекания лавы.`,
      },
      "enable-for-water": {
        desc: `Включить ли компенсацию лагов для растекания воды.`,
      },
      enabled: {
        desc: `Компенсация лагов предназначена для сглаживания игрового процесса во время просадок TPS.`,
      },
    },
    message: {
      "unknown-command": {
        desc: `Сообщение о неизвестной команде, отправляемое игроку.
                <div class="tip custom-block">
                    <p class="custom-block-title custom-block-title-default">API / Plugin Friendly</p>
                    This feature is API / plugin-friendly. It means that this message can be overridden by plugins using \`UnknownCommandEvent#message\` or \`UnknownCommandEvent#setMessage\`.
                    </div>`,
      },
    },
    rebrand: {
      "server-gui-name": {
        desc: `Заголовок графического окна консоли сервера.`,
      },
      "server-mod-name": {
        desc: `Название ядра сервера, отображаемое на экране отладки F3 клиента.`,
      },
    },
    "remove-change-non-editable-sign-warning": {
      desc: `Отключить ли предупреждение в консоли при попытке редактирования нередактируемой таблички.`,
    },
    "remove-spigot-check-bungee-config": {
      desc: `Разрешить ли вход через прокси без проверки настроек BungeeCord в Spigot.
                <div class="warning custom-block">
                <p class="custom-block-title custom-block-title-default">Предупреждение</p>
                This option is not recommended to touch, unless you are sure what you are doing.<br>
                And it may be removed in the future.
                </div>`,
    },
    "secure-seed": {
      enabled: {
        desc: `Включить ли безопасный сид (защита от взлома сида мира по рудам).
                <div class="warning custom-block">
                    <p class="custom-block-title custom-block-title-default">Предупреждение</p>
                    The secure seed fundamentally changes the positions of ore and structure compared to vanilla.<br>
                    It only applies to newly generated chunks. Thus, you must prepare a new world if you want to enable this option.<br>
                    Once this option is enabled, you can not disable it to return to the vanilla generation, unless you pre-generate the entire world, or newly generated chunks will have terrain mismatch.
                    </div>`,
      },
    },
    sentry: {
      __desc__: `Интеграция с сервисом мониторинга ошибок Sentry.`,
      dsn: {
        desc: `Ключ DSN для отправки отчётов в Sentry.`,
      },
      "log-level": {
        desc: `Минимальный уровень важности логов для отправки в Sentry.`,
      },
      "only-log-thrown": {
        desc: `Отправлять ли только логи, содержащие Java Throwable (исключения со стек-трейсом).`,
      },
    },
    "vanilla-username-check": {
      "allow-old-players-join": {
        desc: `Разрешить ли старым игрокам вход после изменения регулярного выражения никнеймов.
                <div class="warning custom-block">
                    <p class="custom-block-title custom-block-title-default">Экспериментально</p>
                    Removing all username checks for old players is __UNSAFE AND DANGEROUS, USE AT YOUR OWN RISK!__
                    </div>`,
      },
      "enforce-skull-validation": {
        desc: `Принудительная валидация голов игроков во избежание дисконнектов клиентов.`,
      },
      "remove-all-check": {
        desc: `Полностью отключить проверку никнеймов, разрешая любые символы (включая кириллицу).
                <div class="warning custom-block">
                    <p class="custom-block-title custom-block-title-default">Экспериментально</p>
                    Removing all username checks is __UNSAFE AND DANGEROUS, USE AT YOUR OWN RISK!__
                    </div>`,
      },
      "use-username-regex": {
        desc: `Использовать ли регулярное выражение для проверки допустимых символов в никнейме.`,
      },
      "username-regex": {
        desc: `Регулярное выражение допустимых символов в никнеймах.`,
      },
    },
  },
  network: {
    __desc__: `Раздел содержит сетевые настройки и протоколы.`,
    OptimizeNonFlushPacketSending: {
      desc: `Whether to optimize the sending of non-flushed packets by using Netty's [\`lazyExecute\`](https://netty.io/4.2/api/io/netty/util/concurrent/SingleThreadEventExecutor.html#lazyExecute(java.lang.Runnable)) method. This can reduce thread contention and wakeup calls for certain types of network operations.<br>
                <br>
                <div class="warning custom-block">
                <p class="custom-block-title custom-block-title-default">Warning</p>
                This option is known to be __INCOMPATIBLE__ with ProtocolLib and may cause issues with other plugins that extensively manipulate network packets.<br>
                Requires restarting the server to take effect. Use with extreme caution.
                </div>`,
    },
    "async-switch-state": {
      desc: `Whether to process the connection state switch logic of the player asynchronously.<br>
                This can resolve the main thread blocking issue caused by using exploits due to vanilla logic's design flaw.<br>
                <br>
                __⚡Recommended value: \`true\`__ `,
    },
    "chat-message-signature": {
      desc: `Whether to enable chat message signature, which was introduced in Minecraft 1.19.1.<br>
                <ul>
                <li>If set to \`true\`, messages are signed and able to report just like in vanilla.</li>
                <li>If set to \`false\`, the chat signature is disabled. Players are unable to report messages, and the insecure warning pop-up will be disabled when the player joins the server.</li>
                </ul>
                <br>
                __⚡Recommended value: \`false\`__ (Only for offline-mode server or servers that have alternative moderation methods)`,
    },
    "protocol-support": {
      __desc__: `Поддержка специфических клиентских протоколов.
                <div class="tip custom-block">
                <p class="custom-block-title custom-block-title-default">Внимание</p>
                The protocol support may cause incompatibility with the [ViaVersion](https://modrinth.com/plugin/viaversion).<br>
                We recommend players use a client that has the same version as the server core and install the latest corresponding mod; otherwise, they may be unable to join the server.
                </div>`,
      "appleskin-protocol": {
        desc: `Whether to enable [AppleSkin](https://modrinth.com/mod/appleskin) protocol support.<br>
                    If set to \`true\`, players who have the AppleSkin mod installed can display the accurate saturation/exhaustion values on the client.`,
      },
      "appleskin-protocol-sync-tick-interval": {
        desc: `How often the server should synchronize AppleSkin data to clients with AppleSkin installed.<br>
                    This only has any effect if \`appleskin-protocol\` above is \`true\`.<br>
                    (Unit: tick, default value 20 ticks = 1 second)`,
      },
      "asteorbar-protocol": {
        desc: `Whether to enable [AsteorBar](https://modrinth.com/mod/asteorbar) protocol support.<br>
                    If set to \`true\`, players who have the AsteorBar mod installed can display the accurate saturation/exhaustion values on the client.`,
      },
      "chatimage-protocol": {
        desc: `Whether to enable [ChatImage](https://modrinth.com/mod/chatimage) protocol support.<br>
                    If set to \`true\`, players who have the ChatImage mod installed can see the image sent by others using the CICode format.`,
      },
      "do-a-barrel-roll-allow-thrusting": {
        desc: `Whether to allow players to enable \`enable_thrust\` option in their client configuration.`,
      },
      "do-a-barrel-roll-force-enabled": {
        desc: `Whether to force the mod to be enabled for all players who have this mod installed, regardless of their client configuration.`,
      },
      "do-a-barrel-roll-force-installed": {
        desc: `Whether to reject players who join if they don't have this mod installed in their clients.`,
      },
      "do-a-barrel-roll-installed-timeout": {
        desc: `The amount of time to wait for a client to respond to the \`do_a_barrel_roll:config_sync\` packet.<br>
                    (Единица измерения: тики)<br>
                    If set to \`true\`, players who have not installed this mod in their clients will be kicked after this timeout is reached.`,
      },
      "do-a-barrel-roll-protocol": {
        desc: `Whether to enable [Do a Barrel Roll](https://modrinth.com/mod/do-a-barrel-roll) protocol support.<br>
                    If set to \`true\`, the visual effects of Do a Barrel Roll can be synchronized to other players who have this mod installed.`,
      },
      "jade-protocol": {
        desc: `Whether to enable [Jade](https://modrinth.com/mod/jade) protocol support.<br>
                    If set to \`true\`, players who have the Jade mod installed can display item information inside the storage container, progress of the furnace, brewing stand, foods on the campfire, bee data in the beehive, and more vanilla-friendly features.`,
      },
      "strict-mode": {
        desc: `Whether to throw the error instead of logging it when an exception happens while handling Leaves's protocol features.`,
      },
      "syncmatica-protocol": {
        desc: `Whether to enable [Syncmatica](https://modrinth.com/mod/syncmatica) protocol support.<br>
                    If set to \`true\`, players who have Syncmatica mod installed can upload their [Litematica](https://modrinth.com/mod/litematica) schematic files or download shared schematics files from the server. Every player with the Syncmatica mod installed can access shared schematics uploaded by others.`,
      },
      "syncmatica-quota": {
        desc: `Включить ли ограничение квоты для Syncmatica.`,
      },
      "syncmatica-quota-limit": {
        desc: `Лимит квоты для Syncmatica (в килобайтах).`,
      },
      "xaero-map-protocol": {
        desc: `Whether to enable [XaeroMap](https://modrinth.com/mod/xaeros-minimap) protocol support.<br>
                    If set to \`true\`, players who have Xaero's MiniMap mod or Xaero's WorldMap mod installed can store players' coordinate points and death points based on the server's \`protocol-support.xaero-map-server-id\` below.`,
      },
      "xaero-map-server-id": {
        desc: `Уникальный идентификатор сервера для карты Xaero.`,
      },
    },
  },
  performance: {
    __desc__: `Раздел содержит разнообразные параметры оптимизации производительности сервера.`,
    "cache-biome": {
      advancements: {
        desc: `Whether to cache the biome in player advancement calculation logic.<br>
                    <br>
                    __⚡Recommended value: \`true\`__`,
      },
      enabled: {
        desc: `Whether to cache the biome data of the block location, instead of recalculating the biome every time searching.<br>
                    <br>
                    __⚡Recommended value: \`true\` (Also requires enabling options below)__`,
      },
      "mob-spawning": {
        desc: `Whether to cache the biome in mob spawning logic.<br>
                    <br>
                    __⚡Recommended value: \`true\`__`,
      },
    },
    "check-survival-before-growth": {
      "cactus-check-survival": {
        desc: `Whether to check if the cactus can survive before trying to grow.<br>
                    This can help improve performance if huge cactus farms exist on the server.<br>
                    <br>
                    __⚡Recommended value: \`true\`__`,
      },
    },
    "create-snapshot-on-retrieving-blockstate": {
      desc: `Создавать ли снимок (снапшот) данных при запросе состояния блока плагинами. Отключение заметно повышает скорость, но требует корректности плагинов.`,
    },
    dab: {
      __desc__: `Удалённая активация сущностей (Distant Activation Behavior / DAB) снижает частоту тиков ИИ для мобов вдали от игроков.`,
      "activation-dist-mod": {
        desc: `Модификатор дистанции активации сущностей в DAB.`,
      },
      "blacklisted-entities": {
        desc: `Чёрный список сущностей, которые не должны подвергаться ограничению тиков DAB (например, жители на фермах).`,
      },
      "dont-enable-if-in-water": {
        desc: `Не активировать DAB для мобов в воде во избежание их удушения из-за спящего ИИ.`,
      },
      enabled: {
        desc: `Включить ли систему оптимизации DAB.
                <table>
                    <tr><td><b>Значения для целей</b></td><td></td></tr>
                    <tr><td><i>Оптимизация</i></td><td><code>true</code></td></tr>
                    <tr><td><i>Ванильное поведение</i></td><td><code>false</code> (or see <code>dab.blacklisted-entities</code> below for more)</td></tr>
                    </table>`,
      },
      "max-tick-freq": {
        desc: `Максимальный интервал тиков для спящих сущностей в DAB.<br>
(Единица измерения: тики)`,
      },
      "start-distance": {
        desc: `Расстояние от игрока, начиная с которого частота тиков сущностей начинает снижаться.<br>
(Единица измерения: блоки)`,
      },
    },
    datapack: {
      "skip-inactive-entity-for-execute-command": {
        desc: `Whether to skip selecting inactive entities when using the execute command.<br>
                    This can improve performance on servers with massive datapack functions.`,
      },
    },
    "despawn-time": {
      "proactive-weak-loading-despawn": {
        desc: `Whether to enable proactive despawn check for weak-loaded entities.<br>
                    This can help reduce lag caused by loading and ticking a large amount of cumulative entities left in weak-loaded chunks.<br>
                    This only has any effect if the [despawn-time](https://docs.papermc.io/paper/reference/world-configuration/#entities_spawning_despawn_time__entity_type_) option is configured in the Paper world config.
                    <br>
                    __⚡Recommended value: \`true\`__<br>
                    <br>
                    <div class="warning custom-block">
                    <p class="custom-block-title custom-block-title-default">Experimental</p>
                    Experimental feature, actively testing, please report any bugs you encounter.
                    </div>`,
      },
    },
    "dont-save-entity": {
      "dont-save-falling-block": {
        desc: `Не сохранять падающие блоки (песок, гравий) при выгрузке чанка во избежание глитчей и дюпов.`,
      },
      "dont-save-primed-tnt": {
        desc: `Не сохранять подожжённый динамит при выгрузке чанка во избежание внезапных взрывов при повторной загрузке.`,
      },
    },
    "enable-cached-minecraft-to-bukkit-entitytype-convert": {
      desc: `Whether to cache the result of *Minecraft EntityType* to *Bukkit EntityType* conversion. This conversion can be somewhat expensive, especially in the spawning logic, so caching it can improve performance slightly.<br>
                <br>
                __⚡Recommended value: \`true\`__`,
    },
    "entity-goal": {
      "start-tick-chance": {
        __desc__: `How often are the common mob goal attempts calculated.<br>
                    In vanilla, the goal checks every tick whether the goal can start. By increasing the values below to throttle the checks, which can improve performance significantly, but may have minor gameplay implications.<br>
                    If set to \`-1\`, it follows the tick frequency as vanilla does.<br>
                    <br>
                    __⚡Recommended values:__
                    <table>
                    <thead><tr><th>Entity Goal</th><th>Start Tick Chance</th></tr></thead>
                    <tbody>
                    <tr><td>nearest-attackable-target</td><td>20</td></tr>
                    <tr><td>follow-parent</td><td>20</td></tr>
                    <tr><td>avoid-entity</td><td>20</td></tr>
                    <tr><td>temptation</td><td>20</td></tr>
                    <tr><td>enderman-look-for-player</td><td>20</td></tr>
                    </tbody></table>`,
        "avoid-entity": {
          desc: `How often does the __avoid entity__ goal attempt to start running for an entity.`,
        },
        "enderman-look-for-player": {
          desc: `Шанс запуска цели ИИ эндермена «поиск игрока» каждый тик.`,
        },
        "follow-parent": {
          desc: `Шанс запуска цели ИИ детёнышей животных «следование за родителем».`,
        },
        "nearest-attackable-target": {
          desc: `Шанс запуска цели ИИ мобов «поиск ближайшей цели для атаки».`,
        },
        temptation: {
          desc: `Шанс запуска цели ИИ мобов «следование за приманкой (едой)».`,
        },
      },
    },
    "fast-biome-manager-seed-obfuscation": {
      enabled: {
        desc: `Использовать ли быстрый алгоритм XXHash вместо ванильного SHA-256 для обфускации сида биомов.`,
      },
      "seed-obfuscation-key": {
        desc: `Ключ обфускации сида для XXHash.`,
      },
    },
    "faster-random-generator": {
      "enable-for-worldgen": {
        desc: `Использовать ли быстрый генератор случайных чисел для генерации мира.<br>
<div class="warning custom-block">
<p class="custom-block-title custom-block-title-default">Внимание</p>
Значение \`true\` изменит генерацию руд и структур по сравнению с ванильным сидом! Используйте только на новых мирах.
</div>
                <table>
                    <tr><td><b>Значения для целей</b></td><td></td></tr>
                    <tr><td><i>Оптимизация</i></td><td><code>true</code></td></tr>
                    <tr><td><i>Ванильное поведение</i></td><td><code>false</code></td></tr>
                    </table>
                    <br>
                    <div class="warning custom-block">
                    <p class="custom-block-title custom-block-title-default">Warning</p>
                    This will affect world generation. The terrain and other results of world generation will be slightly different from vanilla.
                    </div>`,
      },
      enabled: {
        desc: `Включить ли быстрый генератор случайных чисел из Java 17.
                <div class="tip custom-block">
                    <p class="custom-block-title custom-block-title-default">Внимание</p>
                    This requires a JVM that supports \`Xoroshiro128PlusPlus\`. Some JREs don't support it.
                    </div>`,
      },
      "use-legacy-random-for-slime-chunk": {
        desc: `Использовать ли ванильный алгоритм для слайм-чанков, сохраняя их координаты для существующих ферм.
                <table>
                    <tr><td><b>Значения для целей</b></td><td></td></tr>
                    <tr><td><i>Оптимизация</i></td><td><code>false</code></td></tr>
                    <tr><td><i>Ванильное поведение</i></td><td><code>true</code></td></tr>
                    </table>`,
      },
      "warn-for-slime-chunk": {
        desc: `Выводить ли предупреждение при старте, если генератор слайм-чанков может изменить их расположение.`,
      },
    },
    "faster-structure-gen-future-sequencing": {
      desc: `Использовать ли ускоренное упорядочивание задач генерации структур.
                <div class="tip custom-block">
                <p class="custom-block-title custom-block-title-default">Внимание</p>
                This may cause the inconsistent order of future compose tasks in rare edge cases, which may lead to different structure generation results.
                </div>`,
    },
    "only-tick-items-in-hand": {
      desc: `Обновлять ли NBT предметов только если они находятся в руке игрока.`,
    },
    "optimize-block-entities": {
      desc: `Использовать ли более эффективную структуру данных для хранения блочных сущностей.`,
    },
    "optimize-mob-despawn": {
      desc: `Использовать ли более производительную логику естественного деспавна мобов.
                <div class="warning custom-block">
                <p class="custom-block-title custom-block-title-default">Экспериментально</p>
                Экспериментально feature, actively testing, please report any bugs you encounter.
                </div>`,
    },
    "optimize-mob-spawning": {
      desc: `Использовать ли оптимизированную структуру данных для расчёта зон спавна мобов.
                <div class="warning custom-block">
                <p class="custom-block-title custom-block-title-default">Экспериментально</p>
                Экспериментально feature, actively testing, please report any bugs you encounter.
                </div>`,
    },
    "optimize-no-action-time": {
      "disable-light-check": {
        desc: `Пропускать ли проверку освещения для счётчика времени бездействия монстров.
                <table>
                    <tr><td><b>Значения для целей</b></td><td></td></tr>
                    <tr><td><i>Оптимизация</i></td><td><code>true</code></td></tr>
                    <tr><td><i>Ванильное поведение</i></td><td><code>false</code></td></tr>
                    </table>
                    <br>
                    <div class="warning custom-block">
                    <p class="custom-block-title custom-block-title-default">Experimental</p>
                    Experimental feature, actively testing, please report any bugs you encounter.
                    </div>`,
      },
    },
    "optimize-player-movement": {
      desc: `Пропускать ли избыточные проверки краёв блоков при перемещении игроков.`,
    },
    "optimize-random-tick": {
      desc: `Использовать ли оптимизированную систему случайных тиков блоков.
                <div class="warning custom-block">
                <p class="custom-block-title custom-block-title-default">Экспериментально</p>
                Экспериментально feature, actively testing, please report any bugs you encounter.
                </div>`,
    },
    "optimize-waypoint": {
      desc: `Обновлять ли данные путевых точек игрока только при смене чанка.
                <div class="warning custom-block">
                <p class="custom-block-title custom-block-title-default">Экспериментально</p>
                Экспериментально feature, actively testing, please report any bugs you encounter.
                </div>`,
    },
    "optimized-powered-rails": {
      desc: `Использовать ли оптимизированный алгоритм для активации энергорельсов.`,
    },
    "reduce-packets": {
      __desc__: `Параметры сокращения избыточных сетевых пакетов.`,
      "disable-useless-particles": {
        desc: `Отключить ли серверные расчёты для косметических частиц (бег, падение, прыжки).`,
      },
      "reduce-entity-motion-packets": {
        desc: `Фильтровать ли незначительные пакеты движения сущностей.`,
      },
      "reduce-entity-move-packets": {
        desc: `Уменьшать ли частоту пакетов движения сущностей при небольших перемещениях.`,
      },
    },
    "reuse-random-ticking-blockpos": {
      desc: `Переиспользовать ли объекты BlockPos при случайных тиках блоков для снижения нагрузки на память.
                <div class="warning custom-block">
                <p class="custom-block-title custom-block-title-default">Экспериментально</p>
                Экспериментально feature, actively testing. It may conflict with some plugins or cause ticking positions to be offset. Please use with caution and report any bugs you encounter.
                </div>`,
    },
    "skip-ai-for-non-aware-mob": {
      desc: `Полностью пропускать тики ИИ для мобов, находящихся в неактивном состоянии без взаимодействия с игроками.
                <table>
                <tr><td><b>Значения для целей</b></td><td></td></tr>
                <tr><td><i>Оптимизация</i></td><td><code>true</code></td></tr>
                <tr><td><i>Ванильное поведение</i></td><td><code>false</code></td></tr>
                </table>`,
    },
    "skip-map-item-data-updates-if-map-does-not-have-craftmaprenderer": {
      desc: `Пропускать обновление карт в инвентаре, если у них нет собственного рендерера.
                <table>
                <tr><td><b>Значения для целей</b></td><td></td></tr>
                <tr><td><i>Оптимизация</i></td><td><code>true</code></td></tr>
                <tr><td><i>Ванильное поведение</i></td><td><code>false</code></td></tr>
                </table>
                <br>
                <div class="tip custom-block">
                <p class="custom-block-title custom-block-title-default">Attention</p>
                This may cause vanilla map item data to stop being updated.
                </div>`,
    },
    "sleeping-block-entity": {
      desc: `Использовать ли систему засыпающих блочных сущностей из мода Lithium.`,
    },
    "throttle-mob-spawning": {
      ambient: {
        "min-failed": {
          desc: `Минимальное число неудачных попыток спавна фоновых мобов (летучие мыши).`,
        },
        "spawn-chance": {
          desc: `Шанс спавна фоновых мобов при достижении порога неудач.`,
        },
      },
      axolotls: {
        "min-failed": {
          desc: `Минимальное число неудачных попыток спавна аксолотлей.`,
        },
        "spawn-chance": {
          desc: `Шанс спавна аксолотлей при достижении порога неудач.`,
        },
      },
      creature: {
        "min-failed": {
          desc: `Минимальное число неудачных попыток спавна мирных животных.`,
        },
        "spawn-chance": {
          desc: `Шанс спавна мирных животных при достижении порога неудач.`,
        },
      },
      enabled: {
        desc: `Пропускать ли попытки спавна мобов в чанках, где спавн многократно терпел неудачу.`,
      },
      monster: {
        "min-failed": {
          desc: `Минимальное число неудачных попыток спавна враждебных монстров.`,
        },
        "spawn-chance": {
          desc: `Шанс спавна враждебных монстров при достижении порога неудач.`,
        },
      },
      underground_water_creature: {
        "min-failed": {
          desc: `Минимальное число неудачных попыток спавна подземных водных мобов (светящийся спрут).`,
        },
        "spawn-chance": {
          desc: `Шанс спавна подземных водных мобов при достижении порога неудач.`,
        },
      },
      water_ambient: {
        "min-failed": {
          desc: `Минимальное число неудачных попыток спавна тропических рыб.`,
        },
        "spawn-chance": {
          desc: `Шанс спавна тропических рыб при достижении порога неудач.`,
        },
      },
      water_creature: {
        "min-failed": {
          desc: `Минимальное число неудачных попыток спавна водных существ (обычный спрут, дельфины).`,
        },
        "spawn-chance": {
          desc: `Шанс спавна водных существ при достижении порога неудач.`,
        },
      },
    },
    "use-virtual-thread": {
      "async-chat-executor": {
        desc: `Использовать ли виртуальные потоки Java 21 для пула асинхронного чата.`,
      },
      "auth-pool": {
        desc: `Использовать ли виртуальные потоки Java 21 для пула аутентификации.`,
      },
      "bukkit-async-scheduler": {
        desc: `Использовать ли виртуальные потоки Java 21 для асинхронного планировщика Bukkit.`,
      },
      "download-pool": {
        desc: `Использовать ли виртуальные потоки Java 21 для пула сетевых загрузок.`,
      },
      "folia-async-scheduler": {
        desc: `Использовать ли виртуальные потоки Java 21 для асинхронного планировщика Folia.`,
      },
      "paper-configuration-pool": {
        desc: `Использовать ли виртуальные потоки Java 21 для пула чтения конфигураций Paper.`,
      },
    },
  },
}

export default ru
