import Image from 'next/image';

import styles from './CardDesignEl.module.scss';
const image =
  'https://shurup.net.ua/image/cache/data/59/31/556dd0b8bd066cbc447358d21a3f09b0-750x560.jpg';

export default function CardDesignEl() {
  return (
    <section className={styles.design}>
      <div className={styles.designElFirst}>
        <Image
          src="/images/defaultImg/image1.jpg"
          priority
          alt="корпус меблі"
          width={1200}
          height={800}
          className={styles.img}
        />
        <div className={styles.designPink}>
          <h2 className={styles.title}> Експертний підхід </h2>
          <div className={styles.text}>
            <p>
              Відданість нашої студії експертному підходу вигідно виділяє нас на
              фоні шаленої конкуренції. Наші досвідчені дизайнери та майстри
              здатні розглянути саму непомітну деталь, щоб забезпечити найвищу
              якість та функціональність у кожному проєкті. Ми не просто
              виготовляємо меблі - ми втілюємо Ваші бажання та створюємо
              шедеври, які прикрасять Ваш простір.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.designElSecond}>
        <Image
          src="/images/defaultImg/image3.jpg"
          priority
          alt="корпус меблі"
          width={1200}
          height={800}
          className={styles.imgGrey}
        />
        <div className={styles.designGrey}>
          <h2 className={styles.title}>Сучасні рішення</h2>
          <div className={styles.text}>
            <p>
              Відповідно до останніх тенденцій у дизайні та технологіях, наші
              меблі втілюють інновації сьогодення. Використання передових
              матеріалів, новітніх конструкцій та функціональних рішень дозволяє
              нам створювати меблі, які не лише естетично привабливі, але й
              відповідають найвищим стандартам зручності та ергономіки.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.designElLast}>
        <Image
          src="/images/defaultImg/image2.jpg"
          priority
          alt="корпус меблі"
          width={1200}
          height={800}
          className={styles.imgLast}
        />
        <div className={styles.designPinkLast}>
          <h2 className={styles.title}>Високоякісні матеріали та фурнітура</h2>
          <div className={styles.text}>
            <p>
              Наша студія віддає перевагу використанню лише найкращих матеріалів
              та фурнітури. Це гарантує довговічність та надійність наших
              виробів, а також відображає наше прагнення до високої якості і
              задоволення Ваших потреб.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
