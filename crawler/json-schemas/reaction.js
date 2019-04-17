module.exports = {
  '$schema': 'http://json-schema.org/draft-07/schema#',
  '$id': 'dat://unwalled.garden/reaction.json',
  'type': 'object',
  'title': 'Reaction',
  'description': 'An emoji annotation on some resource.',
  'required': [
    'type',
    'topic',
    'emojis'
  ],
  'properties': {
    'type': {
      'type': 'string',
      'description': "The object's type",
      'const': 'unwalled.garden/reaction'
    },
    'topic': {
      'type': 'string',
      'description': 'What this reaction is about',
      'format': 'uri',
      'examples': [
        'dat://beakerbrowser.com'
      ]
    },
    'emojis': {
      'type': 'array',
      'description': 'The reaction emojis. Must contain supported emojis.',
      'items': {
        'type': 'string',
        'enum': [
          '🙂',
          '😀',
          '😃',
          '😄',
          '😁',
          '😆',
          '😅',
          '😂',
          '😉',
          '😊',
          '😇',
          '🙃',
          '😍',
          '😘',
          '😗',
          '😚',
          '😙',
          '😋',
          '😛',
          '😜',
          '😝',
          '😐',
          '😑',
          '😶',
          '😏',
          '😒',
          '😬',
          '😌',
          '😔',
          '😪',
          '😴',
          '😷',
          '😵',
          '😎',
          '😕',
          '😟',
          '😮',
          '😯',
          '😲',
          '😳',
          '😦',
          '😧',
          '😨',
          '😰',
          '😥',
          '😢',
          '😭',
          '😱',
          '😖',
          '😣',
          '😞',
          '😓',
          '😩',
          '😫',
          '😤',
          '😡',
          '😠',
          '😈',
          '👿',
          '💀',
          '💩',
          '👺',
          '👻',
          '👾',
          '🙈',
          '🙉',
          '🙊',
          '❤',
          '💛',
          '💚',
          '💙',
          '💜',
          '💘',
          '💖',
          '💗',
          '💕',
          '💔',
          '👋',
          '✋',
          '👌',
          '✌',
          '👈',
          '👉',
          '👆',
          '👇',
          '☝',
          '👍',
          '👎',
          '✊',
          '👊',
          '👏',
          '🙌',
          '👐',
          '🙏',
          '💅',
          '💪',
          '⚠',
          '🚫',
          '⬆',
          '⬇',
          '🔜',
          '🔝',
          '♻',
          '✅',
          '✔',
          '❌',
          '⁉',
          '❓',
          '❗',
          '🅰',
          '🅱',
          '🆒',
          '🆓',
          'ℹ',
          '🆕',
          '🆗',
          '🆘',
          '💋',
          '💯',
          '💢',
          '💥',
          '💫',
          '💦',
          '💨',
          '💣',
          '💬',
          '💭',
          '💤',
          '👂',
          '👃',
          '👀',
          '👅',
          '👄',
          '🙅',
          '🙆',
          '💁',
          '🙋',
          '🙇',
          '👸',
          '👰',
          '👼',
          '🎅',
          '💇',
          '🏃',
          '💃',
          '👯',
          '🏇',
          '🏄',
          '👭',
          '👫',
          '👬',
          '💏',
          '💑',
          '👪',
          '👽',
          '👣',
          '🐞',
          '🌱',
          '🌲',
          '🍀',
          '🍁',
          '🍔',
          '🍕',
          '🍚',
          '🍩',
          '🍪',
          '🎂',
          '☕',
          '🍷',
          '🍸',
          '🍺',
          '🍻',
          '🌍',
          '🌎',
          '🌏',
          '🌐',
          '🚑',
          '🚒',
          '🚓',
          '🚜',
          '🚨',
          '🚦',
          '🚧',
          '⚓',
          '✈',
          null,
          '🚀',
          '⏳',
          '⏰',
          '🌙',
          '☀',
          '⭐',
          '🌟',
          '🌈',
          '☔',
          '⚡',
          '❄',
          '⛄',
          '🔥',
          '💧',
          '🌊',
          '🎃',
          '🎄',
          '✨',
          '🎈',
          '🎉',
          '🎊',
          '🎏',
          '🎀',
          '🎁',
          '🏆',
          '🎯',
          '🎱',
          '🔮',
          '🎮',
          '🎰',
          '🎲',
          '🎭',
          '🎨',
          '👓',
          '👔',
          '👠',
          '👑',
          '🎩',
          '🎓',
          '💄',
          '💍',
          '💎',
          '📢',
          '🎵',
          '🎶',
          '🎤',
          '🎷',
          '🎸',
          '🎺',
          '🔋',
          '🔌',
          '💾',
          '💡',
          '🔦',
          '📖',
          '📚',
          '📰',
          '💰',
          '💴',
          '💵',
          '💶',
          '💷',
          '💸',
          '💲',
          '📦',
          '📈',
          '📉',
          '📌',
          '🔒',
          '🔑',
          '🔨',
          '🔫',
          '🔧',
          '🔬',
          '🔭',
          '📡',
          '💉',
          '💊',
          '🚽',
          '🚬',
          '🏁',
          '🚩',
          '👋🏻',
          '✋🏻',
          '👌🏻',
          '✌🏻',
          '👈🏻',
          '👉🏻',
          '👆🏻',
          '👇🏻',
          '☝🏻',
          '👍🏻',
          '👎🏻',
          '✊🏻',
          '👊🏻',
          '👏🏻',
          '🙌🏻',
          '👐🏻',
          '🙏🏻',
          '💅🏻',
          '💪🏻',
          '👂🏻',
          '👃🏻',
          '🙅🏻',
          '🙆🏻',
          '💁🏻',
          '🙋🏻',
          '🙇🏻',
          '👸🏻',
          '👰🏻',
          '👼🏻',
          '🎅🏻',
          '💇🏻',
          '🏃🏻',
          '💃🏻',
          '🏄🏻',
          '👋🏼',
          '✋🏼',
          '👌🏼',
          '✌🏼',
          '👈🏼',
          '👉🏼',
          '👆🏼',
          '👇🏼',
          '☝🏼',
          '👍🏼',
          '👎🏼',
          '✊🏼',
          '👊🏼',
          '👏🏼',
          '🙌🏼',
          '👐🏼',
          '🙏🏼',
          '💅🏼',
          '💪🏼',
          '👂🏼',
          '👃🏼',
          '🙅🏼',
          '🙆🏼',
          '💁🏼',
          '🙋🏼',
          '🙇🏼',
          '👸🏼',
          '👰🏼',
          '👼🏼',
          '🎅🏼',
          '💇🏼',
          '🏃🏼',
          '💃🏼',
          '🏄🏼',
          '👋🏽',
          '✋🏽',
          '👌🏽',
          '✌🏽',
          '👈🏽',
          '👉🏽',
          '👆🏽',
          '👇🏽',
          '☝🏽',
          '👍🏽',
          '👎🏽',
          '✊🏽',
          '👊🏽',
          '👏🏽',
          '🙌🏽',
          '👐🏽',
          '🙏🏽',
          '💅🏽',
          '💪🏽',
          '👂🏽',
          '👃🏽',
          '🙅🏽',
          '🙆🏽',
          '💁🏽',
          '🙋🏽',
          '🙇🏽',
          '👸🏽',
          '👰🏽',
          '👼🏽',
          '🎅🏽',
          '💇🏽',
          '🏃🏽',
          '💃🏽',
          '🏄🏽',
          '👋🏾',
          '✋🏾',
          '👌🏾',
          '✌🏾',
          '👈🏾',
          '👉🏾',
          '👆🏾',
          '👇🏾',
          '☝🏾',
          '👍🏾',
          '👎🏾',
          '✊🏾',
          '👊🏾',
          '👏🏾',
          '🙌🏾',
          '👐🏾',
          '🙏🏾',
          '💅🏾',
          '💪🏾',
          '👂🏾',
          '👃🏾',
          '🙅🏾',
          '🙆🏾',
          '💁🏾',
          '🙋🏾',
          '🙇🏾',
          '👸🏾',
          '👰🏾',
          '👼🏾',
          '🎅🏾',
          '💇🏾',
          '🏃🏾',
          '💃🏾',
          '🏄🏾',
          '👋🏿',
          '✋🏿',
          '👌🏿',
          '✌🏿',
          '👈🏿',
          '👉🏿',
          '👆🏿',
          '👇🏿',
          '☝🏿',
          '👍🏿',
          '👎🏿',
          '✊🏿',
          '👊🏿',
          '👏🏿',
          '🙌🏿',
          '👐🏿',
          '🙏🏿',
          '💅🏿',
          '💪🏿',
          '👂🏿',
          '👃🏿',
          '🙅🏿',
          '🙆🏿',
          '💁🏿',
          '🙋🏿',
          '🙇🏿',
          '👸🏿',
          '👰🏿',
          '👼🏿',
          '🎅🏿',
          '💇🏿',
          '🏃🏿',
          '💃🏿',
          '🏄🏿'
        ]
      }
    }
  },
  'additionalProperties': false
}