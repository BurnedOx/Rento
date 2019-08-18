import Buildings from "./Buildings/Buildings";
import css from './Banner.css';

const Banner = (props) => {
    return(
        <div className={css.Container}>
            <Buildings buildings={props.buildings}/>
            {props.buildings.length === 0 ?
                <h3 className={css.Text}>Add A Rent!</h3> : null
            }
        </div>
    );
};
export default Banner;