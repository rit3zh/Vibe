import TrackPlayer from "react-native-track-player";

module.exports = async function () {
  TrackPlayer.setupPlayer({}).then(async () => {
    console.log("Player is set up");
  });

  TrackPlayer.updateOptions({
    stopWithApp: true,
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_STOP,
    ],
  });
};
