import React from 'react';
import TableHeader from './table-header';
import TableMarkDown from './table-markdown';
import TableBody from './table-body';

function table() {
  return (
    <section className="table-wrapper">
      <div className="table">
        <TableHeader />
        <TableMarkDown />
        <TableBody />
      </div>
    </section>
  );
}

export default table;
