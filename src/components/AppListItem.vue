<template>
  <div class="list-item">
    <div class="columns">
      <app-shopping-icon />
      <div class="expanded" style="margin-left:10px">
        <h2>{{ shopName }}</h2>
        <p>{{ businessType }}</p>
      </div>
      <div
        class="close"
        v-if="removable"
        @click.stop="$emit('remove', { appId, shopId })"
      >
        <i class="fas fa-times-circle fa-2x"></i>
      </div>
    </div>
  </div>
</template>

<script>
import AppShoppingIcon from "@/components/AppShoppingIcon";

export default {
  props: {
    shopName: {
      type: String,
      required: true
    },
    businessType: {
      type: String,
      required: true
    },
    appId: {
      type: String,
      required: true
    },
    shopId: {
      type: String,
      required: true
    },
    removable: {
      type: Boolean,
      default: false
    }
  },
  components: {
    AppShoppingIcon
  }
};
</script>

<style scoped>
.list-item > .columns > .close {
  position: absolute;
  top: -8px;
  right: -8px;
  color: #ff3860;
  z-index: 2;
}
</style>
