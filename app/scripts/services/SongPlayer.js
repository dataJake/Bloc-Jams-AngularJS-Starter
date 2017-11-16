(function() {
    function SongPlayer() {
         var SongPlayer = {};

         /**
         * @desc holds value of current songPlayer
         * @type {Object}
         */
         var currentSong = null;

         /**
         * @desc Buzz object audio file
         * @type {Object}
         */
         var currentBuzzObject = null;

         /**
         * @function setSong
         * @desc Stops currently playing song and loads new audio file as currentBuzzObject
         * @param {Object} song
         */
         var setSong = function(song) {
             if (currentBuzzObject) {
                 currentBuzzObject.stop();
                 currentSong.playing = null;
             }

             currentBuzzObject = new buzz.sound(song.audioUrl, {
                 formats: ['mp3'],
                 preload: true
             });

             currentSong = song;
         };

         /**
         * @function playSong
         * @desc plays currentBuzzObject
         * @param {Object} song
         */
         var playSong = function(song) {
             if (currentBuzzObject) {
                 currentBuzzObject.play();
                 song.playing = true;
             }
         };

         /**
         * @method SongPlayer.play
         * @desc plays the selected song
         * @param {Object} song
         */
         SongPlayer.play = function(song) {
             if (currentSong !== song) {
                 setSong(song);

                 playSong(song);
                 /*currentBuzzObject.play();
                 song.playing = true;*/

             } else if (currentSong === song) {
                 if (currentBuzzObject.isPaused()) {
                     currentBuzzObject.play();
                 }
             }
        };

        /**
        * @method SongPlayer.pause
        * @desc pauses the selected song
        * @param {object} song
        */
        SongPlayer.pause = function(song) {
            currentBuzzObject.pause();
            song.playing = false;
        };

        return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();
