import { Grid, Row, Col } from './grid';
import { Header } from './header';

const LayoutGridBar = (props) => {
    return (
        <React.Fragment>
            <Header />
            <Grid wide>
                <Row>
                    <Col s={1} m={5}>
                        {props.children}
                    </Col>
                </Row>
            </Grid>
        </React.Fragment>
    )
}

export default LayoutGridBar;