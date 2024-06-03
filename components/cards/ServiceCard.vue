<template>
  <li
    class="bg-bs-white text-center px-4 py-12 flex flex-col gap-4 w-96 rounded-3xl shadow-[10px_10px_0_0_#D5C757] max-tb-big:w-11/12 max-tb-big:py-4 max-tb-big:gap2 max-md:w-full"
  >
    <div>
      <slot name="icon"></slot>
    </div>
    <p class="text-xl text-bs-orange font-semibold max-dsk-mid:text-lg">
      <slot name="header"></slot>
    </p>
    <p class="text-lg text-bs-wblue max-dsk-mid:text-base">
      <slot></slot>
    </p>
  </li>
</template>
