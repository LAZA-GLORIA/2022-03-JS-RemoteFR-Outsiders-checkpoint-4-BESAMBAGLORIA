import React from 'react';
import "./assets/Chip.css";
import "../../assets/common.css";

export default function Chip({ label }) {
  return (
    <div><p className='chip'>{label}</p></div>
  )
}
