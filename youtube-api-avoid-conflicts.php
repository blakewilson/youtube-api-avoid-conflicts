<?php
/*
Plugin Name: YouTube API Avoid Conflicts
Description: A WordPress plugin to avoid conflicts with the onYouTubePlayerAPIReady() YouTube API function
Author: Push Labs
Version: 1.0.0
Author URI: https://pushlabs.co
 */

define('YTAAC_PLUGIN_PATH', plugin_dir_path(__FILE__));
define('YTAAC_PLUGIN_URL', plugin_dir_url(__FILE__));
define('YTAAC_PLUGIN_VERSION', '1.0.0');

class PushLabs_YouTube_Api_Avoid_Conflicts
{
    public function __construct()
    {
        // Add the hook for the avoid conflicts script and set the priority to 9999 to make it execute last
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'), 9999);
    }

    /**
     * Enqueue the avoid conflicts script
     *
     * @return void
     */
    public function enqueue_scripts()
    {
        wp_enqueue_script('youtube-api-avoid-conflicts', YTAAC_PLUGIN_URL . 'assets/js/YouTubeApiAvoidConflicts.js', array(), YTAAC_PLUGIN_VERSION, true);
    }
}

$pushlabs_youtube_api_avoid_conflicts = new PushLabs_YouTube_Api_Avoid_Conflicts;
