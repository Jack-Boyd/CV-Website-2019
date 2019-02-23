import uuid from 'uuid'

export const addSkill = (
  {
    image = '',
    name = '',
    rating = 0,
    text = '',
    type = ''
  } = {}
) => ({
  type: 'ADD_SKILL',
  skill: {
    id: uuid(),
    image,
    name,
    rating,
    text,
    type
  }
});