import BuildingCard from "./Building/Building-card";
import {CardDeck} from 'reactstrap';
import css from './Buildings.css';

const Buildings = (props) => {
    const cards = props.buildings.map(element => (
        <BuildingCard
            key={element.id}
            name = {element.name}
            rent = {element.rent}
            bhk = {element.bhk}
        />
    ));
    const cardDeck = [];
    let cardGroup = [];
    for (let i=0; i<cards.length+1; i++) {
        if (cardGroup.length !== 3) {
            cardGroup.push(cards[i]);
        } else {
            cardDeck.push(<CardDeck style={{paddingBottom: '10px'}} key={i}>{cardGroup}</CardDeck>);
            cardGroup = [];
            cardGroup.push(cards[i]);
        }
    }
    if (cardGroup.length === 3)
        cardDeck.push(<CardDeck key={cardDeck.length+2} className={css.twoItems}>{cardGroup}</CardDeck>);
    else if (cardGroup.length === 2)
        cardDeck.push(<CardDeck key={cardDeck.length+2} className={css.singleItem}>{cardGroup}</CardDeck>);

    return (
        <div>{cardDeck}</div>
    );
};

export default Buildings;