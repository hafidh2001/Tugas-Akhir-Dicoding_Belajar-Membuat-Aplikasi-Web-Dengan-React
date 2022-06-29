import React from "react";

const AddNote = ({ dataBaru, sisaKarakterTitle, onTitleChange, onBodyChange, onSubmitData }) => {
  return (
    <>
      <form autoComplete="off" id="add-note" className="cf" onSubmit={onSubmitData}>
        <div className="judul">
          <p>Sisa Karakter : {sisaKarakterTitle}</p>
          <input
            type="text"
            name="judul"
            id="judul"
            placeholder="Masukkan judul ..."
            value={dataBaru.title}
            onChange={(e) => onTitleChange(e)}
            required
          />
        </div>
        <div className="catatan">
          <textarea
            name="catatan"
            id="catatan"
            rows="10"
            placeholder="Tuliskan catatanmu disini ..."
            value={dataBaru.body}
            onChange={(e) => onBodyChange(e)}
            required
          />
        </div>
        <button className="bg-primary">Tambah</button>
      </form>
    </>
  );
};

export default AddNote;
