"use strict";
// Discrminated Unions Types
Object.defineProperty(exports, "__esModule", { value: true });
function processPayment(payment) {
    if (payment.status === "initiated")
        console.log("Initiated");
    if (payment.status === "processing")
        console.log("Attempts = ", payment.attempts++); // Since everything there ts will throw error
    if (payment.status === "failed")
        console.log("Reason = ", payment.reason?.toUpperCase()); // Since everything there ts will throw error
    if (payment.status === "success")
        console.log("Transcation Id ->  ", payment.txnId?.toFixed()); // Since everything there ts will throw error
}
// When only using the status:initiated it gives error so the naive way is to optional all the rest of the properties
// Here if I  send status processing then ts will not show any error but the code will throw error during runtime 
// Like we are not using the type system 
// So to handle this kind of error we use discriminated unions 
processPayment({ status: "initiated" });
processPayment({ status: "processing", attempts: 100 });
processPayment({ status: "failed", reason: 'Something went wrong' });
processPayment({ status: "success", txnId: 1 });
//# sourceMappingURL=index.js.map