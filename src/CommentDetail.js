import React from 'react';


const CommentDetail = props =>{
    console.log(props);
    return (
        <div className="ui container comments">
        <div className="comment">
        <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
        </a>
        <div className="content">
        <a href="/" className="author">
        {props.author}
        </a>
        <div className="metadata">
        <span className="data">{props.timeAgo}</span>
        </div>
        <div className="text">{props.content}</div>
        </div>
        </div>

        </div>

    );
};

export default CommentDetail;

