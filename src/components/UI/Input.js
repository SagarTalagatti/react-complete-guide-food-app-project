import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
      {/* this adds all properties of props.input as key=value pairs for the input tag */}
    </div>
  );
};

export default Input;
