<template>
  <footer
    class="text-xl text-bs-bbox bg-bs-white -m-4 px-8 py-24 gap-8 flex justify-between text-center max-dsk-mid:text-lg max-dsk-mid:gap-4 max-xl:text-base max-tb-big:flex-col max-tb-big:items-center max-tb-big:gap-10 max-tb-big:py-2 max-sm:gap-4"
  >
    <div class="flex flex-col gap-8 max-tb-big:gap-4">
      <p class="text-7xl text-bs-orange font-bold max-dsk-mid:text-6xl max-xl:text-5xl">
        <a href="#header">美食道</a>
      </p>
      <span class="text-bs-wblue max-dsk-mid:text-base max-xl:text-sm"
        >健康的な食生活への第一歩</span
      >
    </div>
    <ul class="flex flex-col gap-8 max-tb-big:flex-row max-sm:flex-col max-sm:gap-4">
      <li>
        <a
          class="relative before:content-[''] before:absolute before:-bottom-1 before:bg-bs-wblue before:w-0 before:h-1 before:rounded-lg before:transition-all hover:before:w-full"
          href="#about"
          >私たちについて</a
        >
      </li>
      <li>
        <a
          class="relative before:content-[''] before:absolute before:-bottom-1 before:bg-bs-wblue before:w-0 before:h-1 before:rounded-lg before:transition-all hover:before:w-full"
          href="#service"
          >サービスの流れ</a
        >
      </li>
      <li>
        <a
          class="relative before:content-[''] before:absolute before:-bottom-1 before:bg-bs-wblue before:w-0 before:h-1 before:rounded-lg before:transition-all hover:before:w-full"
          href="#success"
          >成功事例</a
        >
      </li>
    </ul>
    <ul class="flex flex-col gap-8 max-tb-big:flex-row max-sm:flex-col max-sm:gap-4">
      <li>
        <a
          class="relative before:content-[''] before:absolute before:-bottom-1 before:bg-bs-wblue before:w-0 before:h-1 before:rounded-lg before:transition-all hover:before:w-full"
          href="#plan"
          >プランと料金</a
        >
      </li>
      <li>
        <a
          class="relative before:content-[''] before:absolute before:-bottom-1 before:bg-bs-wblue before:w-0 before:h-1 before:rounded-lg before:transition-all hover:before:w-full"
          href="#faq"
          >よくある質問</a
        >
      </li>
      <li>
        <a
          class="relative before:content-[''] before:absolute before:-bottom-1 before:bg-bs-wblue before:w-0 before:h-1 before:rounded-lg before:transition-all hover:before:w-full"
          href="#contact"
          >お問い合わせ</a
        >
      </li>
    </ul>
    <ul class="flex flex-col gap-8 max-tb-big:gap-2">
      <li>メール: support@bishokudo.jp</li>
      <li>電話: 03-1234-5678</li>
      <li>住所: 東京都1-2-3</li>
    </ul>

    <div class="flex flex-col gap-4 w-1/4 justify-start max-tb-big:w-full">
      <p>最新情報やお得な情報をいち早くお届けします。ニュースレターに登録してください。</p>
      <p class="text-bs-orange"><a href="#">ニュースレターに登録</a></p>
    </div>
    <div class="flex flex-col max-dsk-mid:justify-between max-tb-big:flex-row gap-12">
      <a href="#">
        <Icon
          class="text-bs-wblue w-12 h-12 max-dsk-mid:w-8 max-dsk-mid:h-8"
          name="mdi:facebook-box"
        ></Icon>
      </a>
      <a href="#">
        <Icon
          class="text-bs-wblue w-12 h-12 max-dsk-mid:w-8 max-dsk-mid:h-8"
          name="mdi:instagram"
        ></Icon
      ></a>
      <a href="#">
        <Icon
          class="text-bs-wblue w-12 h-12 max-dsk-mid:w-8 max-dsk-mid:h-8"
          name="hugeicons:new-twitter"
        ></Icon
      ></a>
    </div>
  </footer>
</template>
