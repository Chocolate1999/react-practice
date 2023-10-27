import ColorPicker from "./color-picker";
import ExpensiveTree from "./expensive-tree";

export const LiftContentUp = () => {
  return (
    <ColorPicker>
      <p>LiftContentUp</p>
      <p>Hello, world!</p>
      <ExpensiveTree />
    </ColorPicker>
  );
};
