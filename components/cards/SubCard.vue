<template>
  <li class="bg-bs-white  px-8 py-10 flex flex-col gap-4 w-96 rounded-3xl shadow-[10px_10px_0_0_#D5C757]
  max-dsk-mid:py-8
  ">
    <h5 class="text-bs-bbox text-xl text-center font-bold max-tb-big:text-lg">
      <slot name="subPlan"</slot>
    </h5>
    <p class=" text-5xl font-bold text-bs-bbox text-center max-tb-big:text-4xl">
      <slot name="price"></slot>
      <span class="text-sm font-bold text-bs-bbox text-center">
        <slot name="plan"></slot>
      </span>
    </p>
    <p v-if="yearlyDiscount" class="text-center -mb-4" >
      <span class="text-bs-orange font-semibold">お買い得!</span>
      <slot name="discount"></slot>
    </p>
    <button class="bg-bs-orange text-sm py-3 w-1/2 rounded-3xl text-bs-white mx-auto my-4 font-bold max-tb-big:my-2">
      今すぐ始める!
    </button>
    <p class="text-base">
      <slot></slot>
    </p>
    <ul>
    <li v-for="feature in props.features" :key="feature[feature.length-1]">
      <p class="text-sm">
        <Icon name="ic:baseline-check" class="text-green-600 w-7 h-7"></Icon>
        {{ feature }}</p>
      </li>
    </ul>
  </li>
</template>

<script setup>
  const props = defineProps(['features','yearlyDiscount'])
</script>