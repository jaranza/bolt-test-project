<template>
      <div>
        <h1>Karaoke Mode</h1>
        <audio ref="audio" controls>
          <source :src="mp3Source" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
        <div v-for="(line, index) in visibleLyrics" :key="index" :class="{ 'highlight': currentLine === index + startIndex }">
          {{ line.text }}
        </div>
      </div>
    </template>

    <script>
    export default {
      name: 'Karaoke',
      data() {
        return {
          lyrics: [
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
          startIndex: 0,
          mp3Source: 'https://jaranza.online/1.mp3',
        };
      },
      computed: {
        visibleLyrics() {
          return this.lyrics.slice(this.startIndex, this.startIndex + 5);
        },
      },
      mounted() {
        this.loadStoredData();
        this.$refs.audio.addEventListener('timeupdate', this.syncLyrics);
      },
      beforeUnmount() {
        this.$refs.audio.removeEventListener('timeupdate', this.syncLyrics);
      },
      methods: {
        loadStoredData() {
          const storedLyrics = localStorage.getItem('lyrics');
          const storedMp3Source = localStorage.getItem('mp3Source');
          if (storedLyrics) {
            this.lyrics = JSON.parse(storedLyrics);
          }
          if (storedMp3Source) {
            this.mp3Source = storedMp3Source;
          }
        },
        syncLyrics() {
          const currentTime = this.$refs.audio.currentTime;
          this.currentLine = this.lyrics.findIndex((line, index) => {
            return currentTime >= line.time && (index === this.lyrics.length - 1 || currentTime < this.lyrics[index + 1].time);
          });

          // Update the startIndex to keep the current line in the middle of the visible lyrics
          if (this.currentLine >= this.startIndex + 5) {
            this.startIndex = Math.max(0, this.currentLine - 2);
          } else if (this.currentLine < this.startIndex) {
            this.startIndex = Math.max(0, this.currentLine - 2);
          }
        },
      },
      watch: {
        lyrics: {
          handler(newLyrics) {
            localStorage.setItem('lyrics', JSON.stringify(newLyrics));
          },
          deep: true,
        },
        mp3Source(newMp3Source) {
          localStorage.setItem('mp3Source', newMp3Source);
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
