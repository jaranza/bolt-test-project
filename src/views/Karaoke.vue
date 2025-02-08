<template>
      <div>
        <h1>Karaoke Mode</h1>
        <audio ref="audio" controls>
          <source src="https://jaranza.online/1.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
        <div v-for="(line, index) in lyrics" :key="index" :class="{ 'highlight': currentLine === index }">
          {{ line.text }}
        </div>
      </div>
    </template>

    <script>
    export default {
      name: 'Karaoke',
      data() {
        return { lyrics : 
[
  {
    "text": "Some people suppress you",
    "time": 34.055
  },
  {
    "text": "They partch you and reap a disaster",
    "time": 36.084
  },
  {
    "text": "Reeducation for the infants",
    "time": 41.091
  },
  {
    "text": "Who demanded for an innocent instance",
    "time": 46.076
  },
  {
    "text": "The great commandment shows the contempt",
    "time": 53.08
  },
  {
    "text": "Between the world and their embarrassing pavement",
    "time": 57.048
  },
  {
    "text": "Believe the scholars, read the readings",
    "time": 61.017
  },
  {
    "text": "Realize the man who says anything",
    "time": 65.049
  },
  {
    "text": "The great commandment",
    "time": 71.065
  },
  {
    "text": "♪",
    "time": 74.067
  },
  {
    "text": "The needies believe you",
    "time": 90.099
  },
  {
    "text": "They treat you",
    "time": 93.002
  },
  {
    "text": "Like survivor of a disaster",
    "time": 96.015
  },
  {
    "text": "Reeducation for the infants",
    "time": 98.016
  },
  {
    "text": "Who demanded for an innocent instance",
    "time": 102.061
  },
  {
    "text": "The great commandment shows the contempt",
    "time": 109.075
  },
  {
    "text": "Between the world and their embarrassing pavement",
    "time": 113.076
  },
  {
    "text": "Believe the scholars, read the readings",
    "time": 117.043
  },
  {
    "text": "Realize the man who says anything",
    "time": 121.099
  },
  {
    "text": "♪",
    "time": 127.032
  },
  {
    "text": "The great commandment shows the contempt",
    "time": 160.095
  },
  {
    "text": "Between the world and their embarrassing pavement",
    "time": 164.029
  },
  {
    "text": "Believe the scholars, read the readings",
    "time": 167.092
  },
  {
    "text": "Realize the man who says anything",
    "time": 171.095
  },
  {
    "text": "The great commandment",
    "time": 178.049
  }
],
          currentLine: 0,
        };
      },
      mounted() {
        this.$refs.audio.addEventListener('timeupdate', this.syncLyrics);
      },
      beforeUnmount() {
        this.$refs.audio.removeEventListener('timeupdate', this.syncLyrics);
      },
      methods: {
        syncLyrics() {
          const currentTime = this.$refs.audio.currentTime;
          this.currentLine = this.lyrics.findIndex((line, index) => {
            return currentTime >= line.time && (index === this.lyrics.length - 1 || currentTime < this.lyrics[index + 1].time);
          });
        },
      },
    };
    </script>

    <style scoped>
    .highlight {
      color: red;
      font-weight: bold;
    }
    </style>
