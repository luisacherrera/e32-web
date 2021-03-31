import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import styles from './About.module.scss';
import { isBrowser } from 'react-device-detect'

export default function About() {
  const router = useRouter()

  // refs

  const container = useRef(null)
  const contactForm = useRef(null)

  //states

  const [inputFocus, setInputFocus] = useState(false);
  const [inputs, setInputs] = useState({
    email: '',
    subject: '',
    message: '',
  })
  const [emailSuccess, setEmailSuccess] = useState(false)
  const [emailFailure, setEmailFailure] = useState(false)

  // DOM events handlers

  const bringFormIntoView = () => {
    contactForm.current.scrollIntoView()
  }

  // form handlers

  const handleOnSubmit = (e) => {
    e.preventDefault();
  
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mayawvvg',
      data: inputs,
    })
      .then((response) => {
        setEmailSuccess(true);
        setInputs({
          email: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error(error);
        setEmailFailure(true);
        setInputs({
          email: '',
          subject: '',
          message: '',
        });
      })
  }

  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))

    if (e.target.id === 'message') {
      setInputFocus(true)
    }
  }

  const resetBodyOverflownOnClose = () => {
    document.body.style.overflow = 'auto'
  }

  useEffect(()=>{
    if (!isBrowser) {
      document.body.style.overflow = 'scroll';
    }
    container.current.scrollIntoView();

    return ()=> !isBrowser && resetBodyOverflownOnClose();
  }, [])

  return (
    <>
      <div className={styles.container}
           ref={container}>
        <div className={styles.header}>
          <div className={styles.header_logo}>
            <h1 className={styles.title_style}>E32</h1>
          </div>
          <div className={styles.header_closing_button}>
            <p onClick={()=>router.back()}>&#9587;</p>
            <img onClick={()=>router.back()} src="/cursor/SeeMore.png"/>
          </div>
          <div className={styles.header_address_info_container}>
            <p className={styles.header_address_info_container__map_link}>
              <a href="https://goo.gl/maps/fDdTYNgfMrgtNWCS8">Maps</a>
            </p>
            <address>
              Nº02 C/Energía, 32 Planta 1<br/>
              08940 Cornellà de Llobregat<br/>
              Barcelona
            </address>
          </div>
        </div>
        <div className={styles.footer}>
          <h3 className={styles.footer_home__address_container}>
            Tlf: 938 326 741 <br/>
            <a href="mailto:info@e32.studio?subject=Request information">info@e32.studio</a>
          </h3>
          <p className={styles.footer_middle} onClick={()=>bringFormIntoView()}>Email us!</p>
          <p className={styles.footer_middle}>
            <a href="https://www.instagram.com/e32studio/">IG</a>
          </p>
          <ul className={styles.footer_home__navbar}>
            <li onClick={()=>router.push('/architecture')}>Architecture</li>
            <li onClick={()=>router.push('/lighting')}>Lighting</li>
            <li onClick={()=>router.push('/building')}>Building</li>
          </ul>
          <ul className={styles.footer_home__navbar_mobile}>
            <li onClick={()=>router.push('/architecture')}>Architecture projects</li>
            <li onClick={()=>router.push('/lighting')}>Lighting projects</li>
            <li onClick={()=>router.push('/building')}>Building projects</li>
          </ul>
        </div>
        <div className={styles.horizontal_container}>
          <div className={styles.horizontal_container_secondary}>
            <div className={styles.layout_helper_0}>
              <h2 className={styles.headline_text}>About</h2>
              <div className={styles.block_sign_container}>
                <p className={styles.intro_text}>E32 is a trans-disciplinary studio that strives to enhance integrated projects with a «Human centric» approach.</p>
                <p className={styles.dummy_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a elementum nibh. Quisque id pretium arcu, ac facilisis magna. Maecenas eget vulputate enim, nec cursus sem.</p>
              </div>
              <div className={styles.image_block}>
                <img src="/photos/projects_architecture/01.PDG/PDG_9.jpg"></img>
              </div>
            </div>
            <div className={styles.contact_block}>
              <h2>Need some<br/>info? Keep in<br/>touch!</h2>
            </div>
            <div className={styles.layout_helper_1}>
              <h2 className={styles.headline_text}>Email us!</h2>
              <div className={styles.contact_form}>
              {
                emailSuccess 
                  ? <p className={styles.contact_form__delivery_message}>Your email has been sent!</p>
                  : emailFailure 
                    ? <p className={styles.contact_form__delivery_message}>There has been a problem. Please <span onClick={()=>setEmailFailure(false)}>try again</span></p>              
                    : <form ref={contactForm} 
                            className={styles.contact_form}
                            onSubmit={handleOnSubmit}>
                        <div className={styles.contact_form_input}>
                          <p>Your Email:</p>        
                          <input
                            id="email"
                            type="email"
                            name="_replyto"
                            onChange={handleOnChange}
                            required
                            value={inputs.email}
                          />
                        </div>
                        <div className={styles.contact_form_input}>
                          <p>Subject:</p>
                          <input
                            id="subject"
                            type="text"
                            name="_subject"
                            onChange={handleOnChange}
                            required
                            value={inputs.subject}
                          />
                        </div>
                        <div className={styles.contact_form_input}>
                          {
                            !inputFocus
                              ? <p>Your text here...</p>
                              : null
                          }
                          <textarea cols="30" 
                                    rows="15"
                                    id="message"
                                    name="message"
                                    onChange={handleOnChange}
                                    required
                                    value={inputs.message}></textarea>
                          {
                            !!inputFocus
                              ? <button>Send!</button>
                              : null
                          }
                        </div>
                      </form>
              }
              </div>
            </div>
            <div className={styles.layout_helper}></div>
          </div>
        </div>
      </div>
    </>
  )
}
