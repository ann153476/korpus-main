import s from './FeedbackModal.module.scss';

export default function FeedbackModal({ children, handleCloseModal }) {
  return (
    <div className={s.overlay}>
      <div className={s.modalWrapper}>
        <button onClick={handleCloseModal} className={s.closeBtn} type="button">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 32 32"
            className={s.closeIcon}
          >
            <path d="M25.333 8.547l-1.88-1.88-7.453 7.453-7.453-7.453-1.88 1.88 7.453 7.453-7.453 7.453 1.88 1.88 7.453-7.453 7.453 7.453 1.88-1.88-7.453-7.453 7.453-7.453z"></path>
          </svg>
        </button>
        <p className={s.text}>Заповніть свої дані і залиште відгук:</p>
        {children}
      </div>
    </div>
  );
}
