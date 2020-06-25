import Link from 'next/link';
import style from './header.scss';
const Header = () => {
    return (
        <React.Fragment>
            <header className={style.header}>
                hello
                <div>
                    <h1 className={style.logo}>DucLux.Com</h1>
                </div>
                <nav className="nav-links">
                    <Link href="/home">
                        <a>Home</a>
                    </Link>
                    <Link href="/blogs">
                        <a>Blogs</a>
                    </Link>
                    <Link href="/portfolio">
                        <a>Portfolio</a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </nav>
            </header>
        </React.Fragment>
    )
}

export default Header;
