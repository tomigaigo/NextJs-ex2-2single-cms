// List 1 - app/page.tsx

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import About from "./_components/about";
import Profile from "./_components/profile";
import Work from "./_components/work";
// import Skill from "./_components/skill"
import SkillSection from "./_components/skill/SkillSection";

export default function HomePage() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>My Portfolio</h1>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="#main">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#profile">Profile</Link>
            </li>
            <li>
              <Link href="#work">Work</Link>
            </li>
            <li>
              <Link href="#skill">Skill</Link>
            </li>
            <li>
              <Link href="/strengths">Strengths</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.container}>
        {/* メインビジュアル */}
        <section className={styles.hero}>
          <Image
            src="/images/main-visual.jpg"
            alt="Main Visual"
            width={1200}
            height={600}
            className={styles.heroImage}
          />
          <h1 className={styles.title}>My Portfolio</h1>
          <h3 className={styles.subtitle}>
            このサイトについて
            <br />
            専門学校でWebプログラミングを学んでいる○○です。
            <br />
            教科書で学んだ Next.js を活用し、
            <br />
            ポートフォリオサイトを制作しました。
          </h3>
        </section>

        {/* 各セクションへのリンク */}
        {/* <nav className={styles.navLinks}>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <p>このサイトについて
専門学校でWebデザインとフロントエンド開発を学んでいる○○です。
教科書で学んだ Next.js や CSS モジュールを活用し、自分だけのポートフォリオサイトを制作しました。
このサイトでは、制作物の紹介やスキルセット、学習の軌跡をまとめています。
授業で学んだ知識を、自分なりに整理してアウトプットすることで、理解を深めることを目的としています。</p>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/skill">Skill</Link>
          </li>
          <li>
            <Link href="/strengths">Strengths</Link>
          </li>
        </ul>
      </nav> */}
        <About />
        <Profile />
        <Work />
        <SkillSection />
        {/* <Skill /> */}
      </main>
    </>
  );
}
