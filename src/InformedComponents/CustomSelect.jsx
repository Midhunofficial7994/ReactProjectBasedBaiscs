import { Relevant, useField, useFormState, useInformedApi } from "informed";
import states from "../State";
import ReactSelect from "react-select";

function parseData(states) {
  const stateDistrictMap = {};
  states.states.forEach(({ state, districts }) => {
    stateDistrictMap[state] = districts;
  });
  return stateDistrictMap;
}

const stateDistrictMap = parseData(states);

function DistrictSelect({ data }) {
  const { values } = useFormState();
  const { fieldState, fieldApi, render, ref } = useField({
    field: "district",
    validate: (value) => (!value ? "Please select a district" : undefined),
  });

  const { value, error, showError } = fieldState;
  const { setValue, setTouched } = fieldApi;

  const selectedState = values?.state;
  const districts = data[selectedState] || [];

  const districtOptions = districts.map((district) => ({
    label: district,
    value: district,
  }));

  const handleChange = (selectedOption) => {
    setValue(selectedOption ? selectedOption.value : "");
  };

  return render(
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor="district">District</label>
      <ReactSelect
        id="district"
        ref={ref}
        value={value ? { label: value, value } : null}
        onChange={handleChange}
        onBlur={() => setTouched(true)}
        options={districtOptions}
        isDisabled={!selectedState}
        placeholder="Select District"
        className="react-select"
      />
      {showError && error && (
        <small style={{ color: "red", fontSize: "0.8rem" }}>{error}</small>
      )}
    </div>
  );
}

const CustomSelect = ({ ...props }) => {
  const { fieldState, fieldApi, render, ref, userProps } = useField(props);
  const { label, id, validate, ...rest } = userProps;
  const { value, error, showError } = fieldState;
  const formApi = useInformedApi();
  const { setValue, setTouched } = fieldApi;
  const { values } = useFormState();

  const handleChange = (selectedOption) => {
    setValue(selectedOption ? selectedOption.value : "");
  };

  return render(
    <>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor={id}>{label}</label>
        <ReactSelect
          {...rest}
          id={id}
          ref={ref}
          value={value ? { label: value, value } : null}
          onChange={handleChange}
          onBlur={() => setTouched(true)}
          options={Object.keys(stateDistrictMap).map((state) => ({
            label: state,
            value: state,
          }))}
          placeholder="Select a state"
          className="react-select"
        />
        {showError && error && (
          <small style={{ color: "red", fontSize: "0.8rem" }}>{error}</small>
        )}
      </div>

      <Relevant when={({ formState }) => !!formState.values.state}>
        <DistrictSelect data={stateDistrictMap} />
      </Relevant>
    </>
  );
};

export default CustomSelect;
