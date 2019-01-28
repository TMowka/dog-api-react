import React, { PureComponent } from 'react';
import { childrenPropTypes } from 'util/propTypes';

import TableBody from './TableBody/TableBody';
import TableHead from './TableHead/TableHead';
import TableRow from './TableRow/TableRow';
import TableData from './TableData/TableData';

const propTypes = {
  children: childrenPropTypes
};

const defaultProps = {
  children: null
};

class Table extends PureComponent {
  static Head({ items, className }) {
    return <TableHead items={items} className={className} />;
  }

  static Body({ children }) {
    return <TableBody>{children}</TableBody>;
  }

  static Row({ children, className }) {
    return <TableRow className={className}>{children}</TableRow>;
  }

  static Data({ children, className }) {
    return <TableData className={className}>{children}</TableData>;
  }

  render() {
    const { children } = this.props;

    return (
      <table className="table">
        {children}
      </table>
    );
  }
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
