import StyledSectionHeader from "../common/sectionHeader/SectionHeader.styled";
import Container from "../common/container/Container";
import {
    StyledContantWrapper,
    StyledWelcomeText,
    StyledListWrapper,
    StyledListHeader,
    StyledListItem,
} from "./Welcome.styled";

const Welcome = () => {
    return (
        <Container>
            <StyledSectionHeader>
                Ласкаво просимо до Норвегії!
            </StyledSectionHeader>
            <StyledContantWrapper>
                <StyledWelcomeText>
                    Ми раді бачити вас тут! Цей сайт створений для того, щоб
                    допомогти вам легше інтегруватися в нове середовище, освоїти
                    норвезьку мову та відчути себе впевнено в Норвегії. Тут ви
                    знайдете ресурси для вивчення мови, інформацію про культурні
                    особливості, практичні поради та підтримку від людей, які
                    вже пройшли цей шлях.
                </StyledWelcomeText>
                <StyledListWrapper>
                    <StyledListHeader>Що ви знайдете тут:</StyledListHeader>
                    <ul>
                        <StyledListItem>
                            <span>
                                Граматика норвезької мови для початківців.
                            </span>
                        </StyledListItem>
                        <StyledListItem>
                            <span>Поради для пошуку роботи та інтеграції.</span>
                        </StyledListItem>
                        <StyledListItem>
                            <span>Культурні особливості життя в Норвегії.</span>
                        </StyledListItem>
                        <StyledListItem>
                            <span>
                                Культурні особливості життя в Норвегії Спільнота
                                українців, що проживають тут.
                            </span>
                        </StyledListItem>
                    </ul>
                </StyledListWrapper>
            </StyledContantWrapper>
        </Container>
    );
};
export default Welcome;
