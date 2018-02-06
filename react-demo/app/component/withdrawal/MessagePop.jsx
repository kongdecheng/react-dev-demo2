import React from 'react';
import PropTypes from 'prop-types';


class MessagePop extends React.Component {

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="pop">
                <div className="container">

                </div>
            </div>
        );
    }


}

/*props类型检查*/
MessagePop.propTypes = {
    /*显示成功的logo还是失败的logo*/
    success: PropTypes.bool.isRequired,
    /*提示信息*/
    tip: PropTypes.string.isRequired,
    /*更多描述*/
    info: PropTypes.string,
    /*确认按钮的钩子*/
    confirmHandle: PropTypes.func,
    /*隐藏MessagePop的钩子*/
    hideMessagePop: PropTypes.func.isRequired
};

/*props默认参数*/
MessagePop.defaultProps = {};

export default MessagePop;