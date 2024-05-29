class Patient {
    constructor(firstName, lastName, mrn) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mrn = mrn;
    }
}

function emailBody(donor, organ, sequence, patient, Tcell, Bcell) {
    // donor: String    || XYZ1234
    // organ: String    || Heart
    // sequence: String || 4
    // patient: Patient || Patient object
    // Tcell: boolean   || true = pos / false = neg
    // Bcell: boolean   || true = pos / false = neg

    if (Tcell) {
        TcellResult = "Positive";
    } else {
        TcellResult = "Negative";
    }
    if (Bcell) {
        BcellResult = "Positive";
    } else {
        BcellResult = "Negative";
    }

    const greeting = "Hello all,";
    const info = `Please see attached flow crossmatch results and match run for deceased ${organ} donor ${donor}:`;
    const results = `Seq. #${sequence} - ${patient.lastName}, ${patient.firstName} (${patient.mrn}) is T-cell: ${TcellResult} and B-cell: ${BcellResult}`;
    const outro = "Best,";
    const email = `
        ${greeting}\n\n
        ${info}\n\n
        ${results}\n\n
        ${outro}\n\n
        `;
    return email;
}

const pt = new Patient("Luke", "Skywalker", "849356823");
console.log(emailBody("DarthVader", "Hand", "2", pt, false, false))