const {ArcPreferences} = require('../../arc-preferences');
/**
 * A preferences class to store and read theme info file.
 */
class ThemeInfo extends ArcPreferences {
  constructor(file) {
    super({
      file
    });
  }
}
module.exports.ThemeInfo = ThemeInfo;
