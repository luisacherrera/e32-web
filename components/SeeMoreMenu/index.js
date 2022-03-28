import SeeMoreMenuItem from './SeeMoreMenuItem';
import styles from './SeeMoreMenu.module.scss'

export default function ({
  items,
  category,
  toggleNavigationView
}) {
  const filteredItems = 
          items.filter((data, index, self) =>
                  index === self.findIndex((t) => (
                    t.project_id === data.project_id && t.title === data.title
                  ))
                )
  
  const toggleNavigation = (stat, item) => {
    toggleNavigationView(stat, item)
  }

  const closeNavigationMenu = () => {
    toggleNavigationView(false, null)
  }

  return (
    <>
      <div className={styles.see_more_container}>
        {
          filteredItems.map((item)=>
            <SeeMoreMenuItem 
              category={category}
              item={item}
              key={item.title}
              handleNavigationView={toggleNavigation}>
            </SeeMoreMenuItem>
          )
        }
      </div>
      <img className={styles.projects_navigation_menu__close}
           onClick={()=>closeNavigationMenu()} 
           src={require("../../public/cursor/SeeMore.png")}/>
    </>
  )
}