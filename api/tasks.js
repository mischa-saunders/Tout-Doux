const express = require('express')
const route = express.Router()

module.exports = function (db) {

  // GET api/v1/tasks/
  route.get('/', get)
  // route.post('/', post)

  function get (req, res, next) {
    console.log(req.url)
    db.find("ToutDoux", {})
      .then((ToutDoux) => {
        res.json({ToutDoux})
      })
      .catch(next)
  }

  // function post (req, res, next) {
  // }

  return route
}
