<template>
  <section class="min-h-screen -mx-4 my-16 p-16 bg-cover bg-wave-bl">
    <h4 class="text-center translate-y-8 text-bs-white text-5xl font-bold">サービスの流れ</h4>
    <ul class="flex gap-8 justify-center translate-y-1/2">
      <ServiceCard>
        <template #icon>
          <h1>TEST</h1>
        </template>
        <template #header> 1-無料相談 </template>
        <template #default>
          最初に、無料相談を通じてお客様の健康状態、ライフスタイル、目標について詳しくお伺いします。これにより、最適なプランを提案するための基礎情報を収集します。
        </template>
      </ServiceCard>
      <ServiceCard>
        <template #icon>
          <h1>TEST</h1>
        </template>
        <template #header> 2-個別プランの作成 </template>
        <template #default>
          お客様一人ひとりのニーズに合わせたパーソナライズされた食事プランを作成します。このプランには、バランスの取れた栄養摂取、食事のタイミング、推奨される食品のリストが含まれます。
        </template>
      </ServiceCard>
      <ServiceCard>
        <template #icon>
          <h1>TEST</h1>
        </template>
        <template #header> 3-プランの実行 </template>
        <template #default>
          提案された食事プランを日常生活に取り入れていただきます。私たちは、お客様が目標を達成できるように、実行段階でのサポートとアドバイスを提供します。
        </template>
      </ServiceCard>
      <ServiceCard>
        <template #icon>
          <h1>TEST</h1>
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
