const redis = require('redis');
const client = redis.createClient({ host: 'redis' });

client.on('connect', () => {
  console.log('Redis connected');
});

client.on('error', (err) => {
  console.log('Redis error', err);
});

module.exports.redisClient = client;
