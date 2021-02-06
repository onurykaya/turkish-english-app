<template>
  <div id="home">
    <main>
      <div class="title">Turkish - English Dictionary</div>
      <div class="words-wrap">
        <div class="english">
          {{ selectedWord.english }}
        </div>
        <div class="turkish" v-if="showTurkish">
          {{ selectedWord.turkish }}
        </div>
      </div>
      <div class="button-wrapper">
        <div class="button" v-on:click="handleChangeWord">
          <span>Change</span>
        </div>
        <div class="button" v-on:click="handleShowClick">
          <span>Show in Turkish</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { wordsData } from "@/core";
export default {
  name: "Container",
  data() {
    return {
      data: wordsData,
      selectedWord: "",
      showTurkish: false
    };
  },
  created() {
    var random = Math.floor(Math.random() * this.data.data.length);
    this.selectedWord = this.data.data[random];
    this.showTurkish = false;
  },
  methods: {
    handleShowClick: function() {
      this.showTurkish = true;
    },
    handleChangeWord: function() {
      var random = Math.floor(Math.random() * this.data.data.length);
      this.selectedWord = this.data.data[random];
      this.showTurkish = false;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "montserrat", sans-serif;
}
#home {
  background-image: url("https://wallpaperaccess.com/full/316124.jpg");
  background-size: cover;
  background-position: bottom;
  transition: 0.4;
}
main {
  min-height: 100vh;
  padding: 25px;

  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.75)
  );
}
@font-face {
  font-family: "Pacifico";
  font-style: normal;
  font-weight: normal;
  src: local("Pacifico"),
    url("http://themes.googleusercontent.com/font?kit=fKnfV28XkldRW297cFLeqfesZW2xOQ-xsNqO47m55DA")
      format("truetype");
}
.button {
  display: inline-block;
  margin-top: 5%;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  -webkit-box-shadow: 0 8px 0 #c5376d, 0 15px 20px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0 8px 0 #c5376d, 0 15px 20px rgba(0, 0, 0, 0.35);
  box-shadow: 0 8px 0 #c5376d, 0 15px 20px rgba(0, 0, 0, 0.35);
  -webkit-transition: -webkit-box-shadow 0.1s ease-in-out;
  -moz-transition: -moz-box-shadow 0.1s ease-in-out;
  -o-transition: -o-box-shadow 0.1s ease-in-out;
  transition: box-shadow 0.1s ease-in-out;
  font-size: 25px;
  color: #fff;
}

.button-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin-bottom: 5%;
}

.button span {
  display: inline-block;
  padding: 20px 30px;
  background-color: #ec528d;
  background-image: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    from(hsla(338, 90%, 80%, 0.8)),
    to(hsla(338, 90%, 70%, 0.2))
  );
  background-image: -webkit-linear-gradient(
    hsla(338, 90%, 80%, 0.8),
    hsla(338, 90%, 70%, 0.2)
  );
  background-image: -moz-linear-gradient(
    hsla(338, 90%, 80%, 0.8),
    hsla(338, 90%, 70%, 0.2)
  );
  background-image: -o-linear-gradient(
    hsla(338, 90%, 80%, 0.8),
    hsla(338, 90%, 70%, 0.2)
  );
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  -webkit-box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.15);
  -moz-box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.15);
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.15);
  font-family: "Pacifico", Arial, sans-serif;
  line-height: 1;
  text-shadow: 0 -1px 1px rgba(175, 49, 95, 0.7);
  -webkit-transition: background-color 0.2s ease-in-out,
    -webkit-transform 0.1s ease-in-out;
  -moz-transition: background-color 0.2s ease-in-out,
    -moz-transform 0.1s ease-in-out;
  -o-transition: background-color 0.2s ease-in-out,
    -o-transform 0.1s ease-in-out;
  transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out;
}

.button:hover span {
  background-color: #ec6a9c;
  text-shadow: 0 -1px 1px rgba(175, 49, 95, 0.9),
    0 0 5px rgba(255, 255, 255, 0.8);
}

.button:active,
.button:focus {
  -webkit-box-shadow: 0 8px 0 #c5376d, 0 12px 10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 8px 0 #c5376d, 0 12px 10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 8px 0 #c5376d, 0 12px 10px rgba(0, 0, 0, 0.3);
}

.button:active span {
  -webkit-transform: translate(0, 4px);
  -moz-transform: translate(0, 4px);
  -o-transform: translate(0, 4px);
  transform: translate(0, 4px);
}

.title {
  color: white;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}
.words-wrap {
  text-align: center;
}
.english {
  display: inline-block;
  padding: 10px 25px;
  color: white;
  font-size: 50px;
  font-weight: 900;

  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0;

  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.turkish {
  color: white;
  font-size: 35px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>
