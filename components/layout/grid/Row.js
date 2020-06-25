import style from './grid.scss';

const Row = ({children}) => {
    return (
        <React.Fragment>
            <div className={style.row}>
                {children}
            </div>
        </React.Fragment>
    )
}

export default Row
