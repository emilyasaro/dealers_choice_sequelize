const { DataTypes, Model, Sequelize } = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/karatekid_rivalries', { logging: false });


class MartialArtist extends Model {}

MartialArtist.init({
  name: {
    type: DataTypes.STRING,
    // allowNull: false,
    // validate: {
    //   notEmpty: true
    // }
  },
  level: {
    type: DataTypes.ENUM("Sensei", "Student"),
    // allowNull: false,
    defaultValue: "Student"
  },

},
  {  sequelize: db, modelName: 'MartialArtist'  }
)

class Dojo extends Model {}

Dojo.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  grandMaster: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  motto: {
    type: DataTypes.TEXT,

  }
},
  {  sequelize: db, modelName: 'Dojo'  }
)

MartialArtist.belongsTo(MartialArtist, { as: "rival" });
MartialArtist.hasMany(MartialArtist, { as: "dojoRivalry", foreignKey: "rivalId"});

MartialArtist.belongsTo(Dojo);
Dojo.hasMany(MartialArtist, { as: "members" });
Dojo.hasOne(MartialArtist, { as: "HeadInstructor", foreignKey: "DojoId" });

MartialArtist.findRivals = function (id) {
  return this.findOne({
    include: {
      model: MartialArtist,
      as: 'rival'
    },
    where: {
      id
    }
  })
}

module.exports = { db, MartialArtist, Dojo };
