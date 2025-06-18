window.itemTypeMap = {
    //--------------- A ---------------//
    Wall: "A",
    pile_structure: "A",
    roof_structure: "A",
    roofing_structure: "A",
    garage_structure: "A",
    wash_structure: "A",
    Septic_Tank: "A",
    Ordor_Trap: "A",
    Grese_Trap: "A",
    Water_Tank: "A",
    Water_Pump: "A",
    Pipe_Termites: "A",
    Fiberglass_Insulation: "A",
    meter: "A",
    cb: "A",
    earth_pit: "A",
    retaining: "A",
    //--------------- B ---------------//
    Structural_Defects: "B",
    Non_Structural_Defects: "B",
    rcd1: "B",
    rcd2: "B",
    Security_Home: "B",
    cctv: "B",
    //--------------- C ---------------//
    RoofTile_Ventilator: "C",
    Roof_Ventilation: "C",
    emergency_light: "C",
    door_automatic: "C",
    bell: "C",
    switch_plug: "C",
    air_conditioner: "C",
    water_heater: "C",
    optic_cable: "C",
    lan_cable: "C",
    heat_detector: "C",
    Smoke_Detector: "C",
    Automatic_Garage_Door: "C",
    Green_Glass: "C",
    Air_Quality_Sensor: "C",
    mailbox: "C",
    bin: "C",
    kitchen_furniture: "C",
    countertop: "C",
    Shower_Enclosures: "C",
    gardening: "C",
    gutters: "C",
    pantry: "C",
    upvc: "C",
    //--------------- D ---------------//
    Solar_Rooftop: "D",
    ev_charger: "D",
    smart_home: "D",
    House_Appllication: "D"
};

window.itemScoreMap = {
    Wall: {
        "ก่ออิฐ": 1.1,
        "precast": 0.6
    },
    pile_structure: {
        "เหล็ก": 0.8,
        "คอนกรีต": 0.4,
        "ไม้": 0.2
    },
    roof_structure: {
        "เหล็ก": 0.8,
        "smart truss": 0.4
    },
    roofing_structure: {
        "กระเบื้องเซรามิก": 1.0,
        "กระเบื้องคอนกรีต": 0.5,
        "กระเบื้องลอนคู่": 0.5,
        "กระเบื้องเผา": 0.5,
        "ชิงเกิ้ลรูฟ": 0.5,
        "เมทัลชีท": 0.5,
        "อื่นๆ": 0.5,
    },
    garage_structure: {
        "ลงเสาเข็ม": 1.125,
        "ไม่ลงเสาเข็ม": 0.0
    },
    wash_structure: {
        "ลงเสาเข็ม": 1.125,
        "ไม่ลงเสาเข็ม": 0.0
    },
    Fiberglass_Insulation: {
        "Stay Cool": 1.0,
        "Reflector": 0.6,
        "ฝ้า": 0.3
    }
};
