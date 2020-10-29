import React, { useState, useRef } from 'react';

interface Props {
  onSearch: (newSearchTerm: string) => void;
}

type SubmitEvent = React.FormEvent<HTMLFormElement>;

export default function SearchImageForm({ onSearch = f => f }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchTerm, setSearchTerm] = useState('');

  const clearForm = () => setSearchTerm('');

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
    clearForm();
    inputRef.current?.focus();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm w-11/12 mx-auto flex items-center mb-4 flex-col sm:flex-row"
    >
      <input
        className="border rounded focus:outline-none p-2 sm:mr-2 w-full flex-3"
        ref={inputRef}
        placeholder="Type search term..."
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        autoFocus
      />

      <button className="bg-purple-500 text-white px-3 py-2 rounded sm:inline cursor-pointer focus:outline-none w-full flex-1 mt-2 sm:mt-0">
        Search
      </button>
    </form>
  );
}
