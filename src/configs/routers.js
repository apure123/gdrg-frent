import LoginPage from "../components/LoginPage";
import ContentPageFrameWoek from "../components/ContentPageFrameWoek";

export const routes=[

    {
        path:"/login",
        component:LoginPage,
        exact:true
    },
    {
        path:"/dashboard",
        component:ContentPageFrameWoek,

    }


]