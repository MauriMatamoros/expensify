import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponet) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponet {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponet) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? <WrappedComponet {...props}/> : <p>Please log in to view the info</p> }
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);
const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details" />, document.getElementById('app'));
// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));