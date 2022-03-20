import { useRouter } from 'next/router';
import styles from './BackButton.module.scss';

export default function BackButton({
  category
}) {
  const router = useRouter();

  const categoryVariants = {
    'architecture' : styles.button_wrapper_architecture,
    'lighting': styles.button_wrapper_lighting,
    'building': styles.button_wrapper_building,
  }


  return (
    <div onClick={()=>router.push('/')}
         className={`
           ${styles.button_wrapper}
           ${categoryVariants[category]}
         `}>
      <img src={require("../../public/cursor/Back.png")}/>
    </div>
  )
}