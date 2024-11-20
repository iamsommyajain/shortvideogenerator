import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
  schema: "./configs/schema.js",
  dbCredentials:{
    url:'postgresql://neondb_owner:5yYEsArWTkU6@ep-calm-silence-a54qo7ln.us-east-2.aws.neon.tech/aivideogenerator?sslmode=require'
  }
});