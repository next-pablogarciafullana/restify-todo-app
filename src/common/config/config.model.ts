export interface Config {
  name: string;
  host: string;
  port: number;
  log: {
    level: string;
  };
  db: {
    user: string;
    password: string;
    host: string;
    port: number;
    database: string;
  };
  environment: string;
}
