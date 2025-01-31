import { Multistep, useMultistepApi } from 'informed';
import { Form, Button, ButtonGroup, Input } from './MultiComponents';

const stepStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  label: {
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '16px',
  },
  inputFocus: {
    borderColor: '#4CAF50',
    outline: 'none',
  },
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonDisabled: {
    backgroundColor: '#b0c4de',
    cursor: 'not-allowed',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
  },
  buttonGroupVertical: {
    flexDirection: 'column',
  },
  formContainer: {
    width: '100%',
    maxWidth: '500px',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  debugContainer: {
    marginTop: '20px',
    backgroundColor: '#f8f8f8',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
};

const Info = () => {
  const { next } = useMultistepApi();
  return (
    <Multistep.Step step="info">
      <div style={stepStyles.container}>
        <Input name="first" label="First Name" required />
        <Input name="last" label="Last Name" required />
      </div>
      <Button
        type="button"
        style={stepStyles.button}
        onClick={next}
      >
        Next
      </Button>
    </Multistep.Step>
  );
};

const Favorite = () => {
  const { next, previous } = useMultistepApi();
  return (
    <Multistep.Step step="favorite">
      <div style={stepStyles.container}>
        <Input name="color" label="Favorite Color" required />
        <Input name="food" label="Favorite Food" required />
      </div>
      <ButtonGroup style={stepStyles.buttonGroup}>
        <Button
          type="button"
          style={stepStyles.button}
          onClick={previous}
        >
          Previous
        </Button>
        <Button
          type="button"
          style={stepStyles.button}
          onClick={next}
        >
          Next
        </Button>
      </ButtonGroup>
    </Multistep.Step>
  );
};

const Additional = () => {
  const { previous } = useMultistepApi();
  return (
    <Multistep.Step step="additional">
      <div style={stepStyles.container}>
        <Input name="height" label="Height" required />
        <Input name="weight" label="Weight" required />
      </div>
      <ButtonGroup style={stepStyles.buttonGroup}>
        <Button
          type="button"
          style={stepStyles.button}
          onClick={previous}
        >
          Previous
        </Button>
        <Button
          type="submit"
          style={stepStyles.button}
        >
          Submit
        </Button>
      </ButtonGroup>
    </Multistep.Step>
  );
};

const Example = () => {
  return (
    <Form autocomplete="off" style={stepStyles.formContainer}>
      <Multistep>
        <Info />
        <Favorite />
        <Additional />
      </Multistep>
      <div style={stepStyles.debugContainer}>

      </div>
    </Form>
  );
};

export default Example;
