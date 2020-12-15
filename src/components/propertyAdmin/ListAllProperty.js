import {Component} from "react";
import { Table, Tag, Space } from 'antd';
const columns = [
    {
        title: '资产编号',
        dataIndex: 'userName',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: '资产类型',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '资产名称',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '分配员工',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    }
];

const data = [
    {
        key: '1',
        userName: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        userName: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        userName: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

class  ListAllProperty extends Component{

    render() {
        return(<div>
            <Table columns={columns} dataSource={data} />
        </div>)
    }
}

export default ListAllProperty