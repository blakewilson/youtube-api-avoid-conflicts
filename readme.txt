=== YouTube API Avoid Conflicts ===
Contributors: pushlabs
Tags: YouTube API
Requires at least: 2.1.0
Tested up to: 4.9.6
Stable tag: 1.0.0
License: MIT

A simple plugin to avoid conflicts with the YouTube API. Specifically, the window.onYouTubePlayerAPIReady function.

== Description ==
YouTube API Avoid Conflicts adds a piece of JavaScript code to the bottom of your WordPress site and finds all instances of window.onYouTubePlayerAPIReady and combines them.

Since the YouTube API requires you to use the function window.onYouTubePlayerAPIReady, there are bound to be conflicts with multiple plugins/themes that utilize the YouTube API. This quick and easy plugin will combine all of these calls into one window.onYouTubePlayerAPIReady call.

== Installation ==
1. Upload `youtube-api-avoid-conflicts` to the `/wp-content/plugins/` directory
1. Activate the plugin through the \\\'Plugins\\\' menu in WordPress
1. That\'s it. Once activated, the plugin will add the JavaScript snippet at the bottom of the page and you won\'t have to worry about conflicts with the window.onYouTubePlayerAPIReady function.