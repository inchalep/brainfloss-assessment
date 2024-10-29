import React from "react";
import { FaSearch } from "react-icons/fa";

interface inputProps {
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: string;
  name: string;
  value: string | number | "";
  searchInput?: boolean;
}

const Input = (props: inputProps) => {
  return (
    <div className='w-full'>
      {props.label ? <label>{props.label}</label> : null}
      <div className='relative'>
        <input
          {...props}
          className='w-full py-1 px-3 text-sm outline-none'
          autoComplete='false'
        />
        {props.searchInput ? (
          <span className='absolute right-2 top-1.5'>
            <FaSearch />
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
