import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';
import Item from "./Item";

const Statistics = ({ title, stats}) => (
  <div>
    <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statlist}>
        {stats.map((stat) => (
            <Item
            key={stat.id}
            name={stat.label}
            id={stat.id}
            value={stat.percentage}
          />
        ))}
      </ul>
    </section>
  </div>
);

Statistics.PropTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape),
};

export default Statistics;