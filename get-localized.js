/**
 * Use this to get a localized Google Play badge.
 *
 * @author Steve Richey
 * @license MIT
 */
var GetLocalizedPlayBadge = (function()
{
  var PLAY_BADGE_IMG_PATH = 'http://steverichey.github.io/google-play-badge-svg/img/{{locale}}_get.svg';
  
  // Public method
  function forCurrentLocale()
  {
    var locale = navigator.language || navigator.browserLanguage,
    
    return '<img src="' + _badgeFor(locale) + '" onerror="this.src=\'' + _badgeFor('en') + '\';" alt="Google Play"/>';
  }
  
  // Private methods
  function _badgeFor(locale)
  {
    var tinylocale = locale.toLowerCase().substring(0, 2);

    // should check for dialects here!

    return PLAY_BADGE_IMG_REF.replace('{{locale}}', locale);
  }
  
  return {
    forCurrentLocale
  };
}());