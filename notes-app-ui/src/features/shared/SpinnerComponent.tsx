import { useEffect, useState } from 'react';
import { createPortal, unmountComponentAtNode } from 'react-dom';
import './SpinnerComponent.css';

export function SpinnerComponent() {
  const [el] = useState(document.createElement('div'));
  useEffect(() => {
    document.body.append(el);
    return () => {
      unmountComponentAtNode(el);
      el.remove();
    };
  }, []);
  return createPortal(
    <div className="spinner">
      <div className="spinner-background"></div>
      <div className="loader">Loading...</div>
    </div>,
    el,
  );
}
