import React from 'react';

interface IProps {
  children: React.ReactChildren;
}

function Form(props: IProps) {
  return <form>{props.children}</form>;
}

export default Form;
