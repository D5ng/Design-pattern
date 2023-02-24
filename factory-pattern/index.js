import { employees  } from "./Employee/index.js";

const printEmployee = () =>
  employees.forEach((emp) =>
    console.log(`${emp.name}직원은 ${emp.type}입니다.`)
  );

printEmployee();
