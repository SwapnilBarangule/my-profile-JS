class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept= emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}

const emp_anil = new Employee(22,"Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33,"Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55,"Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66,"Sonali", "Finance", 45000, "Infosys");
const emp_monika = new Employee(77,"Monika", "IT", 40000, "Wipro");
const emp_vinay = new Employee(88,"Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99,"Mahesh", "HR", 85000, "Infosys");

const emp_array =[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinay,emp_mahi]

const res = emp_array.map((emp)=>{
       return emp.emp_name;
})
console.log(`list of all the employee names:`,res);


const dept = emp_array.map(emp_dep=> emp_dep.emp_dept)

console.log(`List of departments:`,dept);

const dept1=emp_array.map(emp_dep=> emp_dep.emp_id)
console.log(`List of employee id's:`,dept1);