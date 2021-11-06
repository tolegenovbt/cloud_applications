// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const router = require('express-promise-router')();
const graph = require('../graph.js');
const addDays = require('date-fns/addDays');
const formatISO = require('date-fns/formatISO');
const startOfWeek = require('date-fns/startOfWeek');
const zonedTimeToUtc = require('date-fns-tz/zonedTimeToUtc');
const iana = require('windows-iana');
const { body, validationResult } = require('express-validator');
const validator = require('validator');

// <GetRouteSnippet>
/* GET /calendar */
router.get('/',
  async function(req, res) {
    if (!req.session.userId) {
      // Redirect unauthenticated requests to home page
      res.redirect('/')
    } else {
      const params = {
        active: { images: true },
        images: { first: `https://storbekzat.blob.core.windows.net/privatecont/meme.jpg?${process.env.SAS_TOKEN}`,
                  second: `https://storbekzat.blob.core.windows.net/privatecont/meme2.png?${process.env.SAS_TOKEN}`}
      };

      res.render('images', params);
    }
  }
);

module.exports = router;
