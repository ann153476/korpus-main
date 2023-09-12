'use client';
import style from './Pagination.module.scss';
import imgPrev from '../../../../image/prevPage.png';
import imgNext from '../../../../image/nextPage.png';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Pagination({ changePage, amountItems, currentPage }) {
  const [currentPageNum, setCurrentPageNum] = useState(currentPage);
  const items = Array.from({ length: amountItems }, (_, index) => index + 1);

  function handlePageClick(page) {
    if (page === 'prev' && currentPageNum > 1) {
      setCurrentPageNum(currentPageNum - 1);
    } else if (page === 'next' && currentPageNum < items.length) {
      setCurrentPageNum(currentPageNum + 1);
    } else if (typeof page === 'number' && page >= 1 && page <= items.length) {
      setCurrentPageNum(page);
    }
  }

  useEffect(() => {
    changePage(currentPageNum);
  });

  return (
    <div className={style.wrapper}>
      <ul className={style.buttonList}>
        <li className={style.item}>
          <button
            className={style.prevPage}
            onClick={() => handlePageClick('prev')}
          >
            <Image
              src={imgPrev}
              alt="prevPage"
              className={style.svgPrev}
              width={24}
              height={24}
            />
          </button>
        </li>
        {items.map(item => (
          <li key={item} className={style.item}>
            <button
              onClick={() => handlePageClick(item)}
              className={`${style.itemPage} ${
                item === currentPageNum ? style.currentPage : ''
              }`}
            >
              {item}
            </button>
          </li>
        ))}
        <li className={style.item}>
          <button
            className={style.nextPage}
            onClick={() => handlePageClick('next')}
          >
            <Image
              src={imgNext}
              alt="nextPage"
              className={style.svgNext}
              width={24}
              height={24}
            />
          </button>
        </li>
      </ul>
    </div>
  );
}
