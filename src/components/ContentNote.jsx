import React from "react";
import SearchNote from "./SearchNote";
import BoxNote from "./BoxNote";

const ContentNote = ({ data, search, onSearchNote, option, switchOption, onDelete }) => {
  const dataCatatan = data.filter((data) => data.archived === false);
  const dataArchived = data.filter((data) => data.archived === true);

  return (
    <>
      <SearchNote search={search} onSearchNote={onSearchNote} />
      <div className="show-note">
        <div className="button-option">
          <div
            className={`catatan ${
              option === "catatan" ? "bg-active" : "bg-nonactive"
            }`}
            onClick={() => switchOption("catatan")}
          >
            Catatan
          </div>
          <div
            className={`arsip ${
              option === "arsip" ? "bg-active" : "bg-nonactive"
            }`}
            onClick={() => switchOption("arsip")}
          >
            Arsip
          </div>
        </div>
        <div className="notes bg-active">
          {option === "catatan" && (
            <>
              {!!dataCatatan && dataCatatan?.length !== 0 ? (
                dataCatatan
                  .sort((x, y) =>
                    new Date(x.createdAt) < new Date(y.createdAt) ? 1 : -1
                  )
                  .map((item, index) => (
                    <BoxNote key={index} note={item} onDelete={onDelete} option={option} />
                  ))
              ) : (
                <p id="note-empty">Tidak ada catatan</p>
              )}
            </>
          )}
          {option === "arsip" && (
            <>
              {!!dataArchived && dataArchived?.length !== 0 ? (
                dataArchived
                  .sort((x, y) =>
                    new Date(x.createdAt) < new Date(y.createdAt) ? 1 : -1
                  )
                  .map((item, index) => (
                    <BoxNote key={index} note={item} onDelete={onDelete} option={option}/>
                  ))
              ) : (
                <p id="note-empty">Tidak ada arsip tersimpan</p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ContentNote;
