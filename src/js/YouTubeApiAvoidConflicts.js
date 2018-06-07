/**
 * YouTube API Avoid Conflicts WordPress Plugin
 * @author Push Labs
 * @link https://pushlabs.co
 * @link http://www.gambit.ph/how-to-use-the-javascript-youtube-api-across-multiple-plugins/
 * @license MIT
 *
 */
setTimeout(function () {
    if (typeof window.onYouTubePlayerAPIReady !== 'undefined') {
        if (typeof window.YTAACCatchOtherYTAPIReady === 'undefined') {
            window.YTAACCatchOtherYTAPIReady = [];
        }
        window.YTAACCatchOtherYTAPIReady.push(window.onYouTubePlayerAPIReady);
    }
    window.onYouTubePlayerAPIReady = function () {
        if (typeof window.YTAACCatchOtherYTAPIReady !== 'undefined') {
            if (window.YTAACCatchOtherYTAPIReady.length) {
                window.YTAACCatchOtherYTAPIReady.pop()();
            }
        }
    }
}, 2);