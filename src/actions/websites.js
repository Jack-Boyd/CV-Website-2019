import uuid from 'uuid'

export const addWebsite = (
  {
    image = '',
    name = '',
    url = '',
    text = ''
  } = {}
) => ({
  type: 'ADD_WEBSITE',
  website: {
    id: uuid(),
    image,
    name,
    url,
    text
  }
});