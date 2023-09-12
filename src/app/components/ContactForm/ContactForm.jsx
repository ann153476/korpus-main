'use client';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './ContactForm.module.scss';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const sendEmail = async data => {
    const res = await fetch(`/api/email`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    // console.log(`SENDEMAIL()`, res);

    if (res.status !== 200) {
      toast(`WOW, smthing gone wrong`);
    }
    toast.success('Запит відправлено', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const formSubmitHandler = async event => {
    event.preventDefault();
    setNameError('');
    setPhoneError('');

    let hasError = false;

    if (name.trim() === '') {
      setNameError('Будь ласка, введіть ім\'я');
      hasError = true;
    } else if (!/^[A-Za-z]+$/.test(name.trim())) {
      setNameError('Дані введені некоректно');
      hasError = true;
    }

    if (phone.trim() === '') {
      setPhoneError('Будь ласка, введіть номер телефону');
      hasError = true;
    } else {
      const phonePattern = /^\+38 \(\d{3}\) \d{3} \d{2} \d{2}$/;
      if (!phonePattern.test(phone.trim())) {
        setPhoneError('Дані введені некоректно');
        hasError = true;
      }
    }

    if (hasError) {
      return;
    }
    try {
      const data = { name, phone, message };
      await sendEmail(data);
      setName(``);
      setPhone(``);
      setMessage(``);
      handleClose();
    } catch (error) {}
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (event.target.value.trim() === '') {
      setNameError('');
    }
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    if (event.target.value.trim() === '') {
      setPhoneError('');
    }
  };
 

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className={styles.backdrop} onClick={() => setIsOpen(false)}></div>
      )}
      <button className={styles.formopener} onClick={() => setIsOpen(true)}>
        <Image
          src="/images/contactForm/MdChevronRight.svg"
          priority
          alt="корпус меблі"
          className={styles.arrow}
          width={16}
          height={16}
        />
        <span className={styles.buttontext}> Замовити{'\u00A0'}прорахунок</span>
      </button>
      <div className={`${styles.contactForm} ${isOpen && styles.active}`}>
        <Image
          src="/images/contactForm/MdChevronRight.svg"
          priority
          alt="корпус меблі"
          width={22}
          height={22}
          className={styles.hide}
          onClick={handleClose}
        />
        <Image
          src="/images/contactForm/MdClose.svg"
          priority
          alt="корпус меблі"
          width={24}
          height={24}
          className={styles.close}
          onClick={handleClose}
        />

        <form className={styles.form} onSubmit={formSubmitHandler}>
          <div className={styles.controls}>
            <div className={styles.control}>
              <span className={styles.inputIcon}>
                <Image
                  src="/images/contactForm/MdAcUnit.svg"
                  alt="name icon"
                  width={4}
                  height={4}
                />
              </span>
              <input
                type="text"
                id="name"
                required
                placeholder="Ім’я"
                value={name}
                onChange={handleNameChange}
                style={{
                  borderBottomColor: nameError ? '#D81B60' : (name.trim() === '' ? '#ECEFF1 ' : 'currentColor'),
                }}
              />
               {nameError && <span className={styles.error}>{nameError}</span>}
            </div>
            <div className={styles.control}>
              <span className={styles.inputIcon}>
                <Image
                  src="/images/contactForm/MdAcUnit.svg"
                  alt="name icon"
                  width={4}
                  height={4}
                />
              </span>
              <input
                type="number"
                id="phone"
                required
                placeholder="+38 (099) 000 00 00"
                value={phone}
                onChange={handlePhoneChange }
                style={{
                  borderBottomColor: phoneError ? '#D81B60' : (phone.trim() === '' ? '#ECEFF1 ': 'currentColor'),
                }}
               
              />
              {phoneError && <span className={styles.error}>{phoneError}</span>}
            </div>
            <div className={styles.control}>
              <input
                type="tel"
                id="message"
                placeholder="Введіть свій коментар"
                value={message}
                onChange={event => setMessage(event.target.value)}
                className={styles.textarea}
              
              />
            </div>
          </div>
          <div>
            <button className={styles.btn}> Відправити </button>
          </div>
        </form>
      </div>
    </>
  );
}
