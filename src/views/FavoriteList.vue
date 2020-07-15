<template>
  <main class="app-main favorite-list" style="margin-top:1rem">
    <h1 style="margin-bottom:.4rem">แก้ไขรายการโปรด</h1>
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
      @remove="removeFavorite"
      removable
    />
  </main>
</template>

<script>
import AppEmptyState from "@/components/AppEmptyState";
import AppListItem from "@/components/AppListItem";
import storeGetter from "@/store/getter.js";

export default {
  name: "ViewHistory",
  components: {
    AppEmptyState,
    AppListItem
  },
  computed: {
    ...storeGetter
  },
  methods: {
    gotoShop(shopData) {
      this.$store.dispatch("setDetail", shopData);
      this.$router.push("/shop_detail");
    },
    removeFavorite(data) {
      if (
        confirm(
          "ต้องการลบรายการโปรดนี้หรือไม่?\nเมื่อลบแล้วจะต้องทำการเพิ่มรายการโปรดใหม่จากสแกนอีกครั้ง"
        )
      )
        this.$store.dispatch("deleteFavorite", data);
    }
  }
};
</script>
