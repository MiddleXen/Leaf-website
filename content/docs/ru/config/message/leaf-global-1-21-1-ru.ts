import type { ConfigMessages } from "@/components/config/config-viewer"
import type config from "@/components/config/data/leaf-global-1-21-1"

const ru: ConfigMessages<typeof config> = {
  async: {
    __desc__: `Раздел содержит асинхронные модули, разгружающие основной поток сервера (Server Thread).`,
    "async-entity-tracker": {
      "compat-mode": {
        desc: `Режим совместимости для плагинов NPC (например, Citizens), использующих реальных игроков в качестве NPC.<br>
Включайте \`compat-mode: true\` только если на сервере установлен Citizens и NPC мигают или исчезают. Для современных NPC-плагинов на виртуальных сущностях (ZNPCsPlus, FancyNPCs) оставляйте \`false\`.`,
      },
      enabled: {
        desc: `Асинхронный трекер сущностей.<br>
Заметно повышает производительность в локациях с высокой плотностью сущностей.<br>
<br>
__⚡Рекомендуемое значение: \`true\`__
                <div class="tip custom-block">
                    <p class="custom-block-title custom-block-title-default">Внимание</p>
                    If you installed plugins like Citizens, which uses the real entity or player-type entity as the "NPC", also read \`compat-mode\` below for more information.
                    </div>`,
      },
      keepalive: {
        desc: `The thread keepalive time, threads with no tasks will be terminated if they exceed the time.<br>
                    (Единица измерения: секунды)`,
      },
      "max-threads": {
        desc: `Maximum number of threads for async entity pathfinding to use.<br>
                    For example:<br>
                    <ul>
                    <li>If a value &lt; \`0\` is given, it automatically uses the number of CPU cores plus the value as the count of threads, with a minimum of 1.</li>
                    <li>If set to \`0\`, it automatically uses 1/4 of the number of CPU cores, with a minimum of 1.</li>
                    </ul>
                    <br>
                    __⚡Recommended value: 1/2 of CPU cores__`,
      },
    },
    "async-locator": {
      enabled: {
        desc: `Асинхронный поиск структур (команда \`/locate\`, око Эндера, дельфины).`,
      },
      keepalive: {
        desc: `The thread keepalive time, threads with no tasks will be terminated if they exceed the time.<br>
                    (Единица измерения: секунды)`,
      },
      threads: {
        desc: `Количество потоков для асинхронного поиска структур.<br>
__⚡Рекомендуемое значение: \`1\` или \`2\`__`,
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
    },
    "async-playerdata-save": {
      enabled: {
        desc: `Асинхронное сохранение данных игроков для устранения дисковых лаг-спайков при операциях ввода-вывода.
                <div class="warning custom-block">
                    <p class="custom-block-title custom-block-title-default">Экспериментально</p>
                    Экспериментально feature, may cause data loss or data inconsistency in some circumstances!
                    </div>`,
      },
    },
  },
  fixes: {
    __desc__: `Раздел содержит исправления ошибок и багфиксы для специфических проблем.`,
    "dont-place-player-if-server-full": {
      desc: `Не помещать игрока в мир, если сервер полностью заполнен.`,
    },
  },
  "gameplay-mechanisms": {
    __desc__: `Раздел содержит тонкие настройки игровых механик.`,
    "afk-command": {
      enabled: {
        desc: `Разрешить ли игрокам использовать встроенную команду \`/afk\`.`,
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
      "snowball-knockback-players": {
        desc: `Отбрасывают ли брошенные снежки игроков.`,
      },
    },
    "max-item-stack-count": {
      __desc__: `Настройки максимального размера стака для выпавших предметов.
                <div class="warning custom-block">
                <p class="custom-block-title custom-block-title-default">Предупреждение</p>
                We __do not__ recommend using this feature. It is a work in progress and has known issues.<br>
                This feature may also be removed in the future. __Do not__ touch this unless you know what you are doing!
                </div>`,
      "max-container-destroy-count": {
        desc: `Максимальное число предметов, выпадающих при разрушении контейнера.`,
      },
      "max-dropped-items-stack-count": {
        desc: `Максимальный размер стака для лежащих на земле предметов.`,
      },
    },
    player: {
      "disable-moved-wrongly-threshold": {
        desc: `Отключить ли встроенную проверку Spigot на слишком быстрое / неправильное перемещение («moved too quickly / wrongly»).`,
      },
      "max-use-item-distance": {
        desc: `Максимальная дистанция взаимодействия с предметом в руке.
                <div class="tip custom-block">
                    <p class="custom-block-title custom-block-title-default">Внимание</p>
                    If set to \`-1\` or any large positive values, players can use some packet modules of hack clients, and are also able to use [Nocom Exploit](https://github.com/nerdsinspace/nocom-explanation)! Adjusting this option requires careful consideration of potential exploits.
                    </div>`,
      },
    },
    "smooth-teleport": {
      desc: `Включить ли плавную телепортацию при смене измерений.
                <div class="warning custom-block">
                <p class="custom-block-title custom-block-title-default">Экспериментально</p>
                Экспериментально feature, actively testing, please report any bugs you encounter.
                </div>`,
    },
    "use-spigot-item-merging-mechanism": {
      desc: `Использовать ли алгоритм объединения лежащих предметов от Spigot.
                <table>
                <tr><td><b>Значения для целей</b></td><td></td></tr>
                <tr><td><i>SMP friendly</i></td><td><code>true</code></td></tr>
                <tr><td><i>Ванильное поведение</i></td><td><code>false</code></td></tr>
                </table>`,
    },
  },
  misc: {
    __desc__: `Раздел содержит разнообразные дополнительные функции и настройки.`,
    cache: {
      "cache-player-profile-result": {
        desc: `Кэшировать ли профили игроков (UUID, никнейм, текстуры скинов).`,
      },
      "cache-player-profile-result-timeout": {
        desc: `Таймаут кэша профилей игроков.<br>
(Единица измерения: секунды)`,
      },
    },
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
    "hidden-item-components": {
      desc: `Список ключей компонентов предметов, которые скрываются от клиента.
                <div class="tip custom-block">
                <p class="custom-block-title custom-block-title-default">Внимание</p>
                It may break resource packs, client mods, or specific gameplay mechanics that rely on these client-side component data of items. Use with caution. You must know what components you are hiding!
                </div>`,
    },
    "including-5s-in-get-tps": {
      desc: `Включать ли 5-секундный показатель TPS в вызов API Leaf.
                <div class="tip custom-block">
                <p class="custom-block-title custom-block-title-default">Want to Go Deeper?</p>
                If you are using the Leaf API for your plugins. Or running on Leaf and using reflection to get TPS, you can use \`Bukkit#getTPSIncluding5SecondAverage\`, to get the TPS array including 5-second TPS \`[5s, 1m, 5m, 15m]\`.<br>
                Also, you can use \`Bukkit#get5SecondTPSAverage\` to get the average value of 5-second TPS in \`double\`.
                </div>`,
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
    "region-format-settings": {
      __desc__: `Формат файлов регионов Linear со сжатием zstd. Экономит до 50% дискового пространства.
                <div class="warning custom-block">
                <p class="custom-block-title custom-block-title-default">Предупреждение</p>
                Экспериментально feature, there is a potential risk of losing chunk data. Backup your server before switching to Linear.<br>
                Also, we do not recommend using Linear, since vanilla's ANVIL format (\`.mca\`) is enough. Leaf uses the refactored version of the Linear flush system, which is safer but slower to save chunks to make data loss less likely. However, this trade-off is worthwhile, since data is invaluable.
                </div>`,
      "flush-interval-seconds": {
        desc: `Интервал сброса кэшированных данных файлов Linear на диск.<br>
(Единица измерения: секунды)`,
      },
      "linear-compress-level": {
        desc: `Уровень сжатия формата Linear (от 1 до 22).`,
      },
      "region-format": {
        desc: `Формат хранения данных чанков в файлах регионов (\`MCA\` или \`LINEAR\`).`,
      },
      "throw-on-unknown-extension-detected": {
        desc: `Вызывать ли критическую ошибку при обнаружении неизвестного формата регионов.`,
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
    "remove-vanilla-username-check": {
      desc: `Отключить ли ванильную проверку никнеймов, разрешая любые символы.`,
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
  },
  network: {
    __desc__: `Раздел содержит сетевые настройки и протоколы.`,
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
      "asteorbar-protocol": {
        desc: `Whether to enable [AsteorBar](https://modrinth.com/mod/asteorbar) protocol support.<br>
                    If set to \`true\`, players who have the AsteorBar mod installed can display the accurate saturation/exhaustion values on the client.`,
      },
      "chatimage-protocol": {
        desc: `Whether to enable [ChatImage](https://modrinth.com/mod/chatimage) protocol support.<br>
                    If set to \`true\`, players who have the ChatImage mod installed can see the image sent by others using the CICode format.`,
      },
      "jade-protocol": {
        desc: `Whether to enable [Jade](https://modrinth.com/mod/jade) protocol support.<br>
                    If set to \`true\`, players who have the Jade mod installed can display item information inside the storage container, progress of the furnace, brewing stand, foods on the campfire, bee data in the beehive, and more vanilla-friendly features.`,
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
    "entity-timeouts": {
      __desc__: `Настройки максимального времени жизни (Entity TTL) для различных сущностей.
                <table>
                <thead><tr><th>Entity</th><th>Max Lifespan</th></tr></thead>
                <tbody>
                <tr><td>SNOWBALL</td><td>200</td></tr>
                <tr><td>LLAMA_SPIT</td><td>150</td></tr>
                <tr><td>DRAGON_FIREBALL</td><td>150</td></tr>
                <tr><td>EGG</td><td>300</td></tr>
                <tr><td>FIREBALL</td><td>600</td></tr>
                <tr><td>SMALL_FIREBALL</td><td>400</td></tr>
                <tr><td>WIND_CHARGE</td><td>200</td></tr>
                <tr><td>BREEZE_WIND_CHARGE</td><td>200</td></tr>
                <tr><td>WITHER_SKULL</td><td>200</td></tr>
                </tbody></table>
                ⓘ = In here, the time that the entity survived means the total living time of the entity, and will not be reset by chunk unloading or loading.`,
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
                    This requires a JVM that supports \`RandomGenerator\`. Some JREs don't support it.
                    </div>`,
      },
      "random-generator": {
        desc: `Алгоритм генератора случайных чисел (рекомендуется \`Xoroshiro128PlusPlus\`).`,
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
    "inactive-goal-selector-throttle": {
      desc: `Снижать ли частоту тиков селектора целей (Goal Selector) для неактивных мобов вдали от игроков.
                <table>
                <tr><td><b>Значения для целей</b></td><td></td></tr>
                <tr><td><i>Оптимизация</i></td><td><code>true</code></td></tr>
                <tr><td><i>Ванильное поведение</i></td><td><code>false</code></td></tr>
                </table>`,
    },
    "optimize-minecart": {
      enabled: {
        desc: `Оптимизировать ли тики вагонеток, пропуская частые проверки столкновений.
                <table>
                    <tr><td><b>Значения для целей</b></td><td></td></tr>
                    <tr><td><i>Оптимизация</i></td><td><code>true</code></td></tr>
                    <tr><td><i>Ванильное поведение</i></td><td><code>false</code></td></tr>
                    </table>`,
      },
      "skip-tick-count": {
        desc: `Сколько тиков пропускать между проверками столкновений вагонеток.`,
      },
    },
    "optimized-powered-rails": {
      desc: `Использовать ли оптимизированный алгоритм для активации энергорельсов.`,
    },
    "reduce-packets": {
      __desc__: `Параметры сокращения избыточных сетевых пакетов.`,
      "reduce-entity-move-packets": {
        desc: `Уменьшать ли частоту пакетов движения сущностей при небольших перемещениях.`,
      },
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
    "throttle-hopper-when-full": {
      enabled: {
        desc: `Ограничивать ли попытки воронок передать предмет, если целевой контейнер заполнен.
                <table>
                    <tr><td><b>Значения для целей</b></td><td></td></tr>
                    <tr><td><i>Оптимизация</i></td><td><code>true</code></td></tr>
                    <tr><td><i>Ванильное поведение</i></td><td><code>false</code></td></tr>
                    </table>`,
      },
      "skip-ticks": {
        desc: `Сколько тиков воронка ожидает перед повторной попыткой передачи предмета в полный контейнер (по умолчанию 8).
                <table>
                    <tr><td><b>Значения для целей</b></td><td></td></tr>
                    <tr><td><i>Оптимизация</i></td><td><code>8</code></td></tr>
                    <tr><td><i>Ванильное поведение</i></td><td><code>8</code></td></tr>
                    </table>`,
      },
    },
    "use-virtual-thread-for-async-chat-executor": {
      desc: `Использовать ли виртуальные потоки Java 21 для асинхронного обработчика чата.`,
    },
    "use-virtual-thread-for-async-scheduler": {
      desc: `Использовать ли виртуальные потоки Java 21 для асинхронного планировщика задач (Async Scheduler).`,
    },
  },
}

export default ru
