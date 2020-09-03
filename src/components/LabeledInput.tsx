import React from "react";

type LabeledInputProps = {
  label: string;
  value: string | number;
};

const LabeledInput = ({ label, value }: LabeledInputProps) => (
  <div className="form-group">
    <label className="form-label">{label}</label>

    <input className="form-control" value={value} readOnly />
  </div>
);

export default LabeledInput;
