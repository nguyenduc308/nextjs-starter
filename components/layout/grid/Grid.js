import style from './grid.scss';

const Grid = ({wide, children}) => {
    return (
        <React.Fragment>
            <div className={wide ? `${style.grid} ${style.wide}` : style.grid}>
                {children}
            </div>
        </React.Fragment>
    )
}

export default Grid
