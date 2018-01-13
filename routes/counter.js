'use strict'

const getRoot = (req, res) => {
  res.json({message: 'This is /'})
}

const getCount = (req, res) => {
  res.json({
    h: 1,
    e: 1,
    l: 2,
    o: 1
  })
}

module.exports = { getRoot, getCount }
