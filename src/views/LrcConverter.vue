<template>
      <div>
        <h1>LRC Converter</h1>
        <textarea v-model="lrcContent" placeholder="Paste your LRC file content here" rows="10" cols="50"></textarea>
        <button @click="convertLrc">Convert</button>
        <pre>{{ convertedLyrics }}</pre>
      </div>
    </template>

    <script>
    export default {
      name: 'LrcConverter',
      data() {
        return {
          lrcContent: '',
          convertedLyrics: '',
        };
      },
      methods: {
        convertLrc() {
          const lines = this.lrcContent.split('\n');
          const lyrics = lines.map(line => {
            const match = line.match(/\[(\d+):(\d+)\.(\d+)\](.*)/);
            if (match) {
              const minutes = parseInt(match[1], 10);
              const seconds = parseInt(match[2], 10);
              const milliseconds = parseInt(match[3], 10);
              const text = match[4];
              const time = minutes * 60 + seconds + milliseconds / 1000;
              return { text, time };
            }
            return null;
          }).filter(line => line !== null);
          this.convertedLyrics = JSON.stringify(lyrics, null, 2);
        },
      },
    };
    </script>

    <style scoped>
    /* Add your component-specific styles here */
    </style>
