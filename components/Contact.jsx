import React, {useState} from 'react'
import Button from './Button';
import styles from '../styles/style';

const Contact = () => {

    const [formData, setFormData] = useState({ name: ' ', email: ' ', message: ' ' });
    const { username, email, message } = formData;
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    


  return (
    <>
        <h2 className={`${styles.heading2} text-center mt-10`}>
          Get in Touch <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
        <br />
      <div className="flex flex-col justify-center items-center form__app bg-discount-gradient rounded-[10px] relative z-[2] ">
        <div className="app__contact__div w-full bg-black-gradient">
          <input className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] w-full input-gradient" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
        </div>
        <div className="app__contact__div w-full bg-black-gradient">
          <input className="font-poppins font-normal text-[18px] leading-[30.8px] w-full input-gradient" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
        </div>
        <div className='w-full app__contact__div bg-black-gradient'>
          <textarea
            className="w-full input-gradient font-poppins font-normal text-[18px] leading-[30.8px]"
            placeholder="Your Message"
            value={message}
            name="message"
            onChange={handleChangeInput}
          />
        </div>
      </div>
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      <div className='flex m-auto items-center relative z-[2]'>
        <Button text={"Send Message"} />
      </div>
    </>
  )
}

export default Contact