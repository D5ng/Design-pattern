import Developer from "./Developer.js";
import Tester from "./Tester.js";
import { DEVELOPER, TESTER } from "./constants.js";

class EmployeeFactory {
  create(name, type) {
    switch (type) {
      case "Developer":
        return new Developer(name);

      case "Tester":
        return new Tester(name);
    }
  }
}

const employeeFactory = new EmployeeFactory();
export const employees = [];

employees.push(employeeFactory.create("dongs", DEVELOPER));
employees.push(employeeFactory.create("DongHyun", DEVELOPER));
employees.push(employeeFactory.create("Admin", TESTER));
employees.push(employeeFactory.create("younga", TESTER));