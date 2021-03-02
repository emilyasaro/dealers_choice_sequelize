const router = require('express').Router();
const { MartialArtist, Dojo } = require('../db/index.js');
const homeLayout = require('../client/homeLayout.js');
const dojoDetails = require('../client/dojoDetails.js');
const html = require('html-template-tag');


// router.get("/", (req, res) => res.redirect("/dojos"));

// the homepage displays the list of the 3 dojos in the LA valley
router.get('/', async (req, res, next) => {
  try {
    const dojoList = await Dojo.findAll({
      include: [ {
        model: MartialArtist,
        as: 'members',
        where: {
          level: 'Sensei'
        }
      }]
  })
    res.send(homeLayout(dojoList));
  }
  catch (error) {
    next(error);
  }
})


router.get('/dojos/:id', async (req, res, next) => {
  try {
    const dojoStudents = await Dojo.findAll({
      where: {
        id: req.params.id
      },
      include: [{
        model: MartialArtist,
        as: 'members',
        where: {
          level: 'Student'
        }
      }]
    });
    const dojoSensei = await Dojo.findAll({
      where: {
        id: req.params.id
      },
      include: [{
        model: MartialArtist,
        as: 'members',
        where: {
          level: 'Sensei'
        }
      }]
    })

    res.send(dojoDetails(dojoStudents, dojoSensei));
  }
    catch(error) {
      next(error);
    }
  })


module.exports = router;
