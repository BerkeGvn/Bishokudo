<template>
  <section class="text-center">
    <div
      data-aos="fade-up"
      data-aos-duration="300"
    >
      <h4 class="text-bs-orange text-5xl font-bold max-dsk-mid:text-4xl">成功事例</h4>
      <p
        class="text-2xl text-bs-wblue font-bold my-8 w-4/5 m-auto max-dsk-mid:text-xl max-md:w-full max-md:text-lg max-sm:font-semibold"
      >
        美食道のパーソナライズされた食事プランにより、多くのお客様が健康と美を手に入れています。以下は、その中のいくつかの成功事例です。
      </p>
    </div>
    <ul class="flex flex-col gap-6 items-center max-md:pb-8 max-md:overflow-x-hidden">
      <ReviewCard
        data-aos="fade-right"
        data-aos-duration="600"
        data-aos-delay="100"
      >
        <template #image>
          <img
            src="../public/images/person1.webp"
            alt=""
            srcset=""
            class="max-tb-big:h-24 max-tb-big:w-24"
          />
        </template>
        <template #default>
          「美食道のおかげで、健康診断での高コレステロール値を改善できました。栄養士さん
          のアドバイス通りの食事を続けた結果、3ヶ月でコレステロール値が正常範囲に戻り、
          体重も5キロ減りました。毎日の食事が楽しみになりました！」
        </template>
        <template #name>- 佐藤美香</template>
      </ReviewCard>
      <ReviewCard
        reverseCard="true"
        data-aos="fade-left"
        data-aos-duration="600"
        data-aos-delay="200"
      >
        <template #image>
          <img
            src="../public/images/person2.webp"
            alt=""
            srcset=""
            class="max-tb-big:h-24 max-tb-big:w-24"
          />
        </template>
        <template #default>
          「仕事のストレスで体調を崩しやすかったのですが、美食道の食事プランに
          従ってから体調が劇的に改善しました。2ヶ月後にはエネルギーが増え、スト
          レスをうまく管理できるようになりました。ライフスタイルに合った提案をし
          てくれるので、とても助かっています。」
        </template>
        <template #name>- 田中健太</template>
      </ReviewCard>
      <ReviewCard
        data-aos="fade-right"
        data-aos-duration="600"
        data-aos-delay="300"
      >
        <template #image>
          <img
            src="../public/images/person3.webp"
            alt=""
            srcset=""
            class="max-tb-big:h-24 max-tb-big:w-24"
          />
        </template>
        <template #default>
          「美食道のパーソナライズプランに従い、6ヶ月で理想の体型と美肌を手に入
          れました。食事の楽しさと健康的な変化を実感しています。栄養士さんのサ
          ポートがあったからこそ、ここまで続けられました。」
        </template>
        <template #name>- 鈴木由美子</template>
      </ReviewCard>
    </ul>
  </section>
</template>

<script setup>
import ReviewCard from './cards/ReviewCard.vue';
</script>
