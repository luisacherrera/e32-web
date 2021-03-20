import Cors from 'cors'
import initMiddleware from '../../lib/middleware'
import { getSlidersData } from '../../lib/api'

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async function getData(req, res) {
  // Run cors
  await cors(req, res)

  const resData = await getSlidersData();

  res.json(resData)
}