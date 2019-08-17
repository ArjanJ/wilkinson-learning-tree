import React, { useEffect, useRef, useState } from "react";

export const Toggle = ({ children }) => {
  const node = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleDocClick = ({ target }) => {
    if (node.current.contains(target)) {
      // Inside Toggle click.
      return null;
    }

    // Outside Toggle click.
    setIsOpen(false);
  };

  useEffect(() => {
    const root = document.getElementById("___gatsby");

    if (isOpen) {
      root.addEventListener("click", handleDocClick);
    }

    return () => {
      root.removeEventListener("click", handleDocClick);
    };
  }, [isOpen]);

  const handleToggleClick = () => setIsOpen(!isOpen);

  return (
    <div ref={node}>{children({ isOpen, toggle: handleToggleClick })}</div>
  );
};
