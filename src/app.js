import React, { Component } from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DraggableTableComponent from "./components/DraggableTableComponent";
import DroppableTableComponent from "./components/DroppableTableComponent";

const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    primary: `item ${k}`,
    secondary: k % 2 === 0 ? `Whatever for ${k}` : undefined,
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default class TableWithDragAndDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(10),
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    console.log(
      "@debug ",
      `drag ${result.source.index} to ${result.destination.index}`
    );
    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
    });
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nr</TableCell>
              <TableCell>Label</TableCell>
              <TableCell align="right">Text</TableCell>
            </TableRow>
          </TableHead>
          <TableBody component={DroppableTableComponent(this.onDragEnd)}>
            {this.state.items.map((item, index) => (
              <TableRow
                component={DraggableTableComponent(item.id, index)}
                key={item.id}
              >
                <TableCell scope="row">{index + 1}</TableCell>
                <TableCell>{item.primary}</TableCell>
                <TableCell align="right">{item.secondary}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
