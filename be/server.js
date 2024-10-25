import express from 'express'
import { config } from 'dotenv'
const port = process.env.PORT || 3001

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`
    )
});