module.exports = {
    GLOBAL: {
        YES: "Si",
        NO: "No",
        ADMIN_ONLY: "Sólo los administradores pueden cambiar el prefijo del comando.",
        OWNER_ONLY: "Solo el propietario del bot, Spencer #0003, puede realizar esta acción."
    },

    COMMANDS: {
        PREFIX: "Establezca el prefijo del comando en {0}. Para ejecutar comandos use, {1}",

        MAGIC_8_BALL: {
            YES: "Si.",
            NO: "No.",
            SOURCES: "Mis fuentes parecen creerlo.",
            DONT_THINK_SO: "No lo creo.",
            UNLIKELY: "Es improbable."
        },

        ROCK_PAPER_SCISSORS: {
            TITLE: "Piedra, Papel, tijeras!",
            TIE: "¡Es un empate!",
            WIN: "¡Tú ganas!",
            LOSS: "¡Gané!"
        },

        LEADERBOARD: {
            TITLE: "Tabla de clasificación",
            EMPTY_LEADERBORD: "La tabla de clasificación está vacía.",
            TOP_1O_USERS: "10 usuarios principales en",
        },

        PING: {
            TITLE: "Latencia",
            PING: "Mi latencia es"
        },

        RANK: {
            TITLE: "Rango",
            NO_XP: "Este usuario no ha ganado ningún XP todavía.",
            IS_RANK: "es rango"
        },

        SERVER: {
            CREATED: "Creado",
            OWNER: "Propietario",
            BOOSTS: "Impulsos",
            BOOST_TIER: "Nivel de impulso",
            REGION: "Región",
            EXPLICIT_FILTER: "Filtro explícito",
            VERIFICATION_LEVEL: "Nivel de verificación",
            MEMBERS: "Miembros"
        },

        AUTO_ROLE: {
            TITLE: "Rol automático",
            CONFIRMATION_MESSAGE: "La función automática se ha establecido en {0}"
        },

        UPTIME: {
            TITLE: "Tiempo de actividad",
            CURRENT_UPTIME: "Mi tiempo de actividad es"
        },

        USER: {
            JOINED_DISCORD: "Joined Se unió a la discordia",
            BOT: "Larva del moscardón",
            SERVER_JOIN_DATE: "Fecha de ingreso al servidor",
            HIGHEST_ROLE: "Rol mas alto",
            HOIST_ROLE: "Función de elevación",
            ROLES: "Roles",
            NONE: "Ninguno"
        },

        MODERATION: {
            TITLE: "Moderación",
            MODERATOR: "Moderador",
            NICKNAME: "Apodo",
            SELF_BAN: "No puedes prohibir a ti mismo.",
            SELF_DEAFEN: "No puedes quedar sordo.",
            SELF_KICK: "No puedes matarte a ti mismo.",
            SELF_MUTE: "No puedes silenciarte.",
            DM_FAIL: "No se pudo enviar un mensaje directo a este usuario.",
            DM_BAN_MESSAGE: "Has sido expulsado de {0} por {1}.",
            DM_KICK_MESSAGE: "Te expulsaron de {0} por {1}",
            DM_MUTE_MESSAGE: "Te han silenciado en {0} durante {1}",
            DM_UNMUTE_MESSAGE: "Se te ha dejado de silenciar en {0}",
            BAN_MESSAGE: "Prohibí {0} por {1}",
            UNBAN_MESSAGE: "{0} ha sido desbloqueado.",
            KICK_MESSAGE: "He pateado {0} por {1}",
            INVALID_AMOUNT: "Número de mensajes no válido",
            NOT_BANNED: "Este usuario no está prohibido.",
            CLEARED_MESSAGES: "Se eliminaron {0} mensajes correctamente.",
            NOT_DEAFENED: "Este usuario no está sordo.",
            ALREADY_DEAFENED: "Este usuario ya está sordo.",
            SUCCESSFULLY_DEAFENED: "He ensordecido <@{0}>.",
            SUCCESSFULLY_UNDEAFENED: "He desanimado <@{0}>",
            ALREADY_MUTED: "Este usuario ya está silenciado.",
            SET_OWNER_NICKNAME: "No puedo establecer el apodo del propietario.",
            NICKNAME_CHANGE: "El apodo de <@ {0}> se ha cambiado a {1}"
        },

        MUSIC: {
            TITLE: "Música",
            NO_SONG: "No se especificó ninguna canción.",
            VIDEO_NOT_FOUND: "Video no encontrado.",
            NOT_IN_VOICE: "No estás en el canal de voz.",
            CANT_JOIN: "No tengo permiso para unirse al canal de voz.",
            CANT_SPEAK: "No tengo permiso para hablar en el canal de voz.",
            ADDED_TO_QUEUE: "se ha agregado a la cola.",
            ERROR: "Hubo un error inesperado al conectarse al canal de voz, si Discord no está inactivo, notifique a Spencer #0003",
            SONG_NOT_PLAYING: "Actualmente no se está reproduciendo ninguna canción.",
            ALREADY_PAUSED: "La música ya está en pausa.",
            ALREADY_PLAYING: "La música ya está sonando.",
            SUCCESSFULLY_PAUSED: "La música se ha detenido.",
            SUCCESSFULLY_RESUMED: "La música se ha reanudado.",
            ENABLED_LOOPING: "He habilitado el bucle.",
            DISABLED_LOOPING: "He desactivado el bucle.",
            SHUFFLED: "He barajado el taco.",
            SKIPPED: "Canción omitida.",
            STOPPED: "He detenido la música.",
            SET_VOLUME: "He puesto el volumen a"
        },

        ROLEPLAY: {
            BLUSH: {
                SOLO: "{0} is blushing",
                MESSAGE_ONE: "{0} turned red because of {1}",
                MESSAGE_TWO: "{1} made {0} turn red"
            },

            CHEER: {
                SOLO: "{0} is cheering",
                MESSAGE_ONE: "{0} is cheering for {1}",
                MESSAGE_TWO: "{0} is cheering {1} on"
            },

            CUDDLE: {
                SOLO: "{0} wants to cuddle",
                MESSAGE_ONE: "{0} is embracing {1} for cuddles",
                MESSAGE_TWO: "{0} is cuddling {1}"
            },

            DANCE: {
                SOLO: "{0} is dancing",
                TOGETHER: "{0} wants to dance with {1}",
            }
        },

        NSFW_ROLEPLAY: {
            BLOWJOB: {
                SOLO: "{0} is craving a blowjob",
                MESSAGE_ONE: "{0} wants to swallow {1}",
                MESSAGE_TWO: "{0} swallowed {1}'s hot load"
            },

            FUCK: {
                SOLO: "{0} wants to fuck",
                MESSAGE_ONE: "{0} wants to fuck {1}",
                MESSAGE_TWO: "{0} wants to bang {1}"
            },

            SPANK: {
                SOLO: "{0} wants to get spanked",
                MESSAGE_ONE: "{0} wants {1} to be spanked by {0}",
                MESSAGE_TWO: "{0} wants {1} to spank them",
                MESSAGE_THREE: "{0} has been naughty and needs {1} to teach them a lesson"
            }
        },
    },
};