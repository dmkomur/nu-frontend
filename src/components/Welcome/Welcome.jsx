import StyledSectionHeader from "../common/sectionHeader/SectionHeader.styled";
import Container from "../common/container/Container";
import { StyledContantWrapper, StyledWelcomeText } from "./Welcome.styled";

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
                    <br />
                    Ви знайдете багато корисної інформації, яка допоможе вам,
                    зокрема про граматику норвезької мови для початківців,
                    поради для пошуку роботи та інтеграції, культурні
                    особливості життя в Норвегії та спільноту українців, що
                    проживають тут. Це допоможе вам адаптуватися до нового
                    середовища та знайти своє місце в Норвегії.
                </StyledWelcomeText>
            </StyledContantWrapper>
        </Container>
    );
};
export default Welcome;
