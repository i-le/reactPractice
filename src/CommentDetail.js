import React from 'react';
import faker from 'faker'

const CommentDetail = a => {
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={a.avatar} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {a.author}
                    </a>
                    <div className="metadata">
                        <span className="data">{a.timeAgo}</span>
                    </div>
                    <div className="text">{a.textWrit}</div>
                </div>
            </div>
    );
};

export default CommentDetail;