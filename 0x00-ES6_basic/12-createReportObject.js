export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      let count = 0;
      for (const key in employeesList) {
        if (employeesList[key]) {
          count += 1;
        }
      }
      return (count);
    },
  };
}
