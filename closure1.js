function fun1() {
    let a = 5;

    function fun2() {
        var student = {
            firstName: "Swapnil",
            lastNmae: "Barangule",
        
            getFullName() { return `${this.firstName}, ${lastname}`}

            }
            function displayName() { log("Fulll Name ", student.getFullName() ) }
            return displayName();
        }
        console.log(a);
            
    }
    return fun2;
    
   console.log(this.firstName);
   

fun1.fun2.student();
const fun3 = fun1()
fun3();