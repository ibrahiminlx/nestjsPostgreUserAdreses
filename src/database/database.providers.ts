import { Sequelize } from 'sequelize-typescript';
import { User } from '../Models/user.entity';
import { Address } from '../Models/address.entity';
import { databaseConfig } from './database.config';
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      let config = databaseConfig[process.env.NODE_ENV] || databaseConfig.development;
      switch (config) {
        case 'DEVELOPMENT':
          config = databaseConfig.development;
          break;
        case 'TEST':
          config = databaseConfig.test;
          break;
        case 'PRODUCTION':
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([User,Address]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
