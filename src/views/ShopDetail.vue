<template>
  <main class="app-main shopdetail">
    <span style="color:#353433;background:#d7fc70;padding:0 0.5ex;"
      >@dtinth’s fork added thaichana iframe:</span
    >
    <iframe
      :title="
        `https://qr.thaichana.com/?appId=${getDetail.appId}&shopId=${getDetail.shopId}`
      "
      frameborder="0"
      width="100%"
      style="width:100%;height:440px;border:2px solid #d7fc70;"
      :src="
        `https://qr.thaichana.com/?appId=${getDetail.appId}&shopId=${getDetail.shopId}`
      "
      >check in</iframe
    >
    <router-link
      to="/shop_qr"
      class="list-item"
      style="display:block;margin-top:16px;text-align:center"
      ><i class="fas fa-share-alt"></i> แชร์ QR ร้านปัจจุบัน</router-link
    >
    <div
      v-if="
        !getFavoriteMetadata.includes(`${getDetail.appId}.${getDetail.shopId}`)
      "
      class="list-item"
      style="display:block;margin-top:16px;text-align:center"
      @click="addFavorite()"
    >
      <i class="fas fa-star"></i> เพิ่มในรายการโปรด
    </div>
    <app-toast
      v-if="was_favorited"
      msg="เพิ่มลงในรายการโปรดแล้ว!"
      icon="fa-star"
      type="success"
    />
  </main>
</template>

<script>
import AppToast from "@/components/AppToast";
import storeGetter from "@/store/getter.js";

export default {
  name: "ShopDetail",
  components: {
    AppToast
  },
  data() {
    return {
      was_favorited: false
    };
  },
  computed: {
    ...storeGetter
  },
  methods: {
    addFavorite() {
      this.was_favorited = true;
      this.$store.dispatch("saveFavorite", this.getDetail);
    }
  },
  watch: {
    was_favorited() {
      if (this.was_favorited)
        setTimeout(() => (this.was_favorited = false), 5000);
    }
  }
};
</script>
