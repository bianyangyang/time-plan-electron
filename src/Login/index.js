import React from "react";
import IconFont from "../component/Iconfont";
import './index.less';
const ipcRenderer = window.require("electron").ipcRenderer;

function Login() {
    return (
        <div className="login">
            <div className="loginTop">
                <div className="titleDragComponent"></div>
                <div
                    className="titleControlItem"
                    onClick={() => {
                        ipcRenderer.send("window-close");
                    }}
                >
                    <IconFont type="icon-guanbi" />
                </div>
            </div>
            <img className="logo" src={require('../assets/images/logo.png')} alt="logo" />
            <span>时间管理大师</span>
            <input placeholder="用户名" />
            <input placeholder="密码" />
            <div className="buttonContainer">
                <button
                    onClick={() => {
                        ipcRenderer.send("login");
                    }}>登录</button>
                <button>忘记密码</button>
            </div>
        </div>
    );
}

export default Login;
