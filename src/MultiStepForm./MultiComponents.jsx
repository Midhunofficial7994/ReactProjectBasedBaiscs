import {
  useField,
  useForm,
  ArrayField,
  useArrayFieldApi,
  useArrayFieldItemApi,
  FormFields,
} from "informed";
export const Input = (props) => {
  const { render, informed, userProps, fieldState, ref } = useField({
    type: "text",
    ...props,
  });
  const { label, id, ...rest } = userProps;
  const { showError } = fieldState;
  const style = showError ? { border: "solid 1px red" } : null;
  return render(
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...informed} {...rest} style={style} />
      {showError && <small style={{ color: "red" }}>{fieldState.error}</small>}
    </>
  );
};

export const Number = (props) => {
  const { render, informed, userProps, fieldState, ref } = useField({
    type: "number",
    ...props,
  });
  const { label, id, ...rest } = userProps;
  const { showError } = fieldState;
  const style = showError ? { border: "solid 1px red" } : null;
  return render(
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...informed} {...rest} style={style} />
      {showError && <small style={{ color: "red" }}>{fieldState.error}</small>}
    </>
  );
};

export const Checkbox = (props) => {
  const { render, informed, userProps, ref } = useField({
    type: "checkbox",
    ...props,
  });
  const { label, id, ...rest } = userProps;
  return render(
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...informed} {...rest} />
    </>
  );
};

export const Select = (props) => {
  const { render, informed, userProps, ref } = useField({
    type: "select",
    ...props,
  });
  const { label, id, children, options, ...rest } = userProps;
  return render(
    <>
      <label htmlFor={id}>{label}</label>
      <select id={id} ref={ref} {...informed} {...rest}>
        {options
          ? options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))
          : children}
      </select>
    </>
  );
};

export const Option = ({ value, children, ...rest }) => {
  return (
    <option value={value} {...rest}>
      {children}
    </option>
  );
};

export const Hidden = (props) => {
  const { informed, render, userProps, ref } = useField({
    type: "text",
    ...props,
  });

  return render(<input {...informed} {...userProps} ref={ref} type="hidden" />);
};

export const AddButton = () => {
  const { add } = useArrayFieldApi();
  return (
    <button onClick={add} type="button">
      Add
    </button>
  );
};

export const RemoveButton = () => {
  const { remove } = useArrayFieldItemApi();
  return <button onClick={remove}>Remove</button>;
};

export const MyArrayField = ({ name, items, ...props }) => {
  return (
    <ArrayField name={name} {...props}>
      <AddButton />
      <ArrayField.Items>
        {() => (
          <>
            <FormFields schema={items} />
            <RemoveButton />
          </>
        )}
      </ArrayField.Items>
    </ArrayField>
  );
};

export const Button = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

export const ButtonGroup = ({ orientation, align, children }) => {
  const flexDirection = orientation == "vertical" ? "column" : "row";
  return (
    <div style={{ display: "flex", flexDirection, alignItems: align }}>
      {children}
    </div>
  );
};

const adapter = {
  button: Button,
  select: Select,
  input: Input,
  string: Input,
  number: Number,
  checkbox: Checkbox,
  boolean: Checkbox,
  add: AddButton,
  remove: RemoveButton,
  array: MyArrayField,
  withOptions: {
    string: Select,
    number: Select,
  },
};

export const Form = ({ children, ...rest }) => {
  const { formController, render, userProps } = useForm({ ...rest, adapter });

  return render(
    <form
      noValidate
      {...userProps}
      onReset={formController.reset}
      onSubmit={formController.submitForm}
    >
      {children}
    </form>
  );
};

export const Car = () => {
  return <div className="car" />;
};
