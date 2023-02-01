import React, { Component } from 'react'
import "./css/List.css"
import ListItemRender from './ListItemRender';
export default class List extends Component {
  //https://codepen.io/gopinav/pen/gQpepq

  constructor(props) {
    super(props);
    let ListCounter = 1;
    let date = new Date();
    this.state = {
      ListCounter: ListCounter,
      MyList: [
        {
          ItemId: 0,
          CreatedAt: date,
        },
      ],
    };
  }
  render() {
    return (
      <>
        {/* <ListItemRender/> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <button>Add New to Start</button>
          <button>Add New to End</button>
          <button>Sort By Earliest</button>
          <button>Sort By Latest</button>
        </div>

        <div>
          <table>
            <tfoot>
              <tr>
                <th>Index</th>
                <th>ID</th>
                <th>Item</th>
                <th>Created</th>
              </tr>
              {this.state.MyList.map((item, index) => {
                <ListItemRender />;
              })}
            </tfoot>
          </table>
        </div>
      </>
    );
  }
}

