import React from 'react';
import { useProjectContext } from '../context/ProjectContext.jsx';

function Invoices() {
  const { projects, clients, timeEntries } = useProjectContext();

  return (
    <div className="invoices">
      <h1>Invoices</h1>
      <div className="invoice-creator">
        <h2>Create New Invoice</h2>
        <p>Select a client and time period to generate an invoice</p>
      </div>
      <div className="invoice-history">
        <h2>Invoice History</h2>
        <p>No invoices created yet.</p>
      </div>
    </div>
  );
}

export default Invoices;