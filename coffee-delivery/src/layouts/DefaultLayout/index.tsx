import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { Header } from "../../components/Header";
import { Intro } from "../../pages/Intro";

export function DefaultLayout(){
    return (
        <LayoutContainer>
            <Header/>
            <Intro/>
            <Outlet/>
        </LayoutContainer>
    )
}