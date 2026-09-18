import dotenv from 'dotenv'
export function loadEnv(){
    dotenv.config()
}

loadEnv();


type ServerConfig={
    PORT:number;
}


type DBConfig ={
    DB_USER:string
    DB_PASSWORD:string
    DB_HOST:string
    DB_NAME:string
}

export const serverConfig ={
    PORT: Number(process.env.PORT) || 3001
}

export const dbConfig: DBConfig = {
    DB_USER: process.env.DB_USER || '',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_HOST: process.env.DB_HOST || '',
    DB_NAME: process.env.DB_NAME || ''
}
