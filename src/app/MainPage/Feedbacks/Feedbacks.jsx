'use client';

import { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Container from '@/app/components/Container/Container';
import FeedbacksSlider from './FeedbacksSlider/FeedbacksSlider';
import FeedbackModal from './FeedbackModal/FeedbackModal';
import FeedbackForm from './FeedbackModal/FeedbackForm/FeedbackForm';
import Image from 'next/image';
import s from './Feedbacks.module.scss';

async function postFeedback(formData) {
  const { userName, phone, rating, comment } = formData;
  const params = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: userName,
      phone,
      rating: Number(rating),
      comment,
    }),
    mode: 'cors',
  };

  try {
    const response = await fetch(
      'https://korpus.onrender.com/api/feedbacks/',
      params
    );

    if (!response.ok) {
      const res = await response.json();
      Notify.failure(res.message);
    } else {
      const res = await response.json();
      Notify.success(res.message);
    }
  } catch (error) {
    Notify.failure('Failed to send request');
  }
}

export default async function Feedbacks() {
  const [showModal, setShowModal] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://korpus.onrender.com/api/feedbacks/`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      setFeedbacks(result);
    })();
  }, []);

  function handleOpenModal() {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  }

  function handleCloseModal() {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  }

  return (
    <>
      <section className={s.feedbacks} id="feedbacks">
        <Container className={s.feedbacksContainer}>
          <h1 className={s.title}>відгуки</h1>
          {!feedbacks && (
            <div className={s.inner}>
              <Image
                className={s.noReviews}
                src="/images/feedbacks/reviews.png"
                alt="reviews"
                width={260}
                height={260}
              />
              <p className={s.text}>
                Відгуків поки що немає. Залиште свій відгук першими!
              </p>
            </div>
          )}
          {feedbacks && <FeedbacksSlider feedbacks={feedbacks} />}
          <button className={s.commentBtn} onClick={handleOpenModal}>
            Залишити відгук
          </button>
        </Container>
      </section>
      {showModal && (
        <FeedbackModal handleCloseModal={handleCloseModal}>
          <FeedbackForm
            postFeedback={postFeedback}
            handleCloseModal={handleCloseModal}
          />
        </FeedbackModal>
      )}
    </>
  );
}
