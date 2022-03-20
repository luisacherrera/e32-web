import SeeMoreMenuItem from './SeeMoreMenuItem';
import styles from './SeeMoreMenu.module.scss'

export default function ({
  items
}) {
  const filteredItems = 
          items.filter((data, index, self) =>
                  index === self.findIndex((t) => (
                    t.project_id === data.project_id && t.title === data.title
                  ))
                )
  return (
    <>
      <div className={styles.see_more_container}>
        {
          filteredItems.map((item)=>
            <SeeMoreMenuItem 
              item={item}
              key={item.title}>
            </SeeMoreMenuItem>
          )
        }
      </div>
    </>
  )
}