import React from "react";

type LabeledInputProps = {
  label: string;
  value: string | number;
  rows: number;
};

const LabeledTextarea = ({ label, value, rows }: LabeledInputProps) => (
  <div className="form-group">
    <label className="form-label">{label}</label>

    <textarea className="form-control" rows={rows} value={value} readOnly />
  </div>
);

export default LabeledTextarea;
