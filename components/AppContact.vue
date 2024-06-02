<template>
  <section class="px-16 py-12 mb-16">
    <h4 class="text-bs-orange text-5xl font-bold text-center">お問い合わせ</h4>
    <p class="text-2xl text-bs-wblue font-bold my-8 w-4/5 m-auto text-center">
      美食道へのお問い合わせは、以下の方法で受け付けています。お気軽にご連絡ください。
    </p>
    <div class="grid grid-cols-3 gap-8 w-4/5 mx-auto">
      <div
        class="bg-bs-white px-4 py-8 rounded-3xl shadow-[10px_10px_0_0_#D5C757] flex flex-col items-center gap-4 text-bs-bbox text-center font-bold"
      >
        <Icon
          class="text-bs-wblue w-16 h-16"
          name="ic:round-email"
        ></Icon>
        <div>
          <p>直接メールでのお問い合わせも承っております。</p>
          <p>メールアドレス: support@bishokudo.jp</p>
        </div>
      </div>
      <div
        class="bg-bs-white px-4 py-8 rounded-3xl shadow-[10px_10px_0_0_#CE4A2D] flex flex-col items-center gap-4 text-bs-bbox text-center font-bold"
      >
        <Icon
          class="text-bs-wblue w-16 h-16"
          name="ion:call"
        ></Icon>
        <p>お電話でのお問い合わせは、以下の番号までご連絡ください。</p>
        <p>電話番号: 99-1234-5678</p>
        <p>受付時間: 平日 9:00〜18:00</p>
      </div>
      <div
        class="bg-bs-white px-4 py-8 rounded-3xl shadow-[10px_10px_0_0_#D5C757] flex flex-col items-center gap-4 text-bs-bbox text-center font-bold"
      >
        <Icon
          class="text-bs-wblue w-16 h-16"
          name="material-symbols:location-on-rounded"
        ></Icon>
        <div>
          <p>オフィスに直接お越しいただくことも可能です。</p>
          <p>住所: 東京都1-2-3</p>
        </div>
      </div>
    </div>

    <div
      class="bg-bs-white mt-12 px-4 py-8 rounded-3xl shadow-[10px_10px_0_0_#084D58] flex flex-col items-center gap-4 text-bs-bbox text-center font-bold w-2/5 mx-auto"
    >
      <Icon
        class="text-bs-wblue w-16 h-16"
        name="mdi:web"
      ></Icon>
      <div>
        <p>ソーシャルメディア</p>
        <p>
          最新情報やお知らせは、弊社のソーシャルメディアでも発信しています。フォローして最新の情報をチェックしてください。
        </p>
        <div class="flex justify-evenly mt-8">
          <a href="">
            <Icon
              class="text-bs-wblue w-16 h-16"
              name="mdi:facebook-box"
            ></Icon>
          </a>
          <a href="">
            <Icon
              class="text-bs-wblue w-16 h-16"
              name="mdi:instagram"
            ></Icon
          ></a>
          <a href="">
            <Icon
              class="text-bs-wblue w-16 h-16"
              name="hugeicons:new-twitter"
            ></Icon
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>
