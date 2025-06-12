import Image from "next/image";
import styles from "./about.module.css";

export default function About(){
    return (
        <section id="about" className={styles.container}>

            <h2>About</h2>
            <p>
                このサイトは「教科書を振り返りながら、自分のポートフォリオを作成する」ことを
                目的としたサンプルプロジェクトです。教科書で学んだ Next.js の基本や CSS
                モジュールの使い方を確認しながら、自分だけのオリジナルサイトを作りましょう。
            </p>
            <section>
                {/* <Image
                src="/images/profile.jpg"
                alt="About Image"
                width={800}
                height={400}
                /> */}
            </section>
        </section>
    );
}