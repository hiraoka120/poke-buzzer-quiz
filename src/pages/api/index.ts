import type { NextApiRequest, NextApiResponse } from 'next'
import { readFileSync } from 'fs'
import { join } from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const jsonPath = join(process.cwd(), 'src', 'pages', 'api', 'data', 'index.json');
    const data = readFileSync(jsonPath, 'utf-8');
    // TODO: 余計なデータを返している&Frontで使いにくい形なので要整形
    res.status(200).json(data);
  } catch (err) {
    // TODO: 例外処理
    console.log(err);
  }
};