import React from 'react';
import '../../public/css/withdrawal/Index.pcss';
import ConfirmPop from "./ConfirmPop";
import utils from "../../public/js/utils";

const defaultData = {
    "state": "状态",
    "nll": "年利率",
    "wtje": "委托金额",
    "cjje": "成交金额",
    "rbtn": "撤单",
};

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data_list: [], isShowPop: false, confirmInfo: null};
        this.cheDanClick = this.cheDanClick.bind(this); // 为方法内绑定this对象
        this.hideCheDanPop = this.hideCheDanPop.bind(this);
    }


    cheDanClick() {
        /*假数据，假设从接口获得的数据*/
        let mock_data = {
            'zqdm': 100000 + utils.getRandomIntInclusive(1, 10000),
            'zqmc': '1天期 R-' + utils.getRandomIntInclusive(1, 999),
            'wtje': utils.getRandomIntInclusive(10000, 99999),
            'zkts': utils.getRandomIntInclusive(0, 9),
            'nhsyl': utils.getRandomIntInclusive(10000, 99999) / 100.0
        };

        this.setState({confirmInfo: mock_data});

        this.setState({isShowPop: true});

    }

    /**
     * 隐藏撤单弹窗
     */
    hideCheDanPop() {
        this.setState({isShowPop: false});
    }

    componentDidMount() {
        // 假装从接口请求回来的数据
        let mock_list = [
            {
                "name": "深",
                "title": "一天期",
                "date": 2014001,
                "time": "11:15:11",
                "state": "未成交",
                "nll": 4.120,
                "wtje": 2001000,
                "jyje": 1003000
            },
            {
                "name": "沪",
                "title": "一天期",
                "date": 2014001,
                "time": "11:15:10",
                "state": "未成交",
                "nll": 4.120,
                "wtje": 2000000,
                "jyje": 1000000
            },
            {
                "name": "深",
                "title": "一天期",
                "date": 2014001,
                "time": "11:15:10",
                "state": "未成交",
                "nll": 4.120,
                "wtje": 2000000,
                "jyje": 1000000
            },
            {
                "name": "沪",
                "title": "一天期",
                "date": 2014001,
                "time": "11:15:10",
                "state": "未成交",
                "nll": 4.120,
                "wtje": 2000000,
                "jyje": 1000000
            },
            {
                "name": "深",
                "title": "一天期",
                "date": 2014001,
                "time": "11:15:10",
                "state": "未成交",
                "nll": 4.120,
                "wtje": 2000000,
                "jyje": 1000000
            },
            {
                "name": "沪",
                "title": "一天期",
                "date": 2014001,
                "time": "11:15:10",
                "state": "未成交",
                "nll": 4.120,
                "wtje": 2000000,
                "jyje": 1000000
            },
            {
                "name": "深",
                "title": "一天期",
                "date": 2014001,
                "time": "11:15:10",
                "state": "未成交",
                "nll": 4.120,
                "wtje": 2000000,
                "jyje": 1000000
            },
            {
                "name": "沪",
                "title": "一天期",
                "date": 2014001,
                "time": "11:15:10",
                "state": "未成交",
                "nll": 4.120,
                "wtje": 2000000,
                "jyje": 1000000
            },
            {
                "name": "深",
                "title": "一天期",
                "date": 2014001,
                "time": "11:15:10",
                "state": "未成交",
                "nll": 4.120,
                "wtje": 2000000,
                "jyje": 1000000
            },
            {
                "name": "沪",
                "title": "一天期",
                "date": 2014001,
                "time": "11:15:10",
                "state": "未成交",
                "nll": 4.120,
                "wtje": 2000000,
                "jyje": 1000000
            },
            {
                "name": "深",
                "title": "一天期",
                "date": 2014001,
                "time": "11:15:10",
                "state": "未成交",
                "nll": 4.120,
                "wtje": 2000000,
                "jyje": 1000000
            },
            {
                "name": "沪",
                "title": "一天期",
                "date": 2014001,
                "time": "11:15:10",
                "state": "未成交",
                "nll": 4.120,
                "wtje": 2000000,
                "jyje": 1000000
            },
            {
                "name": "深",
                "title": "一天期",
                "date": 2014001,
                "time": "11:15:10",
                "state": "未成交",
                "nll": 4.120,
                "wtje": 2000000,
                "jyje": 1000000
            },
            {
                "name": "沪",
                "title": "一天期",
                "date": 2014001,
                "time": "11:15:10",
                "state": "未成交",
                "nll": 4.120,
                "wtje": 2000000,
                "jyje": 1000000
            },
        ];

        this.setState({data_list: mock_list});
    }

    componentWillUnmount() {

    }


    render() {

        return (
            <div>
                <div className="header"/>
                <div className="main-list">
                    {
                        this.state.data_list.map((item, index) => {
                            return (
                                <div key={index} className="block">
                                    <div className="top-flex-container">
                                        <div className="flex1">
                                            <div className="logo">{item.name}</div>
                                        </div>
                                        <div className="flex2">
                                            <div className="date">{item.title}</div>
                                        </div>
                                        <div className="flex2">
                                            <div className="date1">{item.date}</div>
                                        </div>
                                        <div className="flex4">
                                            <div className="date2">{item.time}</div>
                                        </div>
                                        <div className="flex2">
                                            <div className="btn1" onClick={this.cheDanClick}><span
                                                className="btn1-text">{defaultData.rbtn}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-flex-container">
                                        <div className="col-1">
                                            <div className="info">{defaultData.state}</div>
                                            <div className="info-value">{item.state}</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="info">{defaultData.nll}</div>
                                            <div className="info-value">{item.nll}</div>
                                        </div>
                                        <div className="col-3">
                                            <div className="info">{defaultData.wtje}</div>
                                            <div className="info-value">{item.wtje}</div>
                                        </div>
                                        <div className="col-4">
                                            <div className="info">{defaultData.cjje}</div>
                                            <div className="info-value">{item.jyje}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {this.state.isShowPop &&
                <ConfirmPop confirmInfo={this.state.confirmInfo} hideCheDanPop={this.hideCheDanPop}/>}
            </div>
        )
    }

}

export default Index;