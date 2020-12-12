import LoginPage from "../components/LoginPage";
import ContentPageFrameWoek from "../components/ContentPageFrameWoek";

import UsersAdminTable from "../components/superAdmin/UsersAdmin";
import RoleAdminTable from"../components/superAdmin/RoleAdminTable"

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
        component:UsersAdminTable,
        exact:true
    },
    {
        path:"/dashboard/superAdmin/role",
        component:RoleAdminTable,
        exact:true
    }

]