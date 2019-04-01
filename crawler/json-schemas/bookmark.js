module.exports = {
  '$schema': 'http://json-schema.org/draft-07/schema#',
  '$id': 'dat://unwalled.garden/bookmark.json',
  'type': 'object',
  'title': 'Bookmark',
  'description': 'A saved/shared link to some URL.',
  'required': ['type', 'content', 'createdAt'],
  'properties': {
    'type': {
      'type': 'string',
      'description': "The object's type",
      'const': 'unwalled.garden/bookmark'
    },
    'content': {
      'type': 'object',
      'required': ['href', 'title'],
      'properties': {
        'href': {
          'type': 'string',
          'format': 'uri',
          'examples': [
            'dat://beakerbrowser.com'
          ],
          'maxLength': 10000
        },
        'title': {
          'type': 'string',
          'maxLength': 280
        },
        'description': {
          'type': 'string',
          'maxLength': 560
        },
        'tags': {
          'type': 'array',
          'items': {
            'type': 'string',
            'maxLength': 100,
            'pattern': '^[A-Za-z][A-Za-z0-9-_?]*$'
          }
        }
      }
    },
    'createdAt': {
      'type': 'string',
      'format': 'date-time'
    },
    'updatedAt': {
      'type': 'string',
      'format': 'date-time'
    }
  }
}