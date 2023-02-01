import React, { Component } from 'react'

export default class ListItemRender extends Component {
	constructor(props) {
	  console.log(props);
    super(props);
  }
  render() {
    //   const { index, id }=this.props.item
    return (
      <>
        <table>
          <tfoot>
            <tr>
              <td>
                <label htmlFor="">{}</label>
              </td>

              <td>
                <label htmlFor="">{}</label>
              </td>

              <td>
                <input type="text" name="" id="" />
              </td>

              <td>
                <label>{}</label>
              </td>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}
