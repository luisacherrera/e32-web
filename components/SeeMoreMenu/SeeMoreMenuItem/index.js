import { useRouter } from 'next/router'
import styles from './SeeMoreMenuItem.module.scss'

export default function SeeMoreMenuItem({
  item
}) {
  const router = useRouter();

  return (
    <>
      <div className={`${styles.thumbnail} thumbnail_background`}
           onClick={()=>router.push(`architecture/projects?project=${item.project_id}`)}>
        <p className={styles.menu_item_title}>{item.title}</p>
      </div>

      <style jsx>{`
        .thumbnail_background {
          background-image: url(${item.image});
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </>
  )
}