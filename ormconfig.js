module.exports = {
  type: 'mysql',
  url: 'mysql://root:root@localhost:3306/banking-nest',
  migrations: ['dist/app/infra/migrations/*.js', 'app/infra/migrations/*.js'],
  cli: {
    migrationsDir: './app/infra/migrations',
  },
  migrationsRun: true,
  logging: true,
  timezone: '+0',
  entities: [
    'dist/**/command/infra/persistence/typeorm/entities/**.typeorm.js',
    '**/command/infra/persistence/typeorm/entities/**.typeorm.js',
  ],
};
