import { Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody } from 'reactstrap';

const BuildingCard = (props) => (
    <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <CardSubtitle><strong>Rent : </strong>{props.rent}</CardSubtitle>
            <CardSubtitle><strong>BHK : </strong>{props.bhk}</CardSubtitle>
            <Button>View</Button>
        </CardBody>
    </Card>
);

export default BuildingCard;