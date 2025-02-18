import { HeaderContainer, HeaderContent, NewTransactionButton, HeaderContainerLogo } from "./styles";
import logoImg from "../../assets/logo.svg";
export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <HeaderContainerLogo>
                    <img src={logoImg} alt="" />
                    <h1>DT Money</h1>
                </HeaderContainerLogo>
                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    );
}
