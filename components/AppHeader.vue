<template>
  <header
    class="h-screen flex items-center mt-12 max-tb-big:flex-col-reverse max-tb-big:mt-8 max-tb-big:justify-end max-tb-big:relative max-tb-big:h-auto"
  >
    <div
      class="flex flex-col gap-14 justify-center pl-12 w-3/5 -mt-20 max-tb-big:pl-0 max-tb-big:w-full max-tb-big:items-center max-tb-big:gap-8 max-tb-big:mt-6"
    >
      <h1
        class="text-9xl font-bold text-bs-orange relative max-dsk-mid:text-8xl max-tb-big:text-7xl max-tb-big:absolute top-0"
      >
        美食道
        <span
          class="absolute w-40 h-40 -my-2 max-dsk-mid:w-32 max-dsk-mid:h-32 max-tb-big:w-24 max-tb-big:h-24 max-sm:h-20 max-sm:w-20 max-sm:translate-y-2"
        >
          <img
            src="../public/svg/logo.svg"
            alt=""
        /></span>
      </h1>
      <h2 class="text-5xl font-medium text-bs-wblue max-dsk-mid:text-4xl max-tb-big:text-3xl">
        健康的な食生活への第一歩
      </h2>
      <h3
        class="text-3xl text-bs-wblue w-11/12 max-dsk-mid:text-2xl max-tb-big:text-xl max-tb-big:text-center"
      >
        美食道は、あなたの健康と美しさを引き出すためのパーソナライズされた食事プランを提供します。
      </h3>
      <div>
        <button
          class="bg-bs-citron px-14 py-3 text-3xl text-bs-wblue border-bs-orange border-solid border-4 rounded-3xl font-semibold max-dsk-mid:px-12 max-dsk-mid:text-2xl max-tb-big:text-lg transition-all duration-200 hover:scale-105 hover:-translate-y-2 hover:shadow-lg active:scale-1 active:translate-y-0 active:shadow-none"
        >
          一緒に頑張りましょう!
        </button>
      </div>
    </div>
    <div class="max-tb-big:mt-24">
      <img
        src="../public/svg/Hero Illustration.svg"
        alt=""
        class="max-xl:w-11/12 mx-auto max-tb-big:w-8/12"
      />
    </div>
  </header>
</template>
