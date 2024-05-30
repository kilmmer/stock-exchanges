import { MongoDB } from './mongodb'
import { Redis } from './redis'
import { PostgreSQL } from './pgsql'

namespace Database {
    export interface Database {

        get(key: string): any
        set(key: string, value: any): void
        del(key: string): void
    }

    export interface DatabaseFactory {
        get(db: string): Database
    }

}


function getDatabase(db: string = '') {
    if (db) {
        switch (db) {
            case 'redis':
                return new Redis()
                break;
            case 'mongodb':
                return new MongoDB()
                break;
            case 'pgsql':
                return new PostgreSQL()
                break;
            default:
                throw new Error('db not found')
        }
    } else {
        throw new Error('db not found')
    }
}

export default Database