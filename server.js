const mongoose = require('mongoose');
const Doctor = require('./models/doctor');
const Patient = require('./models/patient');
mongoose.connect('mongodb://localhost:27017/fit2095db', function (err) {
    if (err) {
        console.log('Error in Mongoose connection');
        throw err;
    }
    console.log('Successfully connected');
    let doctor01 = new Doctor({
        _id: new mongoose.Types.ObjectId(),
        name: {
            firstName: 'John',
            lastName: 'Smith'
        },
        dob: 25/03/1992,
        address: {
            state: 'VIC',
            suburb: 'Clayton',
            street: 'Monash Lane',
            unit: 6
        },
        numPatients: 54
    });
    doctor01.save(function (err) {
        if (err) throw err;
        console.log('Doctor successfully Added to DB');
        var patient01 = new Patient({
            _id: new mongoose.Types.ObjectId(),
            fullName: 'Sarah Jones',
            doctor: doctor01._id,
            age: '24',
            visit: 25/03/2021,
            description: "Cold-like symptoms"
        });
    });
        patient01.save(function (err) {
            if (err) throw err;
            console.log('Patient1 successfully Added to DB');
        });
        var patient02 = new Patient({
            _id: new mongoose.Types.ObjectId(),
            ffullName: 'Samara DCruz',
            doctor: doctor01._id,
            age: '19',
            visit: 31/08/2021,
            description: "Patient recieving vaccination"
        });
        });
        patient02.save(function (err) {
            if (err) throw err;
            console.log('Patient2 successfully add to DB');
        });

//Insert new doctor
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });
  
  app.post("/addnewdoctor", function (req, res) {
    let doctorDetails = req.body;
    db.collection("doctor").insertOne({
        name: doctorDetails.dname,
        firstName: doctorDetails.dfirstName,
        lastName: doctorDetails.dlastName,
        dob: doctorDetails.ddob,
        address: doctorDetails.daddress,
        state: doctorDetails.dstate,
        suburb: doctorDetails.dsuburb,
        street: doctorDetails.dstreet,
        unit: doctorDetails.dunit,
        numPatients: doctorDetails.dnumPatients,
    });
    res.redirect("/listdoctors"); // redirect
  });
  //List all doctors
  
  app.get("/listdoctors", function (req, res) {
    db.collection("doctor")
      .find({})
      .toArray(function (err, data) {
        res.render("listdoctors", { doctorDb: data });
      });
  });
  //Update doctor:
  
  app.get("/updatedoctor", function (req, res) {
    res.sendFile(__dirname + "/views/updatedoctor.html");
  });
  
  app.post("/updatedoctordata", function (req, res) {
    let doctorDetails = req.body;
    let filter = { _id: doctorDetails.id };
    let theUpdate = {
      $set: {
        numPatients: doctorDetails.dnumPatients,
      },
    };
    db.collection("doctor").updateOne(filter, theUpdate);
    res.redirect("/listdoctors"); // redirect
  });

//Insert new patient
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });
  
  app.post("/addnewpatient", function (req, res) {
    let doctorDetails = req.body;
    db.collection("patient").insertOne({
        fullName: patientDetails.pfullName,
        doctor: doctorDetails.id,
        age: patientDetails.page,
        visit: patientDetails.pvisit,
        description: patientDetails.pdescription,
    });
    res.redirect("/listpatients"); // redirect
  });
  //List all patients
  
  app.get("/listpatients", function (req, res) {
    db.collection("patient")
      .find({})
      .toArray(function (err, data) {
        res.render("listpatients", { patientDb: data });
      });
  });
  //Delete patient:
  
  app.get("/deletepatient", function (req, res) {
    res.sendFile(__dirname + "/views/deletepatient.html");
  });
  
  app.post("/deletepatientdata", function (req, res) {
    let patientDetails = req.body;
    let filter = { fullName: patientDetails.pfullName };
    db.collection("patient").deleteOne(filter);
    res.redirect("/listpatients"); // redirect
  });
  