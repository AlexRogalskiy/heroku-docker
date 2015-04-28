var fs = require('fs');
var path = require('path');
var child = require('child_process');
var _ = require('lodash');
var exists = require('is-there');
var state = require('../lib/state');
var docker = require('../lib/docker');
var platforms = require('../platforms');
var util = require('heroku-cli-util');

module.exports = function(topic) {
  return {
    topic: topic,
    command: 'init',
    description: 'creates a Dockerfile for local development',
    help: `help text for ${topic}:init`,
    flags: [
      { name: 'template', description: 'create a Dockerfile based on a language template', hasValue: true }
    ],
    run: function(context) {
      createDockerfile(context.cwd, context.args.template);
    }
  };
};

function createDockerfile(dir, lang) {
  var dockerfile = path.join(dir, docker.filename);
  var platform = lang ? platforms.find(lang) : platforms.detect(dir);
  if (!platform) {
    util.error('No appropriate language or framework detected, overwrite with `--template`');
    return;
  }

  var contents = platform.getDockerfile(dir);
  if (contents) {
    try {
      fs.statSync(dockerfile);
      util.log('Overwriting existing Dockerfile');
    }
    catch (e) {
    }

    fs.writeFileSync(dockerfile, contents);
    util.log(`Wrote Dockerfile (${platform.name})`);
  }
  else {
    util.log('Nothing to write');
  }
}
