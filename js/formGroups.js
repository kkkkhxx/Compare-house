window.formGroups = [
    {
        title: "ข้อมูลบ้าน (House Information)",
        containerId: "form-information",
        options: [
            { label: "ราคาบ้าน", name: "house_price", icon: "house price.png", folder: "information" },
            { label: "พื้นที่ใช้สอย", name: "useable_area", icon: "useable area.png", folder: "information" },
            { label: "ห้องนอน", name: "bedroom", icon: "bedroom.png", folder: "information" },
            { label: "ห้องน้ำ", name: "bathroom", icon: "bathroom.png", folder: "information" },
            { label: "ห้องแม่บ้าน", name: "land_maidroomsize", icon: "maidroom.png", folder: "information" },
            { label: "ที่จอดรถ", name: "garage", icon: "garage.png", folder: "information" },
        ],
        type: "textOnly"
    },
    {
        title: "งานโครงสร้าง (Structural)",
        containerId: "form-structural",
        options: [
            {
                label: "โครงสร้างผนัง",
                name: "Wall",
                icon: "wall.png",
                folder: "structural",
                choices: ["ก่ออิฐ", "precast"]
            },
            {
                label: "โครงสร้างเสา",
                name: "pile_structure",
                icon: "pile.png",
                folder: "structural",
                choices: ["เหล็ก", "คอนกรีต", "ไม้"]
            },
            {
                label: "โครงหลังคา",
                name: "roof_structure",
                icon: "roof.png",
                folder: "structural",
                choices: ["เหล็ก", "smart truss"]
            },
            {
                label: "วัสดุมุงหลังคา",
                name: "roofing_structure",
                icon: "roofing.png",
                folder: "structural",
                choices: ["กระเบื้องเซรามิก", "กระเบื้องคอนกรีต", "กระเบื้องลอนคู่", "กระเบื้องเผา", "ชิงเกิ้ลรูฟ", "เมทัลชีท", "อื่นๆ"]
            },
            {
                label: "โครงสร้างที่จอดรถ",
                name: "garage_structure",
                icon: "garage.png",
                folder: "structural",
                choices: ["ลงเสาเข็ม", "ไม่ลงเสาเข็ม"]
            },
            {
                label: "โครงสร้างซักล้าง",
                name: "wash_structure",
                icon: "wash.png",
                folder: "structural",
                choices: ["ลงเสาเข็ม", "ไม่ลงเสาเข็ม"]
            }
        ],
        type: "select"
    },
    {
        title: "การรับประกัน (Defect Warranty)",
        containerId: "form-warranty",
        options: [
            { label: "ประกันโครงสร้าง 5 ปี", name: "Structural_Defects", icon: "warranty.png", folder: "warranty" },
            { label: "ประกันงานสถาปัตยกรรม 1 ปี", name: "Non_Structural_Defects", icon: "warranty.png", folder: "warranty" }
        ],
        type: "Checkbox",
    },
    {
        title: "งานประปา, สุขาภิบาล (Plumbing-Sanitary)",
        containerId: "form-plumbing",
        options: [
            { label: "ถังบำบัดน้ำเสีย", name: "Septic_Tank", icon: "septic tank.png", folder: "plumbing" },
            { label: "บ่อพักดักกลิ่น", name: "Ordor_Trap", icon: "ordor.png", folder: "plumbing" },
            { label: "ถังดักไขมัน", name: "Grese_Trap", icon: "grease.png", folder: "plumbing" },
            { label: "แทงค์น้ำ", name: "Water_Tank", icon: "water tank.png", folder: "plumbing" },
            { label: "ปั้มน้ำอัตโนมัติ", name: "Water_Pump", icon: "pump.png", folder: "plumbing" },
            { label: "ระบบท่อปลวก", name: "Pipe_Termites", icon: "pipe termites.png", folder: "plumbing" },
        ],
        type: "Checkbox",
    },
    {
        title: "งานหลังคา (Roofing)",
        containerId: "form-roof",
        options: [
            { label: "หลังคาโซลาร์เซลล์", name: "Solar_Rooftop", icon: "solar rooftop.png", folder: "roof" },
            { label: "ฉนวนกันความร้อนใต้หลังคา", name: "Fiberglass_Insulation", icon: "fiberglass.png", folder: "roof" },
            { label: "ระบบระบายความร้อนใต้หลังคา", name: "RoofTile_Ventilator", icon: "roof tile.png", folder: "roof" },
            { label: "ฝ้าระบายอากาศเหนือฝ้าชายคา ", name: "Roof_Ventilation ", icon: "ventilation.png", folder: "roof" },
        ],
        type: "Checkbox",
    },
    {
        title: "งานไฟฟ้า (Electrical)",
        containerId: "form-electrical",
        options: [
            { label: "มิเตอร์ไฟ", name: "meter", icon: "meter.png", folder: "eletrical" },
            { label: "เมนเบรกเกอร์ไฟ", name: "cb", icon: "cb.png", folder: "eletrical" },
            { label: "ไฟฉุกเฉิน", name: "emergency_light", icon: "emergency light.png", folder: "eletrical" },
            { label: "เครื่องชาร์ทรถยนต์ไฟฟ้า", name: "ev_charger", icon: "ev charger.png", folder: "eletrical" },
            { label: "มอเตอร์ประตูรั้ว", name: "door_automatic", icon: "door automatic.png", folder: "eletrical" },
            { label: "เบรกเกอร์กันดูดชั้น 1", name: "rcd1", icon: "rcd.png", folder: "eletrical" },
            { label: "เบรกเกอร์กันดูดชั้น 2", name: "rcd2", icon: "rcd.png", folder: "eletrical" },
            { label: "กริ่งบ้าน", name: "bell", icon: "bell.png", folder: "eletrical" },
            { label: "สวิทซ์และปลั๊ก", name: "switch_plug", icon: "switch plug.png", folder: "eletrical" },
            { label: "ระบบปรับอากาศ ", name: "air_conditioner", icon: "air-conditioner.png", folder: "eletrical" },
            { label: "ระบบน้ำอุ่น/น้ำร้อน ", name: "water_heater", icon: "water-heater.png", folder: "eletrical" },
            { label: "ระบบสาย Fiber Optic ", name: "optic_cable", icon: "optic cable.png", folder: "eletrical" },
            { label: "ระบบสาย LAN", name: "lan_cable", icon: "lan cable.png", folder: "eletrical" },
            { label: "บ่อกราวน์", name: "earth_pit", icon: "earth pit.png", folder: "eletrical" },
        ],
        type: "Checkbox",
    },
    {
        title: "นวัตกรรม (Living Soloution)",
        containerId: "form-living",
        options: [
            { label: "ระบบสมาร์ทโฮม", name: "smart_home", icon: "smart-house.png", folder: "solution" },
            { label: "เครื่องตรวจจับความร้อน", name: "heat_detector", icon: "heat detector.png", folder: "solution" },
            { label: "เครื่องตรวจจับควัน", name: "Smoke_Detector", icon: "smoke detector.png", folder: "solution" },
            { label: "ระบบรักษาความปลอดภัย", name: "Security_Home", icon: "home-security.png", folder: "solution" },
            { label: "กล้องวงจรปิด", name: "cctv", icon: "cctv-camera.png", folder: "solution" },
            { label: "ประตูอัตโนมัติโรงรถ", name: "Automatic_Garage_Door", icon: "auto garage.png", folder: "solution" },
            { label: "กระจกเขียวตัดแสง ", name: "Green_Glass", icon: "green glass.png", folder: "solution" },
            { label: "แอพพลิเคชั่นตัวบ้าน", name: "House_Appllication", icon: "house app.png", folder: "solution" },
            { label: "ระบบกรองอากาศในบ้าน", name: "Air_Quality", icon: "air quality.png", folder: "solution" },
        ],
        type: "Checkbox",
    },
    {
        title: "งานอื่นๆ (Utility)",
        containerId: "form-utility",
        options: [
            { label: "ตู้ไปรษณีย์", name: "mailbox", icon: "mailbox.png", folder: "utility" },
            { label: "ถังขยะ", name: "bin", icon: "rubbish bin.png", folder: "utility" },
            { label: "ชุดครัวไทย", name: "kitchen_furniture", icon: "kitchen furniture.png", folder: "utility" },
            { label: "อุปกรณ์ชุดครัว", name: "countertop", icon: "countertop.png", folder: "utility" },
            { label: "ฉากกั้นอาบน้ำ", name: "Shower_Enclosures", icon: "shower enclosure.png", folder: "utility" },
            { label: "งานจัดสวน", name: "gardening", icon: "gardening.png", folder: "utility" },
            { label: "รางน้ำ", name: "gutters", icon: "gutters.png", folder: "utility" },
            { label: "ชุดครัวเตรียมอาหาร", name: "pantry", icon: "pantry.png", folder: "utility" },
            { label: "ท่อ uPVC สำหรับติดตั้งโซลาร์เซลล์", name: "upvc", icon: "upvc conduit pipe.png", folder: "utility" },
            { label: "ครีบกันดินทรุด (ฟิน) ", name: "retaining", icon: "retaining wall.png", folder: "utility" },
        ],
        type: "Checkbox",
    }
];