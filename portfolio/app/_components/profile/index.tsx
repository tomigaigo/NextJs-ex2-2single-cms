

import Image from "next/image";
import styles from "./profile.module.css";

export default function ProfilePage() {
  return (
    <main id="profile" className={styles.container}>
      <h2 className={styles.heading}>Profile</h2>
      <p>名前： 鈴木 太郎
        <br />学校： ○○専門学校 ITクリエイティブ学科 2年生
        <br />  年齢： 19歳</p>

      <section className={styles.hobbySection}>
        <h3 className={styles.subHeading}>趣味 (Hobby)</h3>
        <ul className={styles.hobbyList}>
          <li className={styles.hobbyItem}>
            {/* <Image
              src="/images/hobby-photo.jpg"
              alt="写真撮影"
              width={150}
              height={150}
              className={styles.hobbyImage}
            /> */}
            <p>写真撮影：自然風景や街並みを撮影し、Instagramで発信</p>
          </li>
          <li className={styles.hobbyItem}>
            {/* <Image
              src="/images/hobby-game.jpg"
              alt="ゲーム"
              width={150}
              height={150}
              className={styles.hobbyImage}
            /> */}
            <p>ゲーム：友人とオンライン協力プレイでUI/UXのヒントを得る</p>
          </li>
          <li className={styles.hobbyItem}>
            {/* <Image
              src="/images/hobby-book.jpg"
              alt="読書"
              width={150}
              height={150}
              className={styles.hobbyImage}
            /> */}
            <p>読書：技術書やミステリー小説を読み、ストーリー構造を学ぶ</p>
          </li>
          <li className={styles.hobbyItem}>
            {/* <Image
              src="/images/hobby-cafe.jpg"
              alt="カフェ巡り"
              width={150}
              height={150}
              className={styles.hobbyImage}
            /> */}
            <p>カフェ巡り：落ち着いたカフェでアイデア出しやコーディング</p>
          </li>
        </ul>
      </section>
    </main>
);
}
