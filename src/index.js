import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail author="sam" timeAgo="today at 445pm" textWrit="hahahahha" avatar={faker.image.avatar()} />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="jean" timeAgo="today at 222pm" textWrit="yeyeyeyeye" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="aha" timeAgo="today at 123pm" textWrit="ddddd" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="aaaaaaa" timeAgo="today at 666pm"textWrit="12312312" avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);