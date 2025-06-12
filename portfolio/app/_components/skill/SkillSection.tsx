// app/_components/skill/SkillSection.tsx
import Image from "next/image";
import styles from "./page.module.css";
import { getSkillsList, Skill } from "../../_libs/microcms";

export default async function SkillSection() {
  const data = await getSkillsList();

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Skill</h2>
      <p className={styles.text}>
        これまで勉強した言語や現在学習中の技術を載せましょう。
      </p>
      <ul className={styles.skillList}>
        {data.contents.map((item: Skill) => (
          <li key={item.id} className={styles.skillItem}>
            <h3>{item.skillname}</h3>
            {item.image && (
              <Image
                src={item.image.url}
                width={item.image.width}
                height={item.image.height}
                alt={item.skillname}
              />
            )}
            <p>{item.skilltext}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}


// import styles from "./page.module.css";

// export default function SkillPage() {
//   return (
//     <main id="skill" className={styles.container}>
//       <h2 className={styles.heading}>Skill</h2>
//       <p className={styles.text}>
//         これまで勉強した言語や現在学習中の技術を載せましょう。
//         「半分ぐらいしか理解していないけど…」というものでも積極的に書き、学習のモチベーションに変えましょう。
//       </p>
//       <ul className={styles.skillList}>
//         <li>HTML / CSS</li>
//         <li>JavaScript (ES6+)</li>
//         <li>TypeScript</li>
//         <li>React / Next.js</li>
//         <li>Node.js / Express（現在学習中）</li>
//         {/* 自分の学習中・習得済み技術をリストで追加 */}
//       </ul>
//     </main>
//   );
// }
