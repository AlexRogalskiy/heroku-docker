module.exports = {
  'heroku-redis': {
    image: 'redis',
    env: { 'REDIS_URL': 'redis://herokuRedis:6379' }
  },
  'rediscloud': {
    image: 'redis',
    env: { 'REDISCLOUD_URL': 'redis://rediscloud:6379' }
  },
  'heroku-postgresql': {
    image: 'postgres',
    env: { 'DATABASE_URL': 'postgres://postgres:@herokuPostgresql:5432/postgres' }
  },
  'mongolab': {
    image: 'mongo',
    env: { "MONGOHQ_URL": 'mongolab:27017' }
  }
};
