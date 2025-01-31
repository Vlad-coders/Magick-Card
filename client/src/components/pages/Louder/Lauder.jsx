import React from 'react';
import { tailChase } from 'ldrs';
import './Lauder.css';

tailChase.register();

export default function Loader({ isLoading, children }) {
  return isLoading ? (
    <div className="loader-container ">
      <l-tail-chase size="60" speed="1.75" color="purple"></l-tail-chase>{' '}
    </div>
  ) : (
    children
  );
}
