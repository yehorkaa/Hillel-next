'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './template.module.scss';

// template будет пересоздаваться , тобиж с 0 маутится, вызывая юзэфект и тд на каждой смене роута в отличие от лейаута

const CompanyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={styles.sectionPadding}>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <nav className={styles.nav}>
            <ul role='list' className={styles.navList}>
              <motion.li
                className={styles.navItem}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link href='/team/test1'>Test1</Link>
              </motion.li>
              <motion.li
                className={styles.navItem}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link href='/team/test2'>Test2</Link>
              </motion.li>
              <motion.li
                className={styles.navItem}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link href='/team/test3'>Test3</Link>
              </motion.li>
              <motion.li
                className={styles.navItem}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link href='/team/test4'>Test4</Link>
              </motion.li>
            </ul>
          </nav>
        </div>

        <main>{children}</main>
      </div>
    </section>
  );
};

export default CompanyLayout;
