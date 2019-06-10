import React from 'react';

const Modal = ({ history }) => {
    let back = e => {
        // 이벤트 캡쳐링과 버블링에 있어 현재 이벤트이 이후의 전파를 막습니다.
        e.stopPropagation();
        // 브라우저의 히스토리에서 뒤로 탐색하는데 사용됨.
        history.goBack();
    };

    return (
        <div
            onClick={back}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                background: "rgba(0, 0, 0, 0.15)"
            }}
        >
            <div 
                className="modal"
                style={{
                    position: "absolute",
                    background: "#fff",
                    top: 25,
                    left: "10%",
                    right: "10%",
                    padding: 15,
                    border: "2px solid #444"

                }}
            >
                <h1> modal </h1>
                <button type="button" onClick={back}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;