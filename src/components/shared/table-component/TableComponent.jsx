import React, { useState } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Table } from "@mui/material";
import "./TableComponent.css";
import { height } from "@mui/system";

const ImportedImg = (img) => {
  return (
    <img
      style={{ width: "26px" }}
      src={require("../../../assets/images/Rectangle7.png")}
    ></img>
  );
};

const TableComponent = () => {
  const [columnDefs, setColumndDefs] = useState([
    {
      field: "Number",
      headerName: "No.",
      filter: true,
    },
    { field: "Img", headerName: "#img", cellRenderer: ImportedImg },
    { field: "Fullname" },
    { field: "Email" },
    {
      field: "Status",
      cellStyle: function (params) {
        if (params.value == "Active") {
          return { color: "#00C271" };
        } else {
          return { color: "#FB151A" };
        }
      },
    },
    { field: "TakeAction" },
  ]);
  const rowData = [
    {
      Number: "1",
      Img: "1",
      Fullname: "Fullname",
      Email: "Email",
      Status: "Active",
      TakeAction: "Take Action",
    },
    {
      Number: "2",
      Img: "1",
      Fullname: "Fullname",
      Email: "Email",
      Status: "Inactive",
      TakeAction: "Take Action",
    },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 500 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />{" "}
    </div>
  );
};
export default TableComponent;
