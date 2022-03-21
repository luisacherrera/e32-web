import { useRouter } from 'next/router'
import styles from './SeeMoreMenuItem.module.scss'

export default function SeeMoreMenuItem({
  category,
  item,
  handleNavigationView
}) {
  const router = useRouter();

  const navigateToProject = () => {
    router.push(`/${category}/projects?project=${item.project_id}`);
    handleNavigationView(false, item)
  }

  return (
    <>
      <div className={`${styles.thumbnail} thumbnail_background`}
           onClick={()=>navigateToProject()}>
        <p className={styles.menu_item_title}>{item.title}</p>
      </div>

      <style jsx>{`
        .thumbnail_background {
          background-image: url(${item.image});
          background-repeat: no-repeat;
        }
      `}</style>
    </>
  )
}