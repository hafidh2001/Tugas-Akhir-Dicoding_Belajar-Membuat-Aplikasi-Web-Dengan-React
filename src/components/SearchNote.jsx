import React from "react";

const SearchNote = ({ search, onSearchNote }) => {
  return (
    <>
      <form autoComplete="off" id="search-note">
        <input
          type="text"
          name="search"
          id="search"
          maxLength={60}
          placeholder="Cari catatan ..."
          value={search}
          onChange={(e) => onSearchNote(e)}
        />
      </form>
    </>
  );
};

export default SearchNote;
