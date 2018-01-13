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
  const response = {}
  if (input) {
    input = normalizeChars.normalizeChars(input)
    for (let i = 0; i < input.length; i++) {
      if (!response[input[i]]) {
        response[input[i]] = 1
      } else {
        response[input[i]] += 1
      }
    }
  }
  res.json(response)
}

module.exports = { getRoot, getCount }
