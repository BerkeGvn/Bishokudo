<template>
  <section class="text-center">
    <h4 class="text-bs-orange text-5xl font-bold">成功事例</h4>
    <p class="text-2xl text-bs-wblue font-bold my-8 w-4/5 m-auto">
      美食道のパーソナライズされた食事プランにより、多くのお客様が健康と美を手に入れています。以下は、その中のいくつかの成功事例です。
    </p>
    <ul class="flex flex-col gap-6 items-center">
      <ReviewCard>
        <template #image>
          <img
            src="../public/images/person1.webp"
            alt=""
            srcset=""
          />
        </template>
        <template #default>
          「美食道のおかげで、健康診断での高コレステロール値を改善できました。栄養士さん
          のアドバイス通りの食事を続けた結果、3ヶ月でコレステロール値が正常範囲に戻り、
          体重も5キロ減りました。毎日の食事が楽しみになりました！」
        </template>
        <template #name>- 佐藤美香</template>
      </ReviewCard>
      <ReviewCard reverseCard="true">
        <template #image>
          <img
            src="../public/images/person2.webp"
            alt=""
            srcset=""
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
      <ReviewCard>
        <template #image>
          <img
            src="../public/images/person3.webp"
            alt=""
            srcset=""
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
