import css from './CreateButton.css'

const CreateButton = (props) => {
    return(
        <button className={css.Button} disabled={!props.creatable} onClick={props.toggle}>
            <span style={{fontSize: '1.9rem'}}>+</span>
        </button>
    );
} ;

export default CreateButton;