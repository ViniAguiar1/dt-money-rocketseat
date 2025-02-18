import { HeaderContainer, HeaderContent, NewTransactionButton, HeaderContainerLogo } from "./styles";
import * as Dialog from "@radix-ui/react-dialog"
import logoImg from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <HeaderContainerLogo>
                    <img src={logoImg} alt="" />
                    <h1>DT Money</h1>
                </HeaderContainerLogo>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.Trigger>
                    <NewTransactionModal />
                </Dialog.Root>

            </HeaderContent>
        </HeaderContainer>
    );
}
