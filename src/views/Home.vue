<template>
  <div id="home">
    <Navbar />
    <main>
      <div
        class="min-h-screen bg-gray-100 py-16 flex flex-col sm:py-15"
      >
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <div
            class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
          ></div>
          <div
            class="relative px-4 py-10 pt-0 bg-white shadow-lg sm:rounded-3xl sm:p-20"
          >
            <div class="max-w-md mx-auto">
              <div class="divide-y divide-gray-200">
                <div
                  class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                >
                  <div class="words-wrap">
                    <div
                      class="english whitespace-pre-line inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg"
                      @click="speak"
                    >
                      {{ selectedWord.english }} <VoiceIcon class="icon" width="30px" height="30px"/>
                    </div>

                  </div>
                  <ul class="list-disc space-y-2">
                    <div class="turkish" v-if="showTurkish">
                      {{ selectedWord.turkish }}
                    </div>
                  </ul>
                  <p class="italic">V2: {{ selectedWord.V2 }}</p>
                  <p class="italic">V3: {{ selectedWord.V3 }}</p>
                </div>
                <div
                  class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7"
                >
                  <div class="button-wrapper">
                    <div class="button" v-on:click="handleChangeWord">
                      <span>Change</span>
                    </div>
                    <div class="button" v-on:click="handleShowClick">
                      <span>Show in Turkish</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { wordsData } from "@/core";
import VoiceIcon from "../assests/speakers.svg";
import Navbar from "@/components/Navbar";
export default {
  name: "Container",
  components: {
    VoiceIcon,
    Navbar
  },
  data() {
    return {
      data: wordsData,
      selectedWord: "",
      showTurkish: false,
      tts: window.speechSynthesis,
      voiceList: null,
      selectedVoice: null
    };
  },
  created() {
    var random = Math.floor(Math.random() * this.data.data.length);
    this.selectedWord = this.data.data[random];
    this.showTurkish = false;
    this.selectedVoice = "Alex";
    this.getVoices().then(voices => {
      this.voiceList = voices;
    });
  },
  methods: {
    handleShowClick: function() {
      this.showTurkish = true;
    },
    handleChangeWord: function() {
      var random = Math.floor(Math.random() * this.data.data.length);
      this.selectedWord = this.data.data[random];
      this.showTurkish = false;
    },
    getVoices() {
      let intervalId;
      return new Promise(resolve => {
        intervalId = setInterval(() => {
          if (this.tts.getVoices().length > 0) {
            resolve(this.tts.getVoices());
            clearInterval(intervalId);
          }
        });
      });
    },
    speak() {
      let toSpeak = new SpeechSynthesisUtterance(this.selectedWord.english);
      toSpeak.voice = this.voiceList.find(
        v => v.name === this.selectedVoice || null
      );
      this.tts.speak(toSpeak);
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
  font-size: 16px;
  color: #fff;
}

.button-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
.words-wrap {
  text-align: center;
}
.english {
  display: inline-block;
  padding: 20px 25px;
  color: white;
  font-size: 42px;
  font-weight: 900;
  line-height: 1;
  text-shadow: 2px 4px rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  min-width: 75%;

  box-shadow: 3px 6px rgba(0, 0, 0, 0.12);
}
.turkish {
  font-size: 35px;
  font-weight: 700;
  color: #ec6a9c;
  font-style: italic;
  line-height: 1;
  text-shadow: 1px 2px rgba(150, 150, 200, 0.75);
  text-align: center;
}
.icon {
  display: inline;
  margin-left: 14px;
}
</style>
