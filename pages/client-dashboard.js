import Layout from "../component/Layout/Layout";
import Banner from "../component/Banner/Banner";
import CreateButton from "../component/CreateButton/CreateButton";
import CreateForm from "../component/CreateForm/CreateForm";

const cltDashboard = () => {
    const [createState,setCreateState] = React.useState(false);
    const [inputState, setInputState] = React.useState({});
    const [creatable, setCreatable] = React.useState(true);
    const [buildings, setBuildings] = React.useState([
            {id:1,name:'gitanjali',bhk:'2 bhk',floor:4,squareFeet:500,rent:'2500/month',electricity:true},
            {id:2,name:'gita',bhk:'2 bhk',floor:4,squareFeet:500,rent:'2500/month',electricity:true},
            {id:3,name:'jali',bhk:'2 bhk',floor:4,squareFeet:500,rent:'2500/month',electricity:true},
            {id:4,name:'gitanjali',bhk:'2 bhk',floor:4,squareFeet:500,rent:'2500/month',electricity:true},
            {id:5,name:'gita',bhk:'2 bhk',floor:4,squareFeet:500,rent:'2500/month',electricity:true},
            {id:6,name:'jali',bhk:'2 bhk',floor:4,squareFeet:500,rent:'2500/month',electricity:true},
            {id:7,name:'jali',bhk:'2 bhk',floor:4,squareFeet:500,rent:'2500/month',electricity:true},
            {id:8,name:'jali',bhk:'2 bhk',floor:4,squareFeet:500,rent:'2500/month',electricity:true},
        ]);

    React.useEffect(() => {
        setInputState({
            bhk: localStorage.getItem('bhk') ? localStorage.getItem('bhk') : '',
            squareFt: localStorage.getItem('squareFt') ? localStorage.getItem('squareFt') : '',
            floor: localStorage.getItem('floor') ? localStorage.getItem('floor') : '',
            rent: localStorage.getItem('rent') ? localStorage.getItem('rent') : '',
            location: localStorage.getItem('location') ? localStorage.getItem('location') : ''
        });
    }, []);

    React.useEffect(() => {
        for (let key in inputState) {
            if(inputState[key] !== '') {
                setCreatable(false);
                break;
            }
        }
    }, [inputState]);

    const toggleHandler = () => setCreateState(!createState);

    const onChangeHandler = (event) => {
        localStorage.setItem(event.target.name, event.target.value);
        setInputState({...inputState, [event.target.name]: [event.target.value]});
    };

    const discardHandler = (event) => {
        for (let key in inputState) {
            localStorage.removeItem(key);
        }
        setInputState({});
        setCreateState(false);
        setCreatable(true);
        event.preventDefault();
    };

    const submitHandler = (event) => {
        const id = buildings.length + 1;
        const newBuilding = {id: id, ...inputState};
        setBuildings([...buildings, newBuilding]);
        for (let key in inputState) {
            localStorage.removeItem(key);
        }
        setInputState({});
        setCreateState(false);
        setCreatable(true);
        console.log(id);
        event.preventDefault();
    };
    return(
        <Layout>
            <div>
                <div id={'openForm'} style={{margin: '0 auto', width: '1px', height: '1px'}}/>
                <Banner buildings={buildings}/>
                <CreateButton toggle={toggleHandler} creatable={creatable}/>
                <CreateForm
                    open={createState || !creatable}
                    changed={onChangeHandler}
                    value={inputState}
                    submit={submitHandler}
                    discard={discardHandler}
                    submitable={!creatable}
                />
            </div>
        </Layout>
    )
};
export default cltDashboard;