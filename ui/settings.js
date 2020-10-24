'use strict';

const m = require('mithril');
const HTML = require('hyperscript-adapter');
const HTMLModule = require('hyperscript-adapter');
const $ = HTML({
    h: m,
    textConvert: (a) => `${a}`,
    combineId: true,
    combineClasses: true,
});
const mod = HTMLModule($, {
    partialApply: true,
});
module.exports = { mod, $ };
