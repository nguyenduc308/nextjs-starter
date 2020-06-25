import { Grid } from './grid';
import { Header } from './header';

const LayoutGrid = (props) => {
    return (
        <React.Fragment>
            <Header />
            <Grid wide>
                {props.children}
            </Grid>
        </React.Fragment>
    )
}

export default LayoutGrid;