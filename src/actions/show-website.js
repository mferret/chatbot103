const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')
const website = ['Facebook', 'Twitter', 'instagram', 'LinkedIn',]

export default async function showwebsite(res) {
  console.log('SHOW WEBSITE')

  const replies = []
  const quickReplies = []
  website.forEach((l) => {
    quickReplies.push({
      name: l,
      value: `Top starred repos in ${l}`,
    })
  })
  replies.push(formatter.formatQuickReplies(quickReplies,res.reply()))
  return replies
}