import React from 'react';
import PropTypes from 'prop-types';
import "../../public/css/withdrawal/ConfirmPop.pcss"
import MessagePop from "./MessagePop";

const defaultData = {
    "title": "撤单确认",
    "zqdm": "证券代码",
    "zqmc": "证券名称",
    "wtje": "委托金额",
    "zkts": "占款天数",
    "nhsyl": "年化收益率",
    "qr": "确认",
    "qx": "取消"
};

class ConfirmPop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowMessagePop: false
        };
        this.qrBtnOnClickHandle = this.qrBtnOnClickHandle.bind(this);
        this.hideMessagePop = this.hideMessagePop.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    /**
     * 确认按钮处理事件
     */
    qrBtnOnClickHandle() {
        this.setState({
            isShowMessagePop: true
        });
    }

    /**
     * 隐藏消息弹窗
     */
    hideMessagePop() {
        this.setState({
            isShowMessagePop: false
        });
    }


    render() {
        let a = 0;
        return (
            <div className="pop">
                <div className="container">
                    <div className="title"><span>{defaultData.title}</span></div>
                    <div className="item-line">
                        <div className="item-left">{defaultData.zqdm}</div>
                        <div className="item-right">{this.props.confirmInfo.zqdm}</div>
                    </div>
                    <div className="item-line">
                        <div className="item-left">{defaultData.zqmc}</div>
                        <div className="item-right">{this.props.confirmInfo.zqmc}</div>
                    </div>
                    <div className="item-line">
                        <div className="item-left">{defaultData.wtje}</div>
                        <div className="item-right">{this.props.confirmInfo.wtje}</div>
                    </div>
                    <div className="item-line">
                        <div className="item-left">{defaultData.zkts}</div>
                        <div className="item-right">{this.props.confirmInfo.zkts}</div>
                    </div>
                    <div className="item-line">
                        <div className="item-left">{defaultData.nhsyl}</div>
                        <div className="item-right">{this.props.confirmInfo.nhsyl}</div>
                    </div>
                    <div className="btn-line">
                        <div className="btn-left" onClick={this.props.hideCheDanPop}>{defaultData.qx}</div>
                        <div className="btn-right" onClick={this.qrBtnOnClickHandle}>{defaultData.qr}</div>
                    </div>
                </div>
                {this.state.isShowMessagePop &&
                <MessagePop success={a = Math.random() < 0.5} tip={a < 0.5 ? '撤单成功' : '撤单失败'}
                            confirmHandle={this.props.hideCheDanPop} info={a < 0.5 ? undefined : '服务器不给力呀'}
                            hideMessagePop={this.hideMessagePop}/>}
            </div>
        )
    }

}

/*props类型检查*/
ConfirmPop.propTypes = {
    /*弹窗信息*/
    confirmInfo: PropTypes.object.isRequired,
    /*隐藏弹窗的函数*/
    hideCheDanPop: PropTypes.func.isRequired
};

/*默认属性*/
ConfirmPop.defaultProps = {};

export default ConfirmPop;