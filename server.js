const server = express()
  .use((req, res) => res.sendFile('./public/index.html') )
  .listen(8080, () => console.log(`Listening on ${ 8080 }`));