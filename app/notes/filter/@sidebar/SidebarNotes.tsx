import Link from 'next/link';
import css from './SidebarNotes.module.css'

const SidebarNotes = () => {
    return (
        <div>
            <ul className={css.menuList}>
                {['All', 'Work', 'Personal', 'Meeting', 'Shopping', 'Todo'].map((tag) => (
                   <li key={tag} className={css.menuItem}>
                    <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
                        {tag}
                    </Link>
                </li> 
                ))}
            </ul>

        </div>
    );
}

export default SidebarNotes;