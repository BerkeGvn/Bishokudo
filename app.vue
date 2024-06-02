<template>
  <AppNavbar></AppNavbar>
  <AppHeader></AppHeader>
  <AppAbout></AppAbout>
  <AppService></AppService>
  <AppSuccess></AppSuccess>
  <AppPlan></AppPlan>
  <AppFaq></AppFaq>
  <AppContact></AppContact>
  <AppFooter></AppFooter>
</template>

<script setup>
useHead({
  title: '美食道',
  meta: [
    {
      name: 'description',
      content: '健康的な食生活への第一歩',
    },
  ],
  bodyAttrs: {
    class: 'bg-bs-nurture p-4 font-custom subpixel-antialiased scroll-smooth',
  },
});
</script>
