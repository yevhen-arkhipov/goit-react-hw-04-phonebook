import { useState, useEffect } from 'react';

export function useContacts(initialState) {
  const [state, setState] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      return JSON.parse(savedContacts);
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(state));
  }, [initialState, state]);
  return [state, setState];
}
