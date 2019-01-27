module.exports = {
  '$schema': 'http://json-schema.org/draft-07/schema#',
  '$id': 'dat://unwalled.garden/micro-post.json',
  'type': 'object',
  'title': 'Micro Post',
  'description': 'A short text post.',
  'required': [
    'type',
    'content',
    'createdAt'
  ],
  'properties': {
    'type': {
      'type': 'string',
      'title': "The object's type",
      'const': 'unwalled.garden/micro-post'
    },
    'content': {
      'type': 'string',
      'title': "The post's content",
      'maxLength': 280
    },
    'createdAt': {
      'type': 'string',
      'format': 'date-time',
      'title': "The time of this post's creation"
    },
    'updatedAt': {
      'type': 'string',
      'format': 'date-time',
      'title': "The time of this post's last edit"
    }
  },
  'additionalProperties': false
}