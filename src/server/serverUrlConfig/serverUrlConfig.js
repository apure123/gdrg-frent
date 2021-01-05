
const domainUrl="http://localhost:8080"

const propertyDomain="http://localhost:8080"

//财务管理，获取公司所有资产的url
export const allPropertyUrl=`${propertyDomain}/asset/all`

export const loginUrl=`${domainUrl}/user/login`
export const rigisterUrl=`${domainUrl}/user/register`

export const getAllUserUrl=`${domainUrl}/user/getAllUsers`
export const getAllRoleUrl=`${domainUrl}/role/getAllRoles`
//冻结用户
export const frozenUserUrl=`${domainUrl}/user/changeEnable`
export const deleteUserUrl=`${domainUrl}/user/deleteUser`
export const addRoleUrl=`${domainUrl}/role/addRole`
//为角色设置权限的url
export const setPrivilegeForRoleUrl=`${domainUrl}/role/setPrivileges`
//为用户设置角色的url
export const setRoleForUserUrl=`${domainUrl}/user/setRoles`
//删除角色接口
export const deleteRoleUrl=""
//申请新资产的url
export const applyPropertyUrl=`${propertyDomain}/apply/apply`
//查看本人申请记录
export const myApplyUrl=`${propertyDomain}/apply/myapply`

//查看所有人申请记录
export const allApplyUrl=`${propertyDomain}/apply/allapply`

//查看还没审批的申请记录
export const todoApplyUrl=`${propertyDomain}/apply/todo`

//通过审批
export const allowApplyUrl=`${propertyDomain}/apply/allow`

//拒绝一条申请
export const refuseApplyUrl=`${propertyDomain}/apply/refuse`

export const getUserInfoUrl=""
export const changeUserPasswordUrl=`${domainUrl}/user/changePassword`

export const addPrivilegeUrl=""
export const deletePrivilegeUrl=""

//根据roleid获取权限
export const getPrivilegesUrl=""




