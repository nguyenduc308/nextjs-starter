import style from './grid.scss';

const Col = ({s, m, l, children}) => {
    let classes = "";
    if(s) {classes += style[`col-${s}`] + " "}
    if(m) {classes += style[`col-${m}`] + " "}
    if(l) {classes += style[`col-${l}`] + " "}
    return (
        <React.Fragment>
            <div 
            className={classes}
            >
                {children}
            </div>
        </React.Fragment>
    )
}

export default Col;
