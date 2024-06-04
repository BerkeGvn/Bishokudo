<template>
  <li
    v-if="reverseCard"
    class="bg-bs-citron px-8 py-8 flex flex-row-reverse gap-4 justify-evenly items-center s w-4/5 rounded-3xl shadow-[10px_10px_0_0_#084D58] max-dsk-mid:px-4 max-dsk-mid:py-4 max-md:w-11/12 max-md:flex-col"
  >
    <div>
      <slot name="image"></slot>
    </div>
    <div class="text-center flex flex-col gap-2 w-4/5 max-md:w-full">
      <p
        class="text-bs-wblue text-xl font-bold text-left max-dsk-mid:text-lg max-tb-big:text-base max-sm:text-center max-sm:text-sm max-sm:font-normal"
      >
        <slot></slot>
      </p>
      <p
        class="text-bs-orange text-2xl font-bold self-end max-dsk-mid:text-xl max-tb-big:text-lg max-md:self-center"
      >
        <slot name="name"></slot>
      </p>
    </div>
  </li>
  <li
    v-else
    class="bg-bs-citron px-8 py-8 flex gap-4 justify-evenly items-center s w-4/5 rounded-3xl shadow-[10px_10px_0_0_#084D58] max-dsk-mid:px-4 max-dsk-mid:py-4 max-md:w-11/12 max-md:flex-col"
  >
    <div>
      <slot name="image"></slot>
    </div>
    <div class="flex flex-col gap-2 w-4/5 max-md:w-full">
      <p
        class="text-bs-wblue text-xl font-bold text-left max-dsk-mid:text-lg max-tb-big:text-base max-sm:text-center max-sm:text-sm max-sm:font-normal"
      >
        <slot></slot>
      </p>
      <p
        class="text-bs-orange text-2xl font-bold self-start max-dsk-mid:text-xl max-tb-big:text-lg max-md:self-center"
      >
        <slot name="name"></slot>
      </p>
    </div>
  </li>
</template>

<script setup>
const props = defineProps(['reverseCard']);
</script>
