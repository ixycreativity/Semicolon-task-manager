import React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import PropTypes from "prop-types";
import { AntTab } from "./AntTab.styles";
import { AntTabs } from "./AntTabs.styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasksAction } from "../../store/task/task.slice";
import TaskCard from "../shared/task-card/TaskCard";

import { all } from "q";

const getStatusList = (data) => {
  const allStatuses = [
    { status: "All Tasks", count: data.length, isFiltering: false },
  ];

  for (let i = 0; i < data.length; i++) {
    let statusFound = allStatuses.find(
      (item) => item.status === data[i].status
    );
    if (statusFound !== undefined) {
      statusFound.count++;
    } else {
      allStatuses.push({ status: data[i].status, count: 1, isFiltering: true });
    }
  }
  return allStatuses;
};

const STATIC_TAB_LIST = [
  "Tab 1",
  "Tab 2",
  "Tab 3",
  "Tab 4",
  "Tab 5",
  "Tab 6",
  "Tab 7",
  "Tab 8",
];

export default function CustomTabs({ type, onTabChange }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchTasksAction());
  }, [dispatch]);

  const tasks = useSelector((state) => state.entities.tasks.data);

  const allStatuses = getStatusList(tasks);

  return type ? (
    <Box>
      <AntTabs value={value} onChange={handleChange}>
        {allStatuses.map((item) => {
          return (
            <AntTab
              key={item.status}
              label={item.status}
              icon={<Badge badgeContent={item.count} color="primary" />}
              iconPosition="end"
              onClick={() => onTabChange(item.status, item.isFiltering)}
            />
          );
        })}
      </AntTabs>
    </Box>
  ) : (
    <Box>
      <AntTabs variant="fullWidth" value={value} onChange={handleChange}>
        {STATIC_TAB_LIST.map((item) => {
          return <AntTab key={item} label={item} />;
        })}
      </AntTabs>
    </Box>
  );
}

CustomTabs.propTypes = {
  type: PropTypes.bool.isRequired,
  onTabChange: PropTypes.func.isRequired,
};
