const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')
const languages = ['Assembly', 'C', 'C++', 'Go', 'Java', 'JavaScript', 'Python', 'Ruby', 'Rust', 'Swift',]

exports.formatQuickReplies = (quickRp, sentence) => {
  const elements = []
  quickRp.forEach((elem) => {
    elements.push({
      title: elem.name,
      value: elem.value,
    })
  })
  return {
    type: 'quickReplies',
    content: {
      title: sentence,
      buttons: elements,
    },
  }
}