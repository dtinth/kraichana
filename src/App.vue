<template>
  <div id="app">
    <app-navbar :currentPath="$route.path" />
    <router-view />
    <hr style="padding:0 20px" />
    <footer style="padding:0 20px;font-size:80%;text-align:center">
      เว็บไซต์ "ใครชนะ?" จัดทำขึ้นเพื่อการศึกษาเท่านั้น
      <strong>ไม่มีส่วนเกี่ยวข้อง</strong>กับโครงการไทยชนะหรือเว็บไซต์
      https://www.thaichana.com/
      และ<strong>ไม่สามารถบันทึกข้อมูล</strong>ลงระบบไทยชนะได้
      <span style="background: #d7fc70; color: #353433"
        >โดย fork ของ @dtinth ได้ทำการเชื่อมกับระบบไทยชนะผ่านการฝัง iframe
        เพื่ออำนวยความสะดวกในการใช้งาน</span
      >
    </footer>
  </div>
</template>

<script>
import AppNavbar from "@/components/AppNavbar.vue";

export default {
  name: "App",
  components: {
    AppNavbar
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "IBM Plex Sans Thai";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/woff2/IBMPlexSansThai-Regular.woff2")
      format("woff2"),
    url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/woff/IBMPlexSansThai-Regular.woff")
      format("woff"),
    url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/ttf/IBMPlexSansThai-Regular.ttf")
      format("truetype");
}

@font-face {
  font-family: "IBM Plex Sans Thai";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/woff2/IBMPlexSansThai-Bold.woff2")
      format("woff2"),
    url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/woff/IBMPlexSansThai-Bold.woff")
      format("woff"),
    url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/ttf/IBMPlexSansThai-Bold.ttf")
      format("truetype");
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "IBM Plex Sans Thai", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  color: #444;
  letter-spacing: 0.1px;
  line-height: 1.7;
  padding: 52px 0 16px;
}

h1,
h2,
p {
  margin: 0;
}

a {
  color: #444;
  text-decoration: none;
}

hr {
  border: none;
  border-top: 0.05rem solid #f1f3f5;
  height: 0.05rem;
  margin: 1.6rem 0 0.8rem;
  display: block;
  position: relative;
}

.img-fluid {
  display: block;
  height: auto;
  max-width: 100%;
}

// ---
// CUSTOM COMPONENTS
// ---

main.app-main {
  margin-top: 2rem;
  padding: 0 20px;
}

.list-item {
  box-shadow: rgba(0, 0, 0, 0.03) 0px 0px 4px;
  background-color: white;
  cursor: pointer;
  color: #666;
  padding: 14px 16px;
  border: 1px solid #eee;
  margin-bottom: 16px;
  position: relative;

  &:hover {
    background-color: #fafffb;
  }
}

.columns {
  display: flex;

  &.middle {
    align-items: center;
  }

  &.bottom {
    align-items: flex-end;
  }

  > .expanded {
    flex: 1 1 0;
  }
}
</style>
