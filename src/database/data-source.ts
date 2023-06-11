import { DataSource } from 'typeorm';
import { Example } from '../entities/example.entity';

export const AppDataSource = new DataSource({
    type:"sqlite",
    database:"db.sql",
    synchronize:true,
    entities:[Example]
})

