/*jshint trailing:true, white:true, indent:2, strict:true, curly:true,
  immed:true, eqeqeq:true, forin:true, latedef:true,
  newcap:true, noarg:true, undef:true */
/*global XT:true, XM:true, XV:true, process:true, module:true, require:true */

var XVOWS = XVOWS || {};
(function () {
  "use strict";

  var vows = require("vows"),
    crud = require('../lib/crud'),
    data = {
      recordType: "XM.Terms",
      autoTestAttributes: true,
      createHash: {
        code: "datTerm"
      },
      updateHash: {
        code: "updatedTerm"
      }
    };

  vows.describe('XM.Terms CRUD test').addBatch({
    'We can run the XM.Terms CRUD tests ': crud.runAllCrud(data)
  }).export(module);

}());
