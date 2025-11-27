// Discrminated Unions Types
// Use discriminated union instead of optional fields

type Payment = {
  status: "initiated" | "processing" | "success" | "failed";
  attempts?: number;
  reason?: string;
  txnId?: number;
};

// Better way to write the above type & we can also do it with interfaces
type PaymentUnion =
  | { status: "initiated" }
  | { status: "processing"; attempts: number }
  | { status: "failed"; reason: string }
  | { status: "success"; txnId: number };

function processPayment(payment: PaymentUnion) {
  if (payment.status === "initiated") console.log("Initiated");
  if (payment.status === "processing")
    console.log("Attempts = ", payment.attempts!++); // Since everything there ts will throw error
  if (payment.status === "failed")
    console.log("Reason = ", payment.reason?.toUpperCase()); // Since everything there ts will throw error
  if (payment.status === "success")
    console.log("Transcation Id =  ", payment.txnId?.toFixed()); // Since everything there ts will throw error
}

// When only using the status:initiated it gives error so the naive way is to optional all the rest of the properties
// Here if I  send status processing then ts will not show any error but the code will throw error during runtime
// Like we are not using the type system
// So to handle this kind of error we use discriminated unions
processPayment({ status: "initiated" });
processPayment({ status: "processing", attempts: 100 });
processPayment({ status: "failed", reason: "Something went wrong" });
processPayment({ status: "success", txnId: 1 });

// We can also  us discriminated union in this way also

type Car = {
  type: "car";
  doors: number;
  bootSize: number;
};

type Bike = {
  type: "bike";
};

type Vehicle = {
  make: string;
  model: string;
  fuel: "petrol" | "disel";
} & (Car | Bike);

const myBike: Vehicle = {
  type: "bike",
  fuel: "disel",
  model: "cbr",
  make: "Honda",
};
