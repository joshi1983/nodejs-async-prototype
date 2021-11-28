import fs from 'fs';
export const config = JSON.parse(await fs.promises.readFile("my-api-com/config.json"));