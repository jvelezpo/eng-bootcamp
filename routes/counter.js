'use strict'

const normalizeChars = require('../util/normalizer')

/**
 * Just a dummy JSON message for the root route
 */
const getRoot = (req, res) => {
  res.json({message: 'This is /'})
}

/**
 * This is the '/count' endpoint that returns a count of all the chars
 * passed in and input string as query parameter 'count?input=hello'
 * it respons with a JSON object containing each char and its number of
 * occurences in the input string.
 */
const getCount = (req, res) => {
  let input = req.query.input
  let response = {}
  if (input) {
    input = normalizeChars.normalizeChars(input)

    response = input.split('').reduce((last, now) => {
      last[now] ? last[now] ++ : last[now] = 1;
      return last;
    }, {})
  }
  res.json(response)
}

module.exports = { getRoot, getCount }
