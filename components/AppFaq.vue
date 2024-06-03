<template>
  <section
    class="min-h-screen -mx-4 my-16 p-16 bg-cover bg-wave-wht flex flex-col justify-evenly max-dsk-mid:gap-8 max-sm:px-4"
  >
    <h4
      class="text-bs-orange text-5xl font-bold text-center -mt-8 max-dsk-mid:text-4xl max-dsk-mid:mt-0 max-tb-big:mt-4"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      よくある質問
    </h4>
    <div class="flex h-full items-center max-tb-big:flex-col">
      <div
        class="flex-2 max-tb-big:w-3/6"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="100"
      >
        <img
          src="../public/svg/faq-doodle.svg"
          alt=""
          class="scale-110 max-tb-big:scale-100"
        />
      </div>
      <ul
        class="w-3/5 mx-auto flex flex-col gap-6 flex-2 max-tb-big:w-full max-tb-big:mb-8 max-sm:w-full"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="100"
      >
        <li
          v-for="question in questions"
          :key="question.q"
        >
          <p class="text-bs-orange text-xl font-bold max-dsk-mid:text-lg">
            <span>Q:{{ question.q }}</span>
          </p>
          <p class="text-bs-wblue text-xl max-dsk-mid:text-lg">
            <span>A:{{ question.a }}</span>
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const questions = [
  {
    q: '美食道のサービスはどのように始めることができますか？',
    a: 'ホームページの「今すぐ始める」ボタンをクリックし、簡単な登録手続きを行ってください。その後、初回のカウンセリングを予約して、個別の食事プランを作成します。',
  },
  {
    q: 'プランの変更は可能ですか？',
    a: 'はい、いつでもプランの変更が可能です。マイアカウントページから変更手続きを行うか、サポートチームにご連絡ください。',
  },
  {
    q: '食事プランはどのくらいの頻度で更新されますか？',
    a: '基本的に週に1回の更新を行っていますが、お客様の進捗やニーズに応じて柔軟に対応いたします。',
  },
  {
    q: ' キャンセルポリシーについて教えてください。',
    a: '月単位のサブスクリプションはいつでもキャンセル可能です。年間プランのキャンセルについては、サポートチームにお問い合わせください。',
  },
  {
    q: 'どのような支払い方法が利用できますか？',
    a: 'クレジットカードやデビットカード、銀行振込など、さまざまな支払い方法に対応しています。',
  },
  {
    q: '食事プランはどのようにパーソナライズされますか？',
    a: '初回カウンセリングでお客様の健康状態、目標、食の好みなどを詳しくお伺いし、それに基づいて栄養士が個別のプランを作成します。',
  },
];
</script>
