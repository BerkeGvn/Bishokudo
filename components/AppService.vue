<template>
  <section
    class="min-h-screen -mx-4 my-16 p-16 bg-cover bg-wave-bl flex flex-col justify-evenly max-tb-big:gap-4 max-sm:px-4"
  >
    <h4
      class="text-bs-white text-5xl font-bold text-center -mt-12 max-dsk-mid:text-4xl max-tb-big:mt-0"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      サービスの流れ
    </h4>
    <ul
      class="flex gap-8 justify-center -mt-8 max-dsk-mid:gap-6 max-tb-big:flex-col max-tb-big:gap-6 max-tb-big:items-center max-tb-big:mt-0 max-tb-big:mb-8"
    >
      <ServiceCard
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="100"
      >
        <template #icon>
          <Icon
            class="w-16 h-16 text-bs-wblue max-tb-big:w-10 max-tb-big:h-10"
            name="healthicons:group-discussion-meeting-negative"
          ></Icon>
        </template>
        <template #header> 1-無料相談 </template>
        <template #default>
          最初に、無料相談を通じてお客様の健康状態、ライフスタイル、目標について詳しくお伺いします。これにより、最適なプランを提案するための基礎情報を収集します。
        </template>
      </ServiceCard>
      <ServiceCard
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="200"
      >
        <template #icon>
          <Icon
            class="w-16 h-16 text-bs-wblue max-tb-big:w-10 max-tb-big:h-10"
            name="streamline:hand-held-tablet-writing-solid"
          ></Icon>
        </template>
        <template #header> 2-個別プランの作成 </template>
        <template #default>
          お客様一人ひとりのニーズに合わせたパーソナライズされた食事プランを作成します。このプランには、バランスの取れた栄養摂取、食事のタイミング、推奨される食品のリストが含まれます。
        </template>
      </ServiceCard>
      <ServiceCard
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="300"
      >
        <template #icon>
          <Icon
            class="w-16 h-16 text-bs-wblue max-tb-big:w-10 max-tb-big:h-10"
            name="healthicons:hot-meal-negative"
          ></Icon>
        </template>
        <template #header> 3-プランの実行 </template>
        <template #default>
          提案された食事プランを日常生活に取り入れていただきます。私たちは、お客様が目標を達成できるように、実行段階でのサポートとアドバイスを提供します。
        </template>
      </ServiceCard>
      <ServiceCard
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="400"
      >
        <template #icon>
          <Icon
            class="w-16 h-16 text-bs-wblue max-tb-big:w-10 max-tb-big:h-10"
            name="fluent:calendar-checkmark-28-filled"
          ></Icon>
        </template>
        <template #header> 4-定期的なフォローアップ </template>
        <template #default>
          定期的なフォローアップを行い、進捗状況を確認しながら、必要に応じてプランの調整を行います。これにより、持続可能な成果を保証します。
        </template>
      </ServiceCard>
    </ul>
  </section>
</template>

<script setup>
import ServiceCard from './cards/ServiceCard.vue';
</script>
