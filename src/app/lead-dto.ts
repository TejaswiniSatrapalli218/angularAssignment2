export class LeadDTO {

    firstName:string;
	lastName:string;
    phoneNumber :string;
	email:string;
	dob:number;
	pincode:number;
	gender :string;
	smoking:string;
	drinking:string;
	address:string;
	dependant:string;
	annualIncome:number;
	govRebate:string;
	taxRebate:string;
	idProof:string;
	financialProof:string;
	// quotationRef:string;
	// premium:string;
	// product:string;
	// // sum:number;
	// leadStage:string;
	// contacted:string;


	constructor(
	firstName:string, 
	lastName:string,
	phoneNumber :string,
	email:string,
	dob:number,
	pincode:number,
	gender:string,
	smoking:string,
	drinking:string,
	address:string,
	dependant:string,
	annualIncome:number,
	govRebate:string,
	taxRebate:string,
	idProof:string,
	financialProof:string,
	// quotationRef:string,
	// premium:string,
	// product:string,
	// sum:number,
	// leadStage:string,
	// contacted:string
	){

		this.firstName=firstName;
		this.lastName=lastName;
		this.phoneNumber=phoneNumber;
		this.email=email;
		this.dob=dob;
		this.pincode=pincode;
		this.gender=gender;
		this.smoking=smoking;
		this.drinking=drinking;
		this.address=address;
		this.dependant=dependant;
		this.annualIncome=annualIncome;
		this.govRebate=govRebate;
		this.taxRebate=taxRebate;
		this.idProof=idProof;
		this.financialProof=financialProof;
		// this.premium=premium;
		// this.product=product;
		// // this.sum=sum;
		// this.leadStage=leadStage;
		// this.contacted=contacted;

		}

}
