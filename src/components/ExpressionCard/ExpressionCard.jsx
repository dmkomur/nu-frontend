import {
    StyledCard,
    StyledDevider,
    StyledTextNo,
    StyledTextUa,
    StyledTheme,
} from "./ExpressionCard.styled";
import PropTypes from "prop-types";

const ExpressionCard = ({ expression }) => {
    return (
        <StyledCard>
            <StyledTheme>{expression.theme}</StyledTheme>
            <StyledTextNo>{expression.no}</StyledTextNo>
            <StyledDevider />
            <StyledTextUa>{expression.ua}</StyledTextUa>
        </StyledCard>
    );
};

export default ExpressionCard;

ExpressionCard.propTypes = {
    expression: PropTypes.shape({
        ua: PropTypes.string.isRequired, // Украинская фраза
        no: PropTypes.string.isRequired, // Норвежская фраза
        theme: PropTypes.string.isRequired, // Тема фразы
    }).isRequired,
};
