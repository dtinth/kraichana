import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function loadView(view) {
  return () => import(`../views/${view}.vue`);
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: loadView("Home"),
    meta: {
      title: "หน้าหลัก"
    }
  },
  {
    path: "/shop_detail",
    name: "ShopDetail",
    component: loadView("ShopDetail"),
    meta: {
      title: "ข้อมูลร้านค้า"
    }
  },
  {
    path: "/history",
    name: "ViewHistory",
    component: loadView("ViewHistory"),
    meta: {
      title: "ประวัติการสแกน"
    }
  },
  {
    path: "/favorite",
    name: "FavoriteList",
    component: loadView("FavoriteList"),
    meta: {
      title: "แก้ไขรายการโปรด"
    }
  },
  {
    path: "/shop_qr",
    name: "QRShare",
    component: loadView("QRShare"),
    meta: {
      title: "QRCode ร้าน"
    }
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const customTitle = to.matched
    .slice()
    .reverse()
    .find(record => record.meta && record.meta.title);
  document.title = `${customTitle ? customTitle.meta.title : ""} - ใครชนะ?`;
  next();
});

export default router;
