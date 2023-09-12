'use client';

import { useState } from 'react';
import s from './FeedbackForm.module.scss';

const initialState = {
  userName: '',
  phone: '',
  comment: '',
  rating: 0,
};

export default function FeedbackForm({ postFeedback, handleCloseModal }) {
  const [formData, setFormData] = useState(initialState);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await postFeedback(formData);
    setFormData(initialState);
    handleCloseModal();
  }

  const { userName, phone, comment } = formData;

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.inner}>
        {!userName && (
          <svg
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.66683 1.8335H2.97183L3.51183 1.2935L3.27683 1.05683L2.50016 1.8335H2.16683V1.50016L2.9435 0.723496L2.70683 0.488496L2.16683 1.0285V0.333496H1.8335V1.0285L1.2935 0.488496L1.05683 0.723496L1.8335 1.50016V1.8335H1.50016L0.723496 1.05683L0.488496 1.2935L1.0285 1.8335H0.333496V2.16683H1.0285L0.488496 2.70683L0.723496 2.9435L1.50016 2.16683H1.8335V2.50016L1.05683 3.27683L1.2935 3.51183L1.8335 2.97183V3.66683H2.16683V2.97183L2.70683 3.51183L2.9435 3.27683L2.16683 2.50016V2.16683H2.50016L3.27683 2.9435L3.51183 2.70683L2.97183 2.16683H3.66683V1.8335Z"
              fill="#D81B60"
            />
          </svg>
        )}
        <input
          className={s.input}
          type="text"
          name="userName"
          placeholder="Ім`я"
          value={userName}
          onChange={handleChange}
          required={true}
          minLength={2}
          maxLength={15}
          pattern="^[а-яА-Яa-zA-Z0-9]+$"
          title="Ім`я має містити тільки літери та цифри."
        />
      </div>
      <div className={s.inner}>
        {!phone && (
          <svg
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.66683 1.8335H2.97183L3.51183 1.2935L3.27683 1.05683L2.50016 1.8335H2.16683V1.50016L2.9435 0.723496L2.70683 0.488496L2.16683 1.0285V0.333496H1.8335V1.0285L1.2935 0.488496L1.05683 0.723496L1.8335 1.50016V1.8335H1.50016L0.723496 1.05683L0.488496 1.2935L1.0285 1.8335H0.333496V2.16683H1.0285L0.488496 2.70683L0.723496 2.9435L1.50016 2.16683H1.8335V2.50016L1.05683 3.27683L1.2935 3.51183L1.8335 2.97183V3.66683H2.16683V2.97183L2.70683 3.51183L2.9435 3.27683L2.16683 2.50016V2.16683H2.50016L3.27683 2.9435L3.51183 2.70683L2.97183 2.16683H3.66683V1.8335Z"
              fill="#D81B60"
            />
          </svg>
        )}
        <input
          className={s.input}
          type="text"
          name="phone"
          placeholder="+380*********"
          value={phone}
          onChange={handleChange}
          required={true}
          pattern="^\+380\d{9}$"
          title="Номер телефону має бути у форматі +380*********."
        />
      </div>
      <div className={s.inner}>
        {!comment && (
          <svg
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.66683 1.8335H2.97183L3.51183 1.2935L3.27683 1.05683L2.50016 1.8335H2.16683V1.50016L2.9435 0.723496L2.70683 0.488496L2.16683 1.0285V0.333496H1.8335V1.0285L1.2935 0.488496L1.05683 0.723496L1.8335 1.50016V1.8335H1.50016L0.723496 1.05683L0.488496 1.2935L1.0285 1.8335H0.333496V2.16683H1.0285L0.488496 2.70683L0.723496 2.9435L1.50016 2.16683H1.8335V2.50016L1.05683 3.27683L1.2935 3.51183L1.8335 2.97183V3.66683H2.16683V2.97183L2.70683 3.51183L2.9435 3.27683L2.16683 2.50016V2.16683H2.50016L3.27683 2.9435L3.51183 2.70683L2.97183 2.16683H3.66683V1.8335Z"
              fill="#D81B60"
            />
          </svg>
        )}
        <textarea
          className={s.input}
          name="comment"
          rows={1}
          placeholder="Ваш відгук"
          value={comment}
          onChange={handleChange}
          required={true}
          minLength={5}
          title="Коментар має бути не менше п'яти символів."
        />
      </div>
      <div className={s.ratingWrapper}>
        <div className={s.ratingItems}>
          <input
            id="ratingItem5"
            type="radio"
            name="rating"
            value="5"
            className={s.ratingItem}
            onChange={handleChange}
          />
          <label htmlFor="ratingItem5" className={s.ratingLabel}></label>
          <input
            id="ratingItem4"
            type="radio"
            name="rating"
            value="4"
            className={s.ratingItem}
            onChange={handleChange}
          />
          <label htmlFor="ratingItem4" className={s.ratingLabel}></label>
          <input
            id="ratingItem3"
            type="radio"
            name="rating"
            value="3"
            className={s.ratingItem}
            onChange={handleChange}
          />
          <label htmlFor="ratingItem3" className={s.ratingLabel}></label>
          <input
            id="ratingItem2"
            type="radio"
            name="rating"
            value="2"
            className={s.ratingItem}
            onChange={handleChange}
          />
          <label htmlFor="ratingItem2" className={s.ratingLabel}></label>
          <input
            id="ratingItem1"
            type="radio"
            name="rating"
            value="1"
            className={s.ratingItem}
            onChange={handleChange}
          />
          <label htmlFor="ratingItem1" className={s.ratingLabel}></label>
        </div>
      </div>
      <button className={s.sendBtn} type="submit">
        Відправити
      </button>
    </form>
  );
}
