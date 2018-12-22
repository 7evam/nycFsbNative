const Sequelize = require('sequelize');

const db = new Sequelize({
  database: 'nycFsbNative',
  dialect:  'postgres',
  define:   {
    underscored:   true,
    returning:     true,
  },
});

const Artist = db.define('artist', {
  name: {
    type:         Sequelize.STRING(64),
    allowNull:    false,
    unique:       true,
  },
  desc: {
    type:         Sequelize.TEXT,
    allowNull:    false,
  },
  img: {
    type:         Sequelize.TEXT,
    allowNull:    false,
  },
  website: {
    type:         Sequelize.TEXT,
  },
  spotify: {
    type:         Sequelize.TEXT,
  },
});

const Venue = db.define('venue', {
  name: {
    type:         Sequelize.STRING(64),
    allowNull:    false,
    unique:       true,
  },
  desc: {
    type:         Sequelize.TEXT,
    allowNull:    false,
  },
  img: {
    type:         Sequelize.TEXT,
    allowNull:    false,
  },
  address: {
    type:         Sequelize.STRING(128),
    allowNull:    false,
  },
});

const Show = db.define('show', {
  date: {
    type:         Sequelize.DATEONLY,
    allowNull:    false,
  },
  link: {
    type:         Sequelize.TEXT,
  },
});

const Article = db.define('article',{
  title: {
    type: Sequelize.STRING(64),
    allowNull: false,
  },
  img: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

//associations

Show.belongsToMany(Artist, { through: 'artist_show_xref'});
Artist.belongsToMany(Show, { through: 'artist_show_xref'});

Venue.belongsToMany(Show, { through: 'venue_show_xref'});
Show.belongsToMany(Venue, { through: 'venue_show_xref'});

module.exports = {
  Artist,
  Venue,
  Show,
  Article,
  db,
};












