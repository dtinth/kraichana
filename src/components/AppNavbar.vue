<template>
  <nav class="main-navbar" role="navigation" aria-label="main navigation">
    <section class="side">
      <a v-if="currentPath !== '/'" @click="$router.go(-1)"
        ><i class="fas fa-arrow-left fa-2x"></i
      ></a>
    </section>
    <section class="title">
      <div
        style="position:relative;display:inline-block;"
        @click="$router.go(-1)"
      >
        <picture>
          <source srcset="@/assets/logo_horiz.webp" type="image/webp" />
          <source srcset="@/assets/logo_horiz.png" type="image/png" />
          <img
            class="img-fluid"
            style="height:36px"
            src="@/assets/logo_horiz.png"
            alt="ใครชนะ?"
          />
        </picture>
        <span
          style="position:absolute;bottom:0;right:0;display:block;text-align:right;font-size:10px;transform:rotate(-12deg) translate(42px,12px);transform-origin:bottom right;"
        >
          <span style="background:#353433;color:#d7fc70;padding:0 2px"
            >but it’s</span
          >
          <br />
          <span style="background:#353433;color:#d7fc70;padding:0 2px"
            >actually usable</span
          >
        </span>
      </div>
    </section>
    <section class="side"></section>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  props: {
    currentPath: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.main-navbar {
  display: flex;
  align-items: center;
  height: 52px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  padding: 0 1rem;
  z-index: 999;

  > .title {
    flex: 1 1 0;
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > .side {
    width: 36px;
    height: 36px;
    position: relative;
    bottom: -3px;
  }
}
</style>
