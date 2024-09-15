import express from "express";
const app = express();
app.use(express.json());
app.use(express.static('dist/'));
app.get('/', (req, res) => {
    res.send('Hello Worrrrld!')
  })
export default app;
