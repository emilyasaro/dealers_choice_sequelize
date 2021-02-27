const { MartialArtist, Dojo, db } = require('./index');

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    const dojos = await Promise.all([
      Dojo.create({ name: "Miyagi-Do", grandMaster: "Mr. Miyagi", motto: "When the fight comes to you, you have to be ready to fight back." }),
      Dojo.create({ name: "Cobra Kai", grandMaster: "John Kreese", motto: "Strike first. String hard. No Mercy."}),
      Dojo.create({ name: "Eagle Fang Karate", grandMaster: "Johnny Lawrence", motto: "Cobras are strong. They may be king of the jungle, but the world's more than just a jungle. And there's only one animal... that can kill a snake."})
    ]);
    const martialArtists = await Promise.all([
      MartialArtist.create({ name: "Daniel LaRusso", level: "Sensei" }),
      MartialArtist.create({ name: "Johnny Lawrence", level: "Sensei" }),
      MartialArtist.create({ name: "John Kreese", level: "Sensei" }),
      MartialArtist.create({ name: "Miguel Diaz", level: "Student" }),
      MartialArtist.create({ name: "Robby Keene", level: "Student" }),
      MartialArtist.create({ name: "Demetri", level: "Sensei" }),
      MartialArtist.create({ name: "Samantha LaRusso", level: "Student" }),
      MartialArtist.create({ name: "Hawk", level: "Student" }),
      MartialArtist.create({ name: "Tory Nichols", level: "Sensei" }),
    ]);
    const [ miyagiDo, cobraKai, eagleFang ] = dojos;
    const [ daniel, johnny, john, miguel, robby, demetri, samantha, hawk, tory ] = martialArtists;
    await daniel.setRival(johnny);
    await johnny.setRival(daniel);
    await john.setRival(daniel);
    await miguel.setRival(robby);
    await robby.setRival(miguel);
    await samantha.setRival(tory);
    await tory.setRival(samantha);
    await hawk.setRival(demetri);
    await demetri.setRival(hawk);
    await daniel.setRival(john);
    await cobraKai.setMembers([hawk, tory]);
    await miyagiDo.setMembers([robby, samantha, demetri]);
    await eagleFang.setMembers(miguel);
    await daniel.setDojo(miyagiDo);
    await john.setDojo(cobraKai);
    await johnny.setDojo(eagleFang);
  }
  catch (error) {
    console.log(error)
  }
}

module.exports = { syncAndSeed };
