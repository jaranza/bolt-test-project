<template>
      <div id="app">
        <nav>
          <router-link to="/">Home</router-link> |
          <router-link to="/karaoke">Karaoke</router-link> |
          <router-link to="/lrc-converter">LRC Converter</router-link>
        </nav>
        <router-view></router-view>
      </div>
    </template>

    <script>
    export default {
      name: 'App',
    };
    </script>

    <style>
    /* Add your global styles here */
    </style>
