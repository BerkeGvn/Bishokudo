<template>
  <AppNavbar></AppNavbar>
  <AppHeader id="header"></AppHeader>
  <AppAbout id="about"></AppAbout>
  <AppService id="service"</AppService>
  <AppSuccess id="success"</AppSuccess>
  <AppPlan id="plan"></AppPlan>
  <AppFaq id="faq"></AppFaq>
  <AppContact id="contact"</AppContact>
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
  htmlAttrs:{
     class: 'scroll-smooth',
  },
  bodyAttrs: {
    class: 'bg-bs-nurture p-4 font-custom subpixel-antialiased',
  },
});
</script>
