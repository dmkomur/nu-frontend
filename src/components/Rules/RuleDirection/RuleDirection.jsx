import { StyledRuleHeader } from "../../common/rules/RuleHeader.styled";
import StyledRuleDescription from "../../common/rules/RuleDescription";
import { StyledRuleWrapper } from "../../common/rules/RulePWrapper.styled";

const RuleDirection = () => {
    return (
        <StyledRuleWrapper>
            <StyledRuleHeader>Напрям (Retning)</StyledRuleHeader>
            <StyledRuleDescription>
                <span>Hit, dit</span>.
                <br />
                Сюди, туди.
            </StyledRuleDescription>
            <StyledRuleDescription>
                <span>Venstre, høyre, rett, tilbake, fremover</span>.
                <br />
                Ліворуч, праворуч, прямо, назад, вперед.
            </StyledRuleDescription>
            <StyledRuleDescription>
                <span>Inn, ut</span>.
                <br />В середину, назовні.
            </StyledRuleDescription>
            <StyledRuleDescription>
                <span>Opp, ned</span>.
                <br />
                Вгору, вниз.
            </StyledRuleDescription>
            <StyledRuleDescription>
                <span>Mellom, gjennom</span>.
                <br />
                Між, крізь.
            </StyledRuleDescription>
            <StyledRuleDescription>
                Деякі вирази мають свою власну форму, їх легко запам'ятати з
                часом.
                <br />
                <span>Kom til meg</span> - Іди до мене.
                <br />
                <span>Gå på skolen</span> - Іди до школи.
                <br />
                <span>Gå i barnehagen</span> - Іди до дитячого садка.
                <br />
                <span>Gå hjem</span> - Іди додому.
            </StyledRuleDescription>
        </StyledRuleWrapper>
    );
};
export default RuleDirection;
