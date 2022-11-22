import React from 'react';

function click() {
  alert("I was clicked!");
  console.log('click');
};

function Button() {
  return (
    <button onClick={click}>CLICK</button>
  );
}

export default Button;