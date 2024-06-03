<template>
  <nav
    ref="nav"
    class="flex fixed z-10 w-full top-0 left-0 px-2 py-4 justify-between items-center gap-5 bg-bs-nurture transition-all duration-700"
  >
    <ul class="flex flex-1 justify-around">
      <li class="text-xl text-bs-bbox">
        <a href="">私たちについて</a>
      </li>
      <li class="text-xl text-bs-bbox">
        <a href="">サービスの流れ</a>
      </li>
      <li class="text-xl text-bs-bbox">
        <a href="">成功事例</a>
      </li>
    </ul>
    <p class="text-4xl text-bs-orange font-bold">
      <span>
        <img
          class="inline w-16 h-16 -my-2"
          src="../public/svg/logo.svg"
          alt="" /></span
      >美食道
    </p>
    <ul class="flex flex-1 justify-around">
      <li class="text-xl text-bs-bbox">
        <a href="">プランと料金</a>
      </li>
      <li class="text-xl text-bs-bbox">
        <a href="">よくある質問</a>
      </li>
      <li class="text-xl text-bs-bbox">
        <a href="">お問い合わせ</a>
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
</script>
