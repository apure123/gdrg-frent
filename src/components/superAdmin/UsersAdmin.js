import React, { useState } from 'react';
import {Table, Input, InputNumber, Popconfirm, Form, Select, Tag,Button} from 'antd';
import {connect} from "react-redux"


const originData = [];
const { Option } = Select;
for (let i = 0; i < 5; i++) {
    originData.push({
        key: i.toString(),
        name: `Edrward ${i}`,
        age: 32,
        account: `London Park no. ${i}`,
        roles:["管理员","123"],
        status:"active"
    });
}


//角色选择的事件
function handleChange(value) {
    console.log(`selected ${value}`);
}

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

    if (dataIndex==="roles"){
        inputNode=<Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="选择用户类型"
            /*defaultValue={['china']}*/
            onChange={handleChange}
            optionLabelProp="label"
        >
            <Option value="超级用户" label="超级">
                <div className="demo-option-label-item">
                    <span role="img" aria-label="China">
                    </span>
                    超级用户
                </div>
            </Option>
            <Option value="老板" label="boss">
                <div className="demo-option-label-item">
                    <span role="img" aria-label="USA">
                    </span>
                    老板
                </div>
            </Option>

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

const UsersAdminTable = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');

    //传入表格的一行记录，判断这行是不是在编辑中
    const isEditing = (record) => record.key === editingKey;

    //用记record改form
    const edit = (record) => {
        form.setFieldsValue({
            name: '',
            age: '',
            account: '',
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
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns = [
        {
            title: '用户名',
            dataIndex: 'name',
            width: '25%',
            editable: true,
        },
        {
            title: '账号状态',
            dataIndex: 'status',
            width: '15%',
            editable: true,
            render:(item)=>{
                return  item==="active"? <Tag color="success">正常</Tag>:<Tag color="error">冻结</Tag>
            }
        },
        {
            title: '账号',
            dataIndex: 'account',
            width: '20%',
            editable: true,
        },
        {
            title: "角色",
            dataIndex: "roles",
            width: '20%',
            editable: true,
            render:(item)=>{

                return item? <div>
                    {item.map((itemi)=>{
                        return(<Tag>{itemi}</Tag>)
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
                            编辑
                        </a>
                        <a style={{
                            marginRight: 8,
                        }}>删除
                        </a>

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

    const AddaRow = () => {

        let newdata=[...data];
        newdata.push({
            key: data.length.toString(),
            name: "",
            age: 32,
            account: "",
            roles:["管理员","123"],
            status:"active"
        })
        setData(newdata);
        setEditingKey(data.length.toString());
    };

    return (
        <div>
            <Button onClick={AddaRow} type="primary" style={{ marginBottom: 16,marginRight:16 }}>
                新增用户
            </Button>
            <Button  type="primary" style={{ marginBottom: 16 }}>
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
                    dataSource={data}
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



export default UsersAdminTable