<template>
  <div id="app">
    <h1>eva.js</h1>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/repos">Repos</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<style>
  body {
    font: 14px/1.4 'Helvetica Neue', sans-serif;
  }
</style>