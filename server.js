const { MartialArtist, Dojo } = require('./db');
const { syncAndSeed } = require('./db/seed.js')
const port = process.env.PORT || 3000;
const app = require('./routes/app.js');


const init = async () => {
  try {
    await syncAndSeed();
    app.listen(port, () => {
      console.log(`app listening on port ${port}`)
    });
  }
  catch (error) {
    console.log(error);
  }
}
init()

