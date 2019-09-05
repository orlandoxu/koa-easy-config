/**
 * User: orlando
 * Date: 12-9-28
 * Time: 10:55
 */
const fs = require('fs');

function loadConfig(path) {
  let cfg = require(path + './default');

  const node_env = process.env.NODE_ENV;
  if (node_env && fs.existsSync(path + node_env + '.js')) {
    const cfg_env = require(path + node_env + '.js');
    cfg = {...cfg, ...cfg_env};
  }
  Object.freeze(cfg);
  return cfg;
}

module.exports = cfg;
