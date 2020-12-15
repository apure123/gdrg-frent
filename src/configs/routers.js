import LoginPage from "../components/LoginPage";
import ContentPageFrameWoek from "../components/ContentPageFrameWoek";

import UsersAdminTable from "../components/superAdmin/UsersAdmin";
import RoleAdminTable from"../components/superAdmin/RoleAdminTable"
import ListAllProperty from "../components/propertyAdmin/ListAllProperty";
import CheckApplyLog from "../components/propertyAdmin/CheckApplyLog";
import Approve from "../components/propertyAdmin/Approve";
import NewApply from "../components/apply/NewApply";
import ApplyLog from "../components/apply/ApplyLog";

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
    },{
        path: "/dashboard/propertyAdmin/all",
        component:ListAllProperty
    },
    {
        path: "/dashboard/propertyAdmin/applylog",
        component:CheckApplyLog
    },
    {
        path: "/dashboard/propertyAdmin/approve",
        component:Approve
    },
    {
        path: "/dashboard/apply/newapply",
        component:NewApply
    },
    {
        path: "/dashboard/apply/log",
        component:ApplyLog
    }

]