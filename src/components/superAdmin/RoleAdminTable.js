import React, { useState,useEffect } from 'react';
import {Table, Input, InputNumber, Popconfirm, Form, Select, Tag, Button, Breadcrumb} from 'antd';
import {connect} from "react-redux"
import {deleteUserById} from "../../server/superAdmin/deleteUser";
import {getAllUser} from "../../server/superAdmin/getAllUser";
import {getAllRole} from "../../server/superAdmin/getAllRole";

const originData = [];
const { Option } = Select;
for (let i = 0; i < 5; i++) {
    originData.push({
        key: i.toString(),
        roleName: `角色${i}`,
        privilege:["add","delete"]
    });
}


//角色选择的事件
function handleChange(value) {
    console.log(`selected ${value}`);
}



const UsersAdminTable = (props) => {

    //模拟componentDidMount
    useEffect(()=>{
        getAllRole();
        console.log("--------获取了角色列表-------")
    },[])

    //可编辑的表格单元格，需要在这里指定渲染类型
//会根据dataIndex渲染不同的组件
    const EditableCell = ({
                              editing,
                              dataIndex,
                              title,
                              inputType,
                              record,
                              index,
                              children,
                              ...restProps
                          }) => {
        let inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

        if (dataIndex==="privilege"){
            inputNode=<Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="选择权限"
                /*defaultValue={['china']}*/
                onChange={handleChange}
                optionLabelProp="label"
            >
                {props.privilegeList.map((item)=><Option
                    value={item.privilegeId} label={item.privilegeName}>
                    <div className="demo-option-label-item">
                    <span role="img" aria-label="China">
                    </span>
                        {item.privilegeName}
                    </div>
                </Option>)}


            </Select>
        }else if (dataIndex==="status"){
            inputNode=<Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="active">正常</Option>
                <Option value="frozen">冻结</Option>
            </Select>

        }
        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item
                        name={dataIndex}
                        style={{
                            margin: 0,
                        }}
                        rules={[
                            {
                                required: true,
                                message: `请输入${title}!`,
                            },
                        ]}
                    >
                        {inputNode}
                    </Form.Item>
                ) : (
                    children
                )}
            </td>
        );
    };


    const [form] = Form.useForm();

    const [editingKey, setEditingKey] = useState('');

    //传入表格的一行记录，判断这行是不是在编辑中
    const isEditing = (record) => record.key === editingKey;

    //用记record改form
    const edit = (record) => {
        form.setFieldsValue({
            roleName: '',
            privilege:[],
            ...record,
        });
        setEditingKey(record.key);
    };

    //取消函数，表示没有行正在编辑
    const cancel = () => {
        setEditingKey('');
    };

    //保存编辑更改
    const save = async (key) => {
        /*try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                //setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                //setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }*/
    };

    //将权限的id转换为对应的权限名字
    const privilegeId2Name=(id)=>{
        if(id){
            for (var pi of props.privilegeList){
                if (id==pi.privilegeId){
                    return pi.privilegeName
                }
            }
        }
        return "未指定"
    }

    const columns = [
        {
            title: '角色id',
            dataIndex: 'roleId',
            width: '15%',
            editable: false,
        },
        {
            title: '角色名',
            dataIndex: 'roleName',
            width: '20%',
            editable: false,
        },
        {
            title: "权限",
            dataIndex: "privilege",
            width: '50%',
            editable: true,
            render:(item)=>{
                return (item)? <div>
                    {item.map((itemi)=>{
                        return(<Tag>{privilegeId2Name(itemi)}</Tag>)
                    })}
                </div>:<div>未指定</div>

            }

        },
        {
            title: '操作',
            dataIndex: 'operation',
            render: (_, record) => {
                const editable = isEditing(record);
                //根据是否编辑状态返回不同的按钮
                return editable ? (
                    <span>
            <a
                href="javascript:;"
                onClick={() => save(record.key)}
                style={{
                    marginRight: 8,
                }}
            >
              保存
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>取消</a>
            </Popconfirm>
          </span>
                ) : (
                    <span>
                        <a disabled={editingKey !== ''} onClick={() => edit(record)} style={{
                            marginRight: 8,
                        }}>
                            编辑权限
                        </a>
                        <Popconfirm title="确认删除角色?" onConfirm={()=>{
                            //删除角色
                        }}>
                            <a style={{
                                marginRight: 8,
                            }} >删除
                        </a>
                        </Popconfirm>

                    </span>

                );
            },
        },
    ];
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });



    return (
        <div>
            <Breadcrumb style={{ margin: '32px 0' }}>
                <Breadcrumb.Item>管理员</Breadcrumb.Item>
                <Breadcrumb.Item>角色权限管理</Breadcrumb.Item>
            </Breadcrumb>

            <Button  type="primary" style={{ marginBottom: 16 }} onClick={()=>{
                getAllRole();
            }}>
                刷新数据
            </Button>
            <Form form={form} component={false}>
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={props.roleList}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: cancel,
                    }}
                />
            </Form>
        </div>

    );
};


function mapStateToProps(state)
{
    return{
        roleList:state.allRole.roleList,
        privilegeList: state.allPrivilege.privilegeList
    }
}
export default connect(mapStateToProps,null) (UsersAdminTable)
