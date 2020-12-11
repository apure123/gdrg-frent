import LoginPage from "../components/LoginPage";
import ContentPageFrameWoek from "../components/ContentPageFrameWoek";
import UsersAdmin from "../components/superAdmin/UsersAdmin";

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

export const superAdminRoutes=[


    {
        path:"/dashboard/superAdmin/user",
        component:UsersAdmin,

    }

]