<template>
  <main class="app-main home">
    <div class="qr">
      <div class="reader" style="height:50vh">
        <qrcode-stream :camera="camera" @decode="onDecode" />
      </div>
      <app-toast v-if="was_incorrect" msg="QR Code ไม่ถูกต้อง" />
    </div>
    <hr />
    <section>
      <div class="columns middle" style="margin-bottom:8px">
        <h1 class="expanded">สถานที่ล่าสุด</h1>
        <div>
          <router-link to="/history" aria-label="ประวัติสถานที่ทั้งหมด">
            <i class="fas fa-history fa-2x"></i>
          </router-link>
        </div>
      </div>
      <app-empty-state v-if="!getTopHistory.length" name="ประวัติสถานที่" />
      <app-list-item
        v-for="(shop, index) in getTopHistory"
        :key="index"
        v-bind="shop"
        @click.native="gotoShop(shop)"
      />
      <router-link v-if="getHistory.length > 3" to="/history">
        <div class="list-item" style="text-align:center;font-size:1.25rem">
          ดูเพิ่มเติม...
        </div>
      </router-link>
    </section>
    <hr />
    <section>
      <div class="columns middle" style="margin-bottom:8px">
        <h1 class="expanded">รายการโปรด</h1>
        <div>
          <router-link to="/favorite" aria-label="แก้ไขรายการโปรด">
            <i class="fas fa-pen fa-2x"></i>
          </router-link>
        </div>
      </div>
      <app-empty-state
        v-if="!getFavorite.length"
        name="รายการโปรด"
        description="ท่านสามารถเพิ่มสถานที่ลงในรายการโปรดได้หลังจากเช็คอินสถานที่นั้น"
      />
      <app-list-item
        v-for="(shop, index) in getFavorite"
        :key="index"
        v-bind="shop"
        @click.native="gotoShop(shop)"
      />
    </section>
  </main>
</template>

<script>
import AppEmptyState from "@/components/AppEmptyState";
import AppListItem from "@/components/AppListItem";
import AppToast from "@/components/AppToast";
import storeGetter from "@/store/getter.js";
import { QrcodeStream } from "vue-qrcode-reader";

export default {
  name: "Home",
  components: {
    AppListItem,
    AppEmptyState,
    QrcodeStream,
    AppToast
  },
  computed: {
    ...storeGetter
  },
  data() {
    return {
      was_incorrect: false,
      camera: "auto"
    };
  },
  methods: {
    onDecode(result) {
      if (result.indexOf("qr.thaichana.com") !== -1) {
        const url = new URL(result);
        const params = new URLSearchParams(url.search);
        let appId = params.get("appId");
        let shopId = params.get("shopId");
        fetch(`https://api-customer.thaichana.com/shop/${appId}/${shopId}/qr`)
          .then(res => res.json())
          .then(data => {
            this.gotoShop(data);
          })
          // eslint-disable-next-line no-unused-vars
          .catch(_ => (this.was_incorrect = true));
      } else {
        this.was_incorrect = true;
      }
    },
    gotoShop(shopData) {
      this.$store.dispatch("setDetail", shopData);
      this.$router.push("/shop_detail");
    },
    startCamera() {
      this.camera = "auto";
    },
    stopCamera() {
      this.camera = "off";
    }
  },
  watch: {
    was_incorrect() {
      if (this.was_incorrect)
        setTimeout(() => (this.was_incorrect = false), 5000);
    }
  },
  created: function() {
    window.addEventListener("focus", this.startCamera);
    window.addEventListener("blur", this.stopCamera);
  },
  destroyed: function() {
    window.removeEventListener("focus", this.startCamera);
    window.removeEventListener("blur", this.stopCamera);
  }
};
</script>
