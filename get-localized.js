/**
 * Use this to get a localized Google Play badge.
 *
 * @author Steve Richey
 * @license MIT
 */
var GetLocalizedPlayBadge = GetLocalizedPlayBadge || {};

GetLocalizedPlayBadge.forCurrentLocale = GetLocalizedPlayBadge.forCurrentLocale || function (desiredWidth) {
        'use strict';
        desiredWidth = desiredWidth || {};
        var PLAY_BADGE_IMG_PATH = 'http://steverichey.github.io/google-play-badge-svg/img/{locale}_get.svg';
        var _badgeFor = function(locale) {
                var tinylocale = locale.toLowerCase().substring(0, 2);
                // should check for dialects here!
                return PLAY_BADGE_IMG_REF.replace('{locale}', locale);
        }
        var locale = navigator.language || navigator.browserLanguage;
        document.write('<img src="' + _badgeFor(locale) + '" onerror="this.src=\'' + _badgeFor('en') + '\';" alt="Google Play"/>');
};
