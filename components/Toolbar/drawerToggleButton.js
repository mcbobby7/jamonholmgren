import React from 'react';

const drawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
        <style jsx>{`
        .toggle-button {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 24px;
            width: 30px;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            box-sizing: border-box;
          }
          
          .toggle-button:focus {
            outline: none;
          }
          
          .toggle-button__line {
            width: 30px;
            height: 2px;
            background: #1890FF;
          }
      `}</style>
    </button>
);

export default drawerToggleButton;
