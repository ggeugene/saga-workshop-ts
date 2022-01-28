import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { movieActions } from "../../constants";

export default function SearchMovie() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = () => dispatch(movieActions.init({ t: value }));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={onSubmit}>Search</button>
    </div>
  );
}
