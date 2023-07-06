import { config}  from "dotenv"
config()

import { Configuration, OpenAIApi } from "openai"

const openai = new OpenAIApi(new Configuration({
    
}))

console.log(process.env.API_KEY)