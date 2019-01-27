module.exports = {
  '$schema': 'http://json-schema.org/draft-07/schema#',
  '$id': 'dat://unwalled.garden/content.json',
  'type': 'object',
  'title': 'Content',
  'description': 'A description of media content.',
  'required': [
    'type'
  ],
  'properties': {
    'type': {
      'type': 'string',
      'title': "The object's type",
      'const': 'unwalled.garden/content'
    },
    'item': {
      'type': 'object',
      'required': [
        'filename'
      ],
      'properties': {
        'filename': {
          'type': 'string',
          'examples': [
            'dat://beakerbrowser.com'
          ]
        },
        'title': {
          'type': 'string'
        },
        'description': {
          'type': 'string'
        }
      }
    },
    'items': {
      'type': 'array',
      'items': {
        'type': 'object',
        'required': [
          'filename'
        ],
        'properties': {
          'filename': {
            'type': 'string',
            'examples': [
              'dat://beakerbrowser.com'
            ]
          },
          'title': {
            'type': 'string'
          },
          'description': {
            'type': 'string'
          }
        }
      }
    },
    'createdAt': {
      'type': 'string',
      'format': 'date-time',
      'title': "The time of this content's creation"
    }
  },
  'additionalProperties': false
}