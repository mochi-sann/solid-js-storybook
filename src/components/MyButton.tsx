import { Component } from "solid-js";
export type MyButtonProps = {
  name: string;
};
const MyButton: Component<MyButtonProps> = (props) => {
  return (
    <button
      style={{
        "background-color": "#0000FF",
        color: "#FFFFFF",
      }}
    >
      ボタン : {props.name}
    </button>
  );
};
export default MyButton;
