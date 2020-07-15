<template>
  <main class="app-main qrshare">
    <div style="display:flex;justify-content:center">
      <vue-qr
        :logoSrc="logo"
        :bgSrc="bg"
        :text="text"
        :correctLevel="correctLevel"
        :size="size"
        :dotScale="dotScale"
      />
    </div>
    <div style="text-align:center">
      <h2>{{ getDetail.shopName }}</h2>
      <p>{{ getDetail.businessType }}</p>
    </div>
  </main>
</template>

<script>
import bgImg from "@/assets/bg.png";
import logoImg from "@/assets/logo.png";
import storeGetter from "@/store/getter.js";
import VueQr from "vue-qr";

export default {
  name: "ShopDetail",
  data() {
    return {
      logo: logoImg,
      bg: bgImg,
      text: null,
      correctLevel: 3,
      size: 280,
      dotScale: 0.6
    };
  },
  components: {
    VueQr
  },
  computed: {
    ...storeGetter
  },
  created() {
    this.text = `https://qr.thaichana.com/?appId=${this.getDetail.appId}&shopId=${this.getDetail.shopId}`;
  }
};
</script>
