<script lang="ts">
// eslint-disable-next-line vue/no-export-in-script-setup
export default {
  data() {
    return {
      msg: "Hi I'm Mohand mostafa",
      visable: true,
    };
  },
  methods: {
    handleClick() {
      console.log("hi");
      this.visable = !this.visable;
      this.callingApi({});
    },
    async callingApi(payload: any) {
      try {
        const res = await fetch("http://localhost:3000/", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify([1]),
        });
        const data = await res.json();
        console.log("data", data);
        return data;
      } catch (erro) {
        console.log('erro', erro);
      }
    },
  },
  async created() {
    // const data = await this.callingApi({ status: 500 });
    console.log('counter', 0);
  },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <h1 data-qa="c-header" v-if="visable">{{ msg }}</h1>
      <button data-qa="c-button" @click="handleClick">click</button>
      <input type="text" data-qa="c-input">
      <ul>
        <li data-qa="link">A</li>
        <li data-qa="link">B</li>
        <li data-qa="link">C</li>
      </ul>
      <!-- <nav>
        <RouterLink to="/about">about</RouterLink>
      </nav> -->
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
