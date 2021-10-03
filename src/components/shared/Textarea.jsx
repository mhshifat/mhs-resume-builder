import React, { useCallback } from 'react';

function Textarea({ ...rest }, ref) {
  const handleKeyUp = useCallback(({ target }) => {
    target.style.height ='30px';
    target.style.height = target.scrollHeight + 'px';
  }, []);

  return <textarea {...rest} onKeyUp={handleKeyUp} />
}

export default React.forwardRef(Textarea);