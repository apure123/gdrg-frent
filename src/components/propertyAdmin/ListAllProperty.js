import {Component} from "react";
import { Table, Tag, Space,Input, Button } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import {connect} from "react-redux"
import {getAllProperty} from "../../server/getAllProperty";



class  ListAllProperty extends Component{
    state = {
        searchText: '',
        searchedColumn: '',
    };

    componentDidMount() {
        console.log("开始请求----------------");
        getAllProperty();
    }


    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    render() {
        const columns = [
            {
                title: '资产编号',
                dataIndex: 'propertyId',
                key: 'propertyId',
                ...this.getColumnSearchProps('propertyId'),
            },
            {
                title: '资产类型',
                dataIndex: 'deviceType',
                key: 'deviceType',
                ...this.getColumnSearchProps('deviceType'),
            },
            {
                title: '资产名称',
                dataIndex: 'deviceName',
                key: 'deviceName',
                ...this.getColumnSearchProps('deviceName'),
            },
            {
                title: "分配员工",
                dataIndex: "userName",
                ...this.getColumnSearchProps('userName'),
            },{
                title: "分配员工id",
                dataIndex: "userId",
                ...this.getColumnSearchProps('userId'),
            }
        ];

        return(<div>
            <Table columns={columns} dataSource={this.props.allProperty} />
        </div>)
    }
}
function mapStateToProps(state)
{
    return{
        allProperty:state.allProperty.allProperty,
    }
}

ListAllProperty=connect(mapStateToProps,null)(ListAllProperty);

export default ListAllProperty