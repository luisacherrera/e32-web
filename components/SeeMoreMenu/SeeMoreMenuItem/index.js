import { useRouter } from 'next/router'
import styles from './SeeMoreMenuItem.module.scss'

export default function SeeMoreMenuItem({
  item
}) {
  const router = useRouter();

  return (
    <>
      <div className={`thumbnail`}
           onClick={()=>router.push(`architecture/projects?project=${item.project_id}`)}>
        <p className={styles.menu_item_title}>{item.title}</p>
      </div>

      <style jsx>{`
        .thumbnail {
          position: relative;
          width: 20vw;
          height: 25vh;
          margin: 5px;
          background-image: url(${item.image});
          background-repeat: no-repeat;
          background-size: cover;
          border: 1px solid black;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}