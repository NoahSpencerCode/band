const {Band} = require('./Band')
const {Musician} = require('./Musician')
const {Song} = require('./Song')

/**
 * TODO: Create assoications between Musician and Band models
 * 
 *  Clue#1:  Each musician instance must belong to a band
 *  Clue#2: Bands can have multiple musicians
 * 
 *  To complete this task, you'll have to use the functions .belongsTo() and .hasMany() 
 */
Musician.belongsTo(Band);
Band.hasMany(Musician);

Band.belongsToMany(Song, {through: "Song_Band"});
Song.belongsToMany(Band, {through: "Song_Band"});

module.exports = {
    Band,
    Musician
};