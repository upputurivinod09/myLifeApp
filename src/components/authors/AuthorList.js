import React, {PropTypes} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

const AuthorList = ({authors}) => {
  return (
    <Table>
      <TableHeader displaySelectAll = {false} enableSelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>FirstName</TableHeaderColumn>
        <TableHeaderColumn>LastName</TableHeaderColumn>
      </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {authors.map(author =>
          <TableRow key={author.firstName}>
            <TableRowColumn>{author.firstName}</TableRowColumn>
            <TableRowColumn>{author.lastName}</TableRowColumn>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired
};

export default AuthorList;

