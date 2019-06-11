import React from 'react';
import './css/Content.css';
import ContentItem from './sub/ContentItem';

const Content = ({ title }) => {
    return (
        <div className="Content">
            <h1 className="title">{title}</h1>
            <div>
                서브 탑
            </div>
            <div className="ContentBar">
                <div>
                    번호
                </div>
                <div>
                    제목
                </div>
                <div>
                    글쓴이
                </div>
                <div>
                    추천 수
                </div>
                <div>
                    날짜
                </div>
            </div>
            <div className="ContentItems">
                <ContentItem />
            </div>
            <div className="ContentMove">
                페이지 이동
            </div>
        </div>
    );
};

export default Content;