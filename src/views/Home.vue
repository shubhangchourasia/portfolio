<template>
  <div :class="{ dark: isDark }">
    <!-- Home Section -->
    <section class="homeSection" id="#">
      <div
        class="
          flex
          md:block
          justify-around
          pt-28
          items-center
          h-full
          md:h-auto
          bg-indigo-600
          dark:bg-black
        "
      >
        <!-- Intro -->
        <div class="w-full grid justify-center items-center tracking-wide">
          <h2
            class="
              text-2xl
              md:text-xl
              m-3
              text-gray-900
              font-extrabold
              dark:text-gray-200
            "
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Hello, I'm
          </h2>
          <h1
            class="
              text-7xl
              md:text-5xl
              m-3
              text-gray-50
              font-bold
              dark:text-indigo-600
            "
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Shubhang
          </h1>

          <h2
            class="text-2xl m-3 text-gray-900 font-extrabold dark:text-gray-200"
            data-aos="fade-right"
            data-aos-delay="800"
          >
            Frontend Developer
          </h2>
          <div class="ml-3" data-aos="fade-up" data-aos-delay="1000">
            <router-link to="/#contact">
              <button
                class="
                  bg-transparent
                  hover:bg-gray-800
                  text-white
                  font-bold
                  py-2
                  px-6
                  rounded
                  mt-4
                  border-2 border-gray-800
                  dark:border-indigo-600 dark:hover:bg-indigo-600
                  hover:border-transparent
                  dark:hover:border-transparent
                  md:px-4 md:py-2
                  tracking-wider
                "
              >
                Hire me
              </button></router-link
            >
          </div>
        </div>
        <!-- Image -->
        <div
          class="
            w-full
            flex
            justify-center
            h-full
            md:h-auto
            items-center
            md:items-end
          "
        >
          <img
            src="../assets/Shubhang1.png"
            alt="Shubhang Chourasia"
            class="h-auto md:mt-10"
            data-aos="fade-left"
            data-aos-delay="500"
          />
        </div>
      </div>
    </section>
    <!-- About Section -->
    <section class="aboutSection mt-20" id="about">
      <div class="text-center font-semibold text-3xl">
        <h2
          class="text-gray-900 tracking-widest dark:text-gray-50"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          About
          <div class="bd"></div>
        </h2>
      </div>
      <div class="flex md:block justify-around mt-20">
        <div class="w-full flex justify-center">
          <img
            src="../assets/Shubhang2.png"
            alt="Shubhang Chourasia"
            class="w-60 h-60 md:w-40 md:h-40"
            data-aos="fade-up"
            data-aos-duration="2000"
          />
        </div>
        <div
          class="flex flex-col justify-center mx-20 w-full md:px-10 md:mx-0"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <p
            class="
              text-indigo-600 text-2xl
              font-bold
              mb-4
              md:mt-6
              tracking-wide
            "
          >
            I'm Shubhang Chourasia
          </p>
          <p class="text-justify dark:text-gray-50 tracking-wide">
            Working as a frontend developer since one year. Being a fresher to
            this field currently exploring an opportunity to serve industry with
            an objective to deliver products which are both modern and
            innovative. <br />
            Additionally, I am passionate for photography, I love to capture
            something amazing. Landscape and stargazing are two of my main
            interest in photography. By nature, I am a foodie and love to travel and explore.
          </p>
          <button
            class="
              bg-transparent
              hover:bg-indigo-600
              text-indigo-600
              hover:text-white
              dark:text-white
              font-bold
              py-2
              px-6
              rounded
              mt-4
              border-2 border-indigo-600
              dark:border-indigo-600 dark:hover:bg-indigo-600
              hover:border-transparent
              dark:hover:border-transparent
              md:px-4 md:py-2
              w-56
              tracking-wider
            "
            @click="$refs.resume.click()"
          >
            Download Resume
          </button>
          <a
            href="/resume/Shubhang Chourasia Resume.pdf"
            download
            ref="resume"
            hidden
            aria-label="resume"
          ></a>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skillsSection mt-20" id="skills">
      <div class="text-center font-semibold text-3xl">
        <h2
          class="text-gray-900 tracking-widest dark:text-gray-50"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Skills
          <div class="bd"></div>
        </h2>
      </div>
      <section class="flex md:block justify-around mt-20">
        <div class="flex flex-col mx-20 w-full md:px-10 md:mx-0">
          <p
            class="
              text-indigo-600 text-2xl
              font-bold
              mb-4
              md:mt-6
              ml-2
              tracking-wide
            "
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Development
          </p>
          <div class="flex flex-wrap">
            <span
              class="
                select-none
                cursor-pointer
                text-sm
                bg-gray-200
                text-gray-700
                px-3
                py-1
                m-2
                rounded-md
                hover:bg-blue-700 hover:text-gray-50
                dark:bg-gray-800
                dark:text-gray-50
                dark:hover:text-indigo-500
                dark:hover:bg-gray-900
              "
              v-for="(tag, i) in devSkills"
              :key="i"
              data-aos="fade-up"
              data-aos-duration="1500"
              :data-aos-delay="i * 50"
              >{{ tag }}</span
            >
          </div>
          <p
            class="
              text-indigo-600 text-2xl
              font-bold
              mb-4
              md:mt-6
              ml-2
              tracking-wide
            "
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Design
          </p>
          <div class="flex flex-wrap">
            <span
              class="
                select-none
                cursor-pointer
                text-sm
                bg-gray-200
                text-gray-700
                px-3
                py-1
                m-2
                rounded-md
                hover:bg-blue-700 hover:text-gray-50
                dark:bg-gray-800
                dark:text-gray-50
                dark:hover:text-indigo-500
                dark:hover:bg-gray-900
              "
              v-for="(tag, i) in designTools"
              :key="i"
              data-aos="fade-up"
              data-aos-duration="1500"
              :data-aos-delay="i * 50"
              >{{ tag }}</span
            >
          </div>
        </div>
        <div class="w-full flex justify-center">
          <img
            src="../assets/programming.png"
            alt="Programming"
            class="w-96 h-56 md:w-64 md:h-40 md:mt-6"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="200"
          />
        </div>
      </section>
    </section>
    <!-- Portfolio Section -->
    <section class="skillsSection mt-20" id="portfolio">
      <div class="text-center font-semibold text-3xl">
        <h2
          class="text-gray-900 tracking-widest dark:text-gray-50"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Portfolio
          <div class="bd"></div>
        </h2>
      </div>
      <div class="p-10 max-w-80 flex justify-evenly md:block">
        <!--Cards-->
        <div v-for="(item, i) in protfolioInfo" :key="i">
          <div
            class="
              w-64
              rounded-xl
              overflow-hidden
              shadow-md
              hover:shadow-lg
              m-6
              md:mx-auto
              dark:bg-gray-900
            "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img
              :src="require('../assets/' + item.darkImg)"
              :alt="item.name"
              class="h-64 w-64 object-cover border-4 rounded-lg border-gray-900"
              v-if="isDark"
            />
            <img
              :src="require('../assets/' + item.img)"
              :alt="item.name"
              class="h-64 w-64 object-cover"
              v-else
            />

            <div class="px-6 py-4">
              <div
                class="
                  font-bold
                  text-xl
                  mb-2
                  text-gray-600
                  dark:text-white
                  tracking-wider
                "
              >
                {{ item.name }}
              </div>
              <p class="text-gray-600 dark:text-gray-100">{{ item.info }}</p>
              <p
                class="mt-2 text-indigo-400 font-semibold hover:text-indigo-700"
              >
                <a :href="item.link" target="_blank" rel="noreferrer"
                  >Visit site</a
                >
              </p>
              <p class="mt-2 text-gray-600 dark:text-gray-100">
                Technologies used:
              </p>
            </div>
            <div class="px-5 pt-2 pb-2">
              <span
                class="
                  inline-block
                  bg-gray-100
                  rounded-full
                  px-3
                  py-1
                  text-sm
                  font-semibold
                  text-gray-500
                  mr-2
                  mb-2
                  dark:bg-gray-800 dark:text-gray-300
                "
                v-for="txt in item.techUsed"
                :key="txt"
                >{{ txt }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="skillsSection mt-20" id="contact">
      <div class="text-center font-semibold text-3xl">
        <h2
          class="text-gray-900 tracking-widest dark:text-gray-50"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Contact
          <div class="bd"></div>
        </h2>
      </div>
      <div class="flex justify-evenly mt-20 md:flex-col">
        <div class="font-semibold leading-9 md:mx-auto tracking-wider">
          <h3
            class="text-indigo-600"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            EMAIL
          </h3>
          <div
            class="text-gray-600 dark:text-gray-50"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1500"
          >
            shubhang24c@gmail.com
          </div>

          <h3
            class="text-indigo-600"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            PHONE
          </h3>
          <div
            class="text-gray-600 dark:text-gray-50 tracking-widest"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1500"
          >
            +91 - 951 175 1369
          </div>

          <h3
            class="text-indigo-600"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="1500"
          >
            SOCIAL MEDIA
          </h3>
          <div
            class="inline-flex space-x-4"
            data-aos="fade-right"
            data-aos-delay="700"
            data-aos-duration="1500"
          >
            <!-- Linked Icon -->

            <a
              href="https://www.linkedin.com/in/shubhangchourasia/"
              target="_blank"
              aria-label="LinkedIn"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                class="linkedInIcon"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                />
              </svg>
            </a>
            <!-- Github Icon -->
            <a
              href="https://github.com/shubhangchourasia/"
              target="_blank"
              aria-label="Github"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                class="githubIcon"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                />
              </svg>
            </a>
            <!-- Instagram Icon -->
            <a
              href="https://www.instagram.com/shubhangchourasia/"
              target="_blank"
              aria-label="Instagram"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                class="instagramIcon"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="md:mx-auto">
          <form class="flex md:flex-col md:mt-6" @submit.prevent="submitForm">
            <div class="mx-2">
              <div class="flex md:flex-col">
                <div class="mx-2" data-aos="fade-up" data-aos-duration="2000">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-600
                      dark:text-gray-50
                      text-xs
                      font-bold
                      mb-2
                    "
                    for="name"
                    >Name</label
                  >
                  <input
                    required
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-100
                      text-gray-600
                      dark:bg-gray-800 dark:text-gray-300
                      border
                      dark:border-gray-600
                      rounded
                      py-3
                      px-4
                      mb-3
                      leading-tight
                      focus:outline-none focus:bg-white
                    "
                    id="name"
                    type="text"
                    v-model="formDetails.Name"
                  />
                </div>
                <div class="mx-2" data-aos="fade-up" data-aos-duration="2000">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-600
                      dark:text-gray-50
                      text-xs
                      font-bold
                      mb-2
                    "
                    for="email"
                    >Email</label
                  >
                  <input
                    required
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-100
                      text-gray-600
                      dark:bg-gray-800 dark:text-gray-300
                      border
                      dark:border-gray-600
                      rounded
                      py-3
                      px-4
                      mb-3
                      leading-tight
                      focus:outline-none focus:bg-white
                    "
                    id="email"
                    type="email"
                    v-model="formDetails.Email"
                  />
                </div>
              </div>
              <div class="mx-2" data-aos="fade-up" data-aos-duration="2000">
                <label
                  class="
                    block
                    uppercase
                    tracking-wide
                    text-gray-600
                    dark:text-gray-50
                    text-xs
                    font-bold
                    mb-2
                  "
                  for="message"
                  >Message</label
                >
                <textarea
                  required
                  id="message"
                  rows="10"
                  class="
                    resize-none
                    w-full
                    appearance-none
                    block
                    bg-gray-100
                    text-gray-600
                    dark:bg-gray-800 dark:text-gray-300
                    border border-gray-200
                    dark:border-gray-600
                    rounded
                    py-3
                    px-4
                    leading-tight
                    focus:outline-none focus:bg-white focus:border-gray-500
                  "
                  v-model="formDetails.Message"
                ></textarea>
              </div>
              <div
                class="float-right"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <button
                  :disabled="sendingForm"
                  :class="{ 'cursor-not-allowed': sendingForm }"
                  class="
                    flex
                    bg-transparent
                    hover:bg-indigo-600
                    text-indigo-600
                    hover:text-white
                    dark:text-white
                    font-bold
                    py-2
                    px-6
                    rounded
                    mt-4
                    border-2 border-indigo-600
                    dark:border-indigo-600 dark:hover:bg-indigo-600
                    hover:border-transparent
                    dark:hover:border-transparent
                    md:px-4 md:py-2
                    tracking-wider
                  "
                >
                  <svg
                    v-if="sendingForm"
                    class="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { ref } from "@vue/reactivity";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "Home",
  setup() {
    // Init store
    const store = useStore();
    //  If Dark Mode
    var isDark = computed(() => store.state.isDark);
    //Init AOS
    AOS.init({ once: true, duration: 1000 });
    //Development skills
    const devSkills = [
      "Google App Engine",
      "Bootstrap",
      "Buefy",
      "Bulma",
      "C",
      "CSS",
      "Firebase",
      "Gatsby Js",
      "Git",
      "Gitlab/Github",
      "HTML",
      "JavaScript",
      "Netlify CMS",
      "Nuxt Js",
      "PWA",
      "Python",
      "React",
      "Responsive",
      "SASS",
      "Tailwind",
      "Vue 2",
      "Vue 3",
    ];
    //Design skills
    const designTools = ["Figma", "Photoshop"];
    //All projects
    const protfolioInfo = [
      {
        name: "Picxilens",
        info: "The web application for photography studios and freelancers.",
        img: "picxilens.png",
        darkImg: "picxilensDark.png",
        link: "https://picxilens.com",
        techUsed: ["Nuxt Js", "Firebase", "App Engine", "Buefy"],
      },
      {
        name: "Digital Biz Tech",
        info: "A website for salesforce certified organization to reach more customers.",
        img: "dbt.png",
        darkImg: "dbtDark.png",
        link: "https://www.digitalbiz.tech",
        techUsed: ["Gatsby Js", "Netlify", "Netlify CMS", "Bulma"],
      },
      {
        name: "Shubhang's Portfolio",
        info: "Portfolio about my skills and projects.",
        img: "logoLight.png",
        darkImg: "logo.png",
        link: "https://shubhangchourasia.com",
        techUsed: ["Vue 3", "Netlify", "Tailwind"],
      },
    ];
    // Form Details
    let formDetails = ref({
      Name: null,
      Email: null,
      Message: null,
    });
    // Form Status
    let sendingForm = ref(false);
    // Contact Form Submit
    const submitForm = () => {
      sendingForm.value = true;
      var xhr = new XMLHttpRequest();
      //Url of google sheets script.
      xhr.open(
        "POST",
        "https://script.google.com/macros/s/AKfycbwWibLR4PIQuLn-yJEfwR1hBT-WIRd8HbszRRRxNw3Z2vbC6O0OOlENqkwv5bz9Tkhckg/exec"
      );
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          alert(
            "Thank You for submitting your response. I will get back to you shortly."
          );
          sendingForm.value = false;
          formDetails.value = {
            Name: null,
            Email: null,
            Message: null,
          };
        }
      };
      xhr.onerror = (err) => {
        console.log("err", err);
      };
      var encoded = Object.keys(formDetails.value)
        .map(function (k) {
          return (
            encodeURIComponent(k) +
            "=" +
            encodeURIComponent(formDetails.value[k])
          );
        })
        .join("&");
      xhr.send(encoded);
    };

    return {
      isDark,
      devSkills,
      designTools,
      protfolioInfo,
      formDetails,
      sendingForm,
      submitForm,
    };
  },
};
</script>

<style lang="sass" scoped>
.bd
  height: 4px
  width: 6rem
  background-color: #4f46e5
  margin: auto

.linkedInIcon,
.githubIcon,
.instagramIcon
  fill: #6b7280

.linkedInIcon
  &:hover
    fill: #0e76a8

.githubIcon
  &:hover
    fill: #3e7baa

.instagramIcon
  &:hover
    fill: #e1306c
</style>
