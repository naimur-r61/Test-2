import React from 'react';

const TableRow = ({ d }) => {
   const { notebook_name, updated_at, updated_by, created_at, last_run, created_by, no_of_runs, notebook_id, status } = d;
   // console.log(d);
   return (
      <tr>
         <td>{notebook_name ? notebook_name : "-"}</td>
         <td>{updated_at ? updated_at : "-"}</td>
         <td>{updated_by ? updated_by : "-"}</td>
         <td>{created_at ? created_at : "-"}</td>
         <td>{last_run ? last_run : "-"}</td>
         <td>{created_by ? created_by : "-"}</td>
         <td>{no_of_runs ? no_of_runs : "-"}</td>
         <td>{notebook_id ? notebook_id : "-"}</td>
         <td>{status ? status : "-"}</td>
      </tr>

   );
};

export default TableRow;