import app from './app.mts'
const port = 4000

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})