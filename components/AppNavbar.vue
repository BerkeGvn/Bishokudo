<template>
  <nav
    ref="nav"
    class="flex fixed z-10 w-full top-0 left-0 px-2 py-4 justify-between items-center gap-5 bg-bs-nurture transition-all duration-700 max-tb-big:hidden"
  >
    <ul class="flex flex-1 justify-around text-xl text-bs-bbox max-xl:text-lg">
      <li
        class="relative before:content-[''] before:absolute before:-bottom-1 before:bg-bs-orange before:w-0 before:h-1 before:rounded-lg before:transition-all hover:before:w-full"
      >
        <a href="#about">私たちについて</a>
      </li>
      <li
        class="relative before:content-[''] before:absolute before:-bottom-1 before:bg-bs-orange before:w-0 before:h-1 before:rounded-lg before:transition-all hover:before:w-full"
      >
        <a href="#service">サービスの流れ</a>
      </li>
      <li
        class="relative before:content-[''] before:absolute before:-bottom-1 before:bg-bs-orange before:w-0 before:h-1 before:rounded-lg before:transition-all hover:before:w-full"
      >
        <a href="#success">成功事例</a>
      </li>
    </ul>
    <p class="text-4xl text-bs-orange font-bold max-xl:text-3xl">
      <span>
        <img
          class="inline w-16 h-16 -my-2 max-xl:w-12 max-xl:h-12"
          src="../public/svg/logo.svg"
          alt="" /></span
      ><a href="#header">美食道</a>
    </p>
    <ul class="flex flex-1 justify-around text-xl text-bs-bbox max-xl:text-lg">
      <li
        class="relative before:content-[''] before:absolute before:-bottom-1 before:bg-bs-orange before:w-0 before:h-1 before:rounded-lg before:transition-all hover:before:w-full"
      >
        <a href="#plan">プランと料金</a>
      </li>
      <li
        class="relative before:content-[''] before:absolute before:-bottom-1 before:bg-bs-orange before:w-0 before:h-1 before:rounded-lg before:transition-all hover:before:w-full"
      >
        <a href="#faq">よくある質問</a>
      </li>
      <li
        class="relative before:content-[''] before:absolute before:-bottom-1 before:bg-bs-orange before:w-0 before:h-1 before:rounded-lg before:transition-all hover:before:w-full"
      >
        <a href="#contact">お問い合わせ</a>
      </li>
    </ul>
  </nav>
  <div
    @click="toggleMenu"
    class="tham tham-e-spin tham-w-10 hidden max-tb-big:block fixed right-4 top-4 z-50"
  >
    <div class="tham-box">
      <div class="tham-inner bg-gray-600" />
    </div>
  </div>
  <nav
    class="hidden hamList bg-bs-white max-tb-big:block max-tb-big:fixed max-tb-big:top-0 max-tb-big:right-0 z-30 h-screen w-2/4 border-l-4 border-solid border-l-bs-wblue translate-x-full transition-all duration-700"
  >
    <ul class="flex flex-col items-center text-bs-wblue text-xl mt-16 gap-8 font-medium">
      <p class="text-4xl text-bs-orange font-bold">
        <span>
          <img
            class="inline w-12 h-12"
            src="../public/svg/logo.svg"
            alt="" /></span
        ><a
          @click="toggleMenu"
          href="#header"
          >美食道</a
        >
      </p>
      <li>
        <a
          @click="toggleMenu"
          href="#about"
          >私たちについて</a
        >
      </li>
      <li>
        <a
          @click="toggleMenu"
          href="#service"
          >サービスの流れ</a
        >
      </li>
      <li>
        <a
          @click="toggleMenu"
          href="#success"
          >成功事例</a
        >
      </li>
      <li>
        <a
          @click="toggleMenu"
          href="#plan"
          >プランと料金</a
        >
      </li>
      <li>
        <a
          @click="toggleMenu"
          href="#faq"
          >よくある質問</a
        >
      </li>
      <li>
        <a
          @click="toggleMenu"
          href="#contact"
          >お問い合わせ</a
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
const nav = ref(null);
let lastScrollY = 0; // Store previous scroll position
onMounted(() => {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
    lastScrollY = scrollY; // Update last scroll position

    if (scrollDirection === 'up') {
      nav.value.classList.remove('-translate-y-full');
    } else {
      nav.value.classList.add('-translate-y-full');
    }
  });
});
const toggleMenu = () => {
  // hamburger menu animation
  const tham = document.querySelector('.tham');
  const hamList = document.querySelector('.hamList');
  tham.classList.toggle('tham-active');
  hamList.classList.toggle('translate-x-0');
};
</script>
