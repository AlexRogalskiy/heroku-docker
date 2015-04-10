const TOPIC = 'docker';

module.exports = {
  topics: [{
    name: TOPIC,
    description: 'Develop for Heroku locally, with Docker'
  }],
  commands: [
    require('./commands/init')(TOPIC),
    require('./commands/exec')(TOPIC),

    require('./commands/create')(TOPIC),
    require('./commands/run')(TOPIC),
    require('./commands/start')(TOPIC),
    require('./commands/release')(TOPIC),
    require('./commands/open')(TOPIC),
    require('./commands/clean')(TOPIC)
  ]
};
