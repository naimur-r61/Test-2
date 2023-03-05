import React from 'react';

const TableRow = ({ d }) => {
   const { notebook_name, updated_at, updated_by, created_at, last_run, created_by, no_of_runs, notebook_id, status } = d;

   const timeFormate = (time) => {
      const isoDateString = time;
      const date = new Date(isoDateString);

      const months = [
         "Jan", "Feb", "Mar", "Apr", "May", "Jun",
         "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];


      const month = months[date.getMonth()];
      const day = date.getDate();
      const year = date.getFullYear();
      const hours = date.getHours() % 12 || 12; // Convert to 12-hour format
      const minutes = date.getMinutes();
      const ampm = date.getHours() < 12 ? "AM" : "PM";

      const formattedDateString = `${month} ${day} ${year} ${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
      return formattedDateString;
   }

   const updated_at_formatted = timeFormate(updated_at)
   const created_at_formatted = timeFormate(created_at)
   const last_run_formatted = timeFormate(last_run)

   return (
      <tr>
         <td>{notebook_name ? notebook_name : "-"}</td>
         <td>{updated_at ? updated_at_formatted : "-"}</td>
         <td>{updated_by ? updated_by : "-"}</td>
         <td>{created_at ? created_at_formatted : "-"}</td>
         <td>{last_run ? last_run_formatted : "-"}</td>
         <td>{created_by ? created_by : "-"}</td>
         <td>{no_of_runs ? no_of_runs : "-"}</td>
         <td>{notebook_id ? notebook_id : "-"}</td>
         <td>{status ? status : "-"}</td>
      </tr>

   );
};

export default TableRow;