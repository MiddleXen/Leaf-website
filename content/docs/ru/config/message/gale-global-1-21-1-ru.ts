import type { ConfigMessages } from "@/components/config/config-viewer"
import type config from "@/components/config/data/gale-global-1-21-1"

const ru: ConfigMessages<typeof config> = {
  "gameplay-mechanics": {
    "enable-book-writing": {
      desc: `Определяет, можно ли писать в книгах.<br>
Если установлено значение \`false\`, игроки с правом \`gale.writebooks\` (по умолчанию: \`op\`) всё равно смогут использовать книги.
                <table>
                <tr><td></td><td><b>По умолчанию</b></td><td></td><td></td></tr>
                <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td><td><i>Vanilla</i></td></tr>
                <tr><td>-</td><td><code>true</code></td><td><code>true</code></td><td><code>true</code></td></tr>
                </table>
                <table>
                <tr><td><b>Значения для целей</b></td><td></td></tr>
                <tr><td><i>Оптимизация</i></td><td>-</td></tr>
                <tr><td><i>Ванильное поведение</i></td><td><code>true</code></td></tr>
                </table>`,
    },
  },
  "log-to-console": {
    __desc__: `Определяет, записывать ли определённые сообщения и события в консоль и файлы логов.`,
    chat: {
      "empty-message-warning": {
        desc: `Записывать ли в лог событие отправки игроком пустого пакета сообщения.<br>
(Это безвредно и обычно происходит, когда у игрока устаревший клиент)
                <table>
                    <tr><td></td><td><b>По умолчанию</b></td><td></td></tr>
                    <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td></tr>
                    <tr><td><code>false</code></td><td><code>false</code></td><td><code>true</code></td></tr>
                    </table>`,
      },
      "expired-message-warning": {
        desc: `Записывать ли в лог событие, когда пакет сообщения игрока устарел.<br>
(Это безвредно и обычно случается при рассинхронизации чата на клиенте игрока)
                <table>
                    <tr><td></td><td><b>По умолчанию</b></td><td></td></tr>
                    <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td></tr>
                    <tr><td><code>false</code></td><td><code>false</code></td><td><code>true</code></td></tr>
                    </table>`,
      },
      "not-secure-marker": {
        desc: `Добавлять ли метку [NOT SECURE] перед неподписанными пакетами чата.
                <table>
                    <tr><td></td><td><b>По умолчанию</b></td><td></td></tr>
                    <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td></tr>
                    <tr><td><code>false</code></td><td><code>true</code></td><td><code>true</code></td></tr>
                    </table>`,
      },
    },
    "ignored-advancements": {
      desc: `Записывать ли в лог загрузку данных игрока с достижениями, которых больше не существует.<br>
(Это безвредно и обычно происходит при обновлении сервера на более новую версию Minecraft)
                <table>
                <tr><td></td><td><b>По умолчанию</b></td><td></td></tr>
                <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td></tr>
                <tr><td><code>false</code></td><td><code>true</code></td><td><code>true</code></td></tr>
                </table>`,
    },
    "invalid-pool-element-error-log-level": {
      desc: `Уровень логирования ошибок при обнаружении некорректных элементов пула (*invalid pool elements*) в данных мира.<br>
<br>
*Некорректные элементы пула* — это части генерируемых структур (например, заброшенных шахт), повреждённые или некорректно обновлённые со старых версий.<br>
<br>
Логи этих ошибок обычно бесполезны, так как исправить их вручную невозможно.<br>
<br>
Допустимые значения: \`"none"\`, \`"info"\`, \`"warn"\` и \`"error"\`.
                <table>
                <tr><td></td><td><b>По умолчанию</b></td><td></td><td></td></tr>
                <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td><td><i>Vanilla</i></td></tr>
                <tr><td><code>"none"</code> ⓘ</td><td><code>"info"</code></td><td><code>"error"</code></td><td><code>"error"</code></td></tr>
                </table>
                <p>ⓘ = The default value is \`"info"\` to prevent any errors going unnoticed by default, but the recommended value is \`"none"\` because these errors are usually meaningless and unsolvable anyway.</p>`,
    },
    "invalid-statistics": {
      desc: `Записывать ли в лог, когда у игрока загружаются несуществующие больше показатели статистики.
                <table>
                <tr><td></td><td><b>По умолчанию</b></td><td></td></tr>
                <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td></tr>
                <tr><td><code>false</code></td><td><code>true</code></td><td><code>true</code></td></tr>
                </table>`,
    },
    "legacy-material-initialization": {
      desc: `Записывать ли в лог загрузку очень старых плагинов Bukkit.
                <table>
                <tr><td></td><td><b>По умолчанию</b></td><td></td></tr>
                <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td></tr>
                <tr><td><code>false</code></td><td><code>false</code></td><td><code>true</code></td></tr>
                </table>`,
    },
    "null-id-disconnections": {
      desc: `Записывать ли в лог попытку входа игрока без валидного профиля.<br>
(Обычно это указывает на попытку бот-атаки или спама подключений)
                <table>
                <tr><td></td><td><b>По умолчанию</b></td><td></td></tr>
                <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td></tr>
                <tr><td><code>false</code></td><td><code>true</code></td><td><code>true</code></td></tr>
                </table>`,
    },
    "player-login-locations": {
      desc: `Указывать ли координаты игрока в консольном сообщении о входе на сервер.
                <table>
                <tr><td></td><td><b>По умолчанию</b></td><td></td></tr>
                <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td></tr>
                <tr><td>-</td><td><code>true</code></td><td><code>true</code></td></tr>
                </table>`,
    },
    "plugin-library-loader": {
      downloads: {
        desc: `Записывать ли в лог начало скачивания библиотек загрузчиком плагинов.
                <table>
                    <tr><td></td><td><b>По умолчанию</b></td><td></td></tr>
                    <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td></tr>
                    <tr><td><code>true</code></td><td><code>true</code></td><td><code>true</code></td></tr>
                    </table>`,
      },
      "library-loaded": {
        desc: `Записывать ли в лог успешную загрузку библиотеки плагина.
                <table>
                    <tr><td></td><td><b>По умолчанию</b></td><td></td></tr>
                    <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td></tr>
                    <tr><td><code>true</code></td><td><code>true</code></td><td><code>true</code></td></tr>
                    </table>`,
      },
      "start-load-libraries-for-plugin": {
        desc: `Записывать ли в лог начало загрузки библиотек для конкретного плагина.
                <table>
                    <tr><td></td><td><b>По умолчанию</b></td><td></td></tr>
                    <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td></tr>
                    <tr><td><code>true</code></td><td><code>true</code></td><td><code>true</code></td></tr>
                    </table>`,
      },
    },
    "set-block-in-far-chunk": {
      desc: `Записывать ли в лог попытку игрока установить блок на слишком большом расстоянии.<br>
(Обычно свидетельствует об использовании чит-клиента)
                <table>
                <tr><td></td><td><b>По умолчанию</b></td><td></td></tr>
                <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td></tr>
                <tr><td><code>false</code></td><td><code>true</code></td><td><code>true</code></td></tr>
                </table>`,
    },
    "unrecognized-recipes": {
      desc: `Записывать ли в лог, когда у игрока загружаются рецепты книги рецептов, которых больше нет в игре.
                <table>
                <tr><td></td><td><b>По умолчанию</b></td><td></td></tr>
                <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td></tr>
                <tr><td><code>false</code></td><td><code>false</code></td><td><code>true</code></td></tr>
                </table>`,
    },
  },
  misc: {
    "ignore-null-legacy-structure-data": {
      desc: `Игнорировать ли данные устаревших структур, возвращающие null при парсинге NBT.
                <table>
                <tr><td></td><td><b>По умолчанию</b></td><td></td><td></td></tr>
                <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td><td><i>Vanilla</i></td></tr>
                <tr><td><code>true</code> ⓘ</td><td><code>false</code></td><td><code>false</code></td><td><code>false</code></td></tr>
                </table>
                <table>
                <tr><td><b>Значения для целей</b></td><td></td></tr>
                <tr><td><i>Оптимизация</i></td><td>-</td></tr>
                <tr><td><i>Ванильное поведение</i></td><td><code>false</code></td></tr>
                </table>
                <p>ⓘ = The default value is \`false\` to prevent any errors going unnoticed by default, but the recommended value is \`true\` because these errors are usually meaningless and unsolvable anyway.</p>`,
    },
    keepalive: {
      "send-multiple": {
        desc: `Отправлять ли пакеты keepalive чаще ванильного интервала.
                <table>
                    <tr><td></td><td><b>По умолчанию</b></td><td></td><td></td></tr>
                    <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td><td><i>Vanilla</i></td></tr>
                    <tr><td><code>true</code></td><td><code>true</code></td><td><code>false</code></td><td><code>false</code></td></tr>
                    </table>
                    <table>
                    <tr><td><b>Значения для целей</b></td><td></td></tr>
                    <tr><td><i>Оптимизация</i></td><td>-</td></tr>
                    <tr><td><i>Ванильное поведение</i></td><td>- (не влияет на игровой процесс)</td></tr>
                    </table>`,
      },
    },
    "last-tick-time-in-tps-command": {
      "add-oversleep": {
        desc: `Добавлять ли время сна последнего тика к выводу \`/tps\`.
                <table>
                    <tr><td></td><td><b>По умолчанию</b></td><td></td><td></td></tr>
                    <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td><td><i>Vanilla</i></td></tr>
                    <tr><td>-</td><td><code>false</code></td><td><code>false</code></td><td><code>false</code></td></tr>
                    </table>
                    <table>
                    <tr><td><b>Значения для целей</b></td><td></td></tr>
                    <tr><td><i>Оптимизация</i></td><td>-</td></tr>
                    <tr><td><i>Поведение Paper</i></td><td>-</td></tr>
                    </table>`,
      },
      enabled: {
        desc: `Отображать ли время выполнения последнего тика в \`/tps\`.
                <table>
                    <tr><td></td><td><b>По умолчанию</b></td><td></td><td></td></tr>
                    <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td><td><i>Vanilla</i></td></tr>
                    <tr><td><code>false</code></td><td><code>false</code></td><td><code>false</code></td><td><code>false</code></td></tr>
                    </table>
                    <table>
                    <tr><td><b>Значения для целей</b></td><td></td></tr>
                    <tr><td><i>Оптимизация</i></td><td>-</td></tr>
                    <tr><td><i>Поведение Paper</i></td><td><code>false</code></td></tr>
                    </table>`,
      },
    },
    "premium-account-slow-login-timeout": {
      desc: `Таймаут входа для лицензионных аккаунтов при медленном ответе серверов аутентификации.<br>
(Единица измерения: тики)
                <table>
                <tr><td></td><td><b>По умолчанию</b></td><td></td><td></td></tr>
                <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td><td><i>Vanilla</i></td></tr>
                <tr><td>-</td><td><code>-1</code></td><td><code>-1</code></td><td><code>-1</code></td></tr>
                </table>
                <table>
                <tr><td><b>Значения для целей</b></td><td></td></tr>
                <tr><td><i>Оптимизация</i></td><td>-</td></tr>
                <tr><td><i>Ванильное поведение</i></td><td><code>-1</code></td></tr>
                </table>`,
    },
    "verify-chat-order": {
      desc: `Проверять ли порядок сообщений чата во избежание рассинхронизации.
                <table>
                <tr><td></td><td><b>По умолчанию</b></td><td></td><td></td></tr>
                <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td><td><i>Vanilla</i></td></tr>
                <tr><td>-</td><td><code>true</code></td><td><code>true</code></td><td><code>true</code></td></tr>
                </table>
                <table>
                <tr><td><b>Значения для целей</b></td><td></td></tr>
                <tr><td><i>Оптимизация</i></td><td>-</td></tr>
                <tr><td><i>Ванильное поведение</i></td><td><code>true</code></td></tr>
                </table>`,
    },
  },
  "small-optimizations": {
    "reduced-intervals": {
      "increase-time-statistics": {
        desc: `Интервал обновления временной статистики (общее время игры и т.д.).<br>
(Единица измерения: тики)
                <table>
                    <tr><td></td><td><b>По умолчанию</b></td><td></td><td></td></tr>
                    <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td><td><i>Vanilla</i></td></tr>
                    <tr><td><code>100</code></td><td><code>20</code></td><td><code>1</code></td><td><code>1</code></td></tr>
                    </table>
                    <table>
                    <tr><td><b>Значения для целей</b></td><td></td></tr>
                    <tr><td><i>Оптимизация</i></td><td><code>100</code></td></tr>
                    <tr><td><i>Ванильное поведение</i></td><td>1</td></tr>
                    </table>`,
      },
      "update-entity-line-of-sight": {
        desc: `Интервал проверки нахождения сущности в поле зрения (line of sight) другой сущности.<br>
(Единица измерения: тики)
                <table>
                    <tr><td></td><td><b>По умолчанию</b></td><td></td><td></td></tr>
                    <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td><td><i>Vanilla</i></td></tr>
                    <tr><td><code>4</code></td><td><code>4</code></td><td><code>1</code></td><td><code>1</code></td></tr>
                    </table>
                    <table>
                    <tr><td><b>Значения для целей</b></td><td></td></tr>
                    <tr><td><i>Оптимизация</i></td><td><code>10</code></td></tr>
                    <tr><td><i>Ванильное поведение</i></td><td><code>1</code></td></tr>
                    </table>`,
      },
    },
    "use-xor-shift-random": {
      __desc__: `Whether to use a [XorShift](https://www.codeproject.com/Articles/9187/A-fast-equivalent-for-System-Random) random number generator instead of the Java's default.`,
      "auto-replenish-lootable-refill": {
        desc: `Whether to use a XorShift random generator for refilling lootables for the Paper's \`auto-replenish\` feature.<br>
                    This does not affect normal Minecraft lootable chests.
                    <table>
                    <tr><td></td><td><b>По умолчанию</b></td><td></td><td></td></tr>
                    <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td><td><i>Vanilla</i></td></tr>
                    <tr><td><code>true</code></td><td><code>true</code></td><td><code>false</code></td><td>-</td></tr>
                    </table>
                    <table>
                    <tr><td><b>Значения для целей</b></td><td></td></tr>
                    <tr><td><i>Оптимизация</i></td><td><code>true</code></td></tr>
                    <tr><td><i>Поведение Paper</i></td><td>- (players can't notice the difference anyway)</td></tr>
                    </table>`,
      },
      "elytra-firework-speed": {
        desc: `Whether to use a XorShift random generator for the speed boost of using a firework rocket while gliding.
                    <table>
                    <tr><td></td><td><b>По умолчанию</b></td><td></td><td></td></tr>
                    <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td><td><i>Vanilla</i></td></tr>
                    <tr><td><code>true</code></td><td><code>true</code></td><td><code>false</code></td><td><code>false</code></td></tr>
                    </table>
                    <table>
                    <tr><td><b>Значения для целей</b></td><td></td></tr>
                    <tr><td><i>Оптимизация</i></td><td><code>true</code></td></tr>
                    <tr><td><i>Ванильное поведение</i></td><td><code>false</code></td></tr>
                    </table>`,
      },
      "entity-wake-up-duration": {
        desc: `Whether to use a XorShift random generator for variation in entity activation durations.
                    <table>
                    <tr><td></td><td><b>По умолчанию</b></td><td></td><td></td></tr>
                    <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td><td><i>Vanilla</i></td></tr>
                    <tr><td><code>true</code></td><td><code>true</code></td><td>-</td><td>-</td></tr>
                    </table>
                    <table>
                    <tr><td><b>Значения для целей</b></td><td></td></tr>
                    <tr><td><i>Оптимизация</i></td><td><code>true</code></td></tr>
                    </table>`,
      },
      "generate-tree-with-bukkit-api": {
        desc: `Whether to use a XorShift random generator to generate trees with the Bukkit API (\`World#generateTree\`).
                    <table>
                    <tr><td></td><td><b>По умолчанию</b></td><td></td><td></td></tr>
                    <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td><td><i>Vanilla</i></td></tr>
                    <tr><td><code>true</code></td><td><code>true</code></td><td><code>false</code></td><td>-</td></tr>
                    </table>
                    <table>
                    <tr><td><b>Значения для целей</b></td><td></td></tr>
                    <tr><td><i>Оптимизация</i></td><td><code>true</code></td></tr>
                    <tr><td><i>Поведение Paper</i></td><td><code>false</code></td></tr>
                    </table>`,
      },
      "lightning-random-tick": {
        desc: `Использовать ли быстрый генератор случайных чисел XorShift для случайных тиков молний.
                <table>
                    <tr><td></td><td><b>По умолчанию</b></td><td></td><td></td></tr>
                    <tr><td><b>Рекомендуется&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td><i>Leaf</i></td><td><i>Paper</i></td><td><i>Vanilla</i></td></tr>
                    <tr><td><code>true</code></td><td><code>true</code></td><td><code>false</code></td><td>-</td></tr>
                    </table>
                    <table>
                    <tr><td><b>Значения для целей</b></td><td></td></tr>
                    <tr><td><i>Оптимизация</i></td><td><code>true</code></td></tr>
                    <tr><td><i>Поведение Paper</i></td><td><code>false</code></td></tr>
                    </table>`,
      },
    },
  },
}

export default ru
