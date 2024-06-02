<template>
  <section class="my-16 mt-32">
    <div class="text-center">
      <h4 class="text-bs-orange text-5xl font-bold">プランと料金</h4>
      <p class="text-2xl text-bs-wblue font-bold my-8 w-4/5 m-auto">
        美食道では、お客様一人ひとりのニーズに合わせた様々なプランをご用意しています。どのプランも、栄養バランスの取れた食事プランと専門家によるサポートが含まれています。
      </p>
      <label class="inline-flex items-center cursor-pointer mb-2">
        <span class="text-lg mr-2 font-medium text-gray-900">月額</span>
        <input
          type="checkbox"
          id="true"
          value="true"
          v-model="subSwitch"
          class="sr-only peer"
        />
        <div
          class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-bs-orange"
        ></div>

        <span class="text-lg ml-2 font-medium text-gray-900">年間</span>
      </label>
      <img
        src="../public/svg/arrow.svg"
        alt=""
        class="m-auto"
      />
      <p class="text-lg text-bs-orange">特別割引価格でご提供中！</p>
    </div>
    <ul class="flex justify-around mt-4">
      <SubCard
        :features="[
          'パーソナライズされた週次食事プラン',
          '月に1回の栄養士とのオンライン相談',
          'メールサポート',
        ]"
        :yearlyDiscount="subSwitch"
      >
        <template #subPlan> ベーシックプラン </template>
        <template #price>{{ !subSwitch ? '¥5,000' : '¥54,000' }}</template>
        <template #plan>{{ !subSwitch ? '/月' : '/年' }}</template>
        <template #discount> ¥4,500 /月 相当</template>
        <template #default>
          基本的なサポートを受けながら、健康的な食生活への第一歩を踏み出しましょう。簡単で続けやすいプランです。
        </template>
      </SubCard>
      <SubCard
        :features="[
          'パーソナライズされた週次食事プラン',
          '月に2回の栄養士とのオンライン相談',
          'チャットサポート',
          'レシピ',
        ]"
        :yearlyDiscount="subSwitch"
      >
        <template #subPlan> スタンダードプラン </template>
        <template #price>
          {{ !subSwitch ? '¥8,000' : '¥86,400' }}
        </template>
        <template #plan>{{ !subSwitch ? '/月' : '/年' }}</template>
        <template #discount> ¥7,200 /月 相当</template>
        <template #default>
          充実したサポートで、健康と美しさを同時に手に入れましょう。バランスの取れた食事プランと専門家のアドバイスがあなたをサポートします。
        </template>
      </SubCard>
      <SubCard
        :features="[
          'パーソナライズされた週次食事プラン',
          '週に1回の栄養士とのオンライン相談',
          '24時間チャットサポート',
          '専用レシピと買い物リスト',
          '進捗確認と調整',
        ]"
        :yearlyDiscount="subSwitch"
      >
        <template #subPlan> プレミアムプラン </template>
        <template #price>
          {{ !subSwitch ? '¥12,000' : '¥129,600' }}
        </template>
        <template #plan>{{ !subSwitch ? '/月' : '/年' }}</template>
        <template #discount> ¥10,800 /月 相当</template>
        <template #default>
          最も手厚いサポートで、理想の健康と美を実現しましょう。個別対応の食事プランと24時間のサポートで、持続可能な変化を目指します。
        </template>
      </SubCard>
    </ul>
  </section>
</template>

<script setup>
import SubCard from './cards/SubCard.vue';
const subSwitch = ref(false);
</script>
