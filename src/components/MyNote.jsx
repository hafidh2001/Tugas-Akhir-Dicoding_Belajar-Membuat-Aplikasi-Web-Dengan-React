import React from "react";
import AddNote from "./AddNote";
import ContentNote from "./ContentNote";
import { getInitialData } from "../utils/data";

/* 
* Note : 
* Pada initial-state id pada DataBaru, ketika menggunakan fungsi "+new Date()"" atau "new Date().getTime()" tidak menghasilkan unique-id ketika rentang waktu pendek
*   - Hal ini mengakibatkan note memiliki ID yang sama
*   - Hal ini mengakibatkan hapus / arsip berdasarkan ID men-trigger semua ID yang sama (data collapse / weird)
* Solusi : 
*   - value untuk id pada DataBaru, dibuat / diikutsertakan ketika pemberian value pada title / body
*/

class MyNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getInitialData(),
      option: "catatan",
      dataBaru: {
        id: "",
        title: "",
        body: "",
        archived: false,
        createdAt: new Date(),
      },
      search: "",
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmitData = this.onSubmitData.bind(this);
    this.onSearchNote = this.onSearchNote.bind(this);
    this.switchOption = this.switchOption.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.switchArchiveButton = this.switchArchiveButton.bind(this);
  }

  onTitleChange(event) {
    this.setState((prevData) => {
      return {
        dataBaru: {
          ...prevData.dataBaru,
          id: new Date().getTime(),
          title: event.target.value,
        },
      };
    });
  }

  onBodyChange(event) {
    this.setState((prevData) => {
      return {
        dataBaru: {
          ...prevData.dataBaru,
          body: event.target.value,
        },
      };
    });
  }

  onSubmitData(event) {
    event.preventDefault();

    this.setState({
      data: [...this.state.data, this.state.dataBaru],
    });

    this.setState((prevData) => {
      return {
        dataBaru: {
          ...prevData.dataBaru,
          id: "",
          title: "",
          body: "",
        },
      };
    });
  }

  onSearchNote(event) {
    this.setState((prevSearch) => {
      return {
        ...prevSearch,
        search: event.target.value,
      };
    });
  }

  switchOption(optionMenu) {
    this.setState({ option: optionMenu });
  }

  deleteNote(id) {
    const note = this.state.data.filter((data) => data.id !== id);
    this.setState({ data: note });
  }

  switchArchiveButton(id) {
    this.setState((prevData) => {
      return {
        data: prevData.data.map((item) =>
          item.id === id ? { ...item, archived: !item.archived } : item
        ),
      };
    });
  }

  render() {
    return (
      <div className="note-app">
        <div className="container">
          <div className="content-left">
            <h1>MyNotes</h1>
            <AddNote
              dataBaru={this.state.dataBaru}
              onTitleChange={this.onTitleChange}
              onBodyChange={this.onBodyChange}
              onSubmitData={this.onSubmitData}
            />
          </div>
          <div className="content-right">
            <ContentNote
              data={this.state.data}
              search={this.state.search}
              onSearchNote={this.onSearchNote}
              option={this.state.option}
              switchOption={this.switchOption}
              onDelete={this.deleteNote}
              switchArchiveButton={this.switchArchiveButton}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MyNote;
