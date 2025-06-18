/*---------------------- Show name_img after uploaded ----------------------*/
const fileInput = document.getElementById('project_image');
const fileNameSpan = document.getElementById('file-name');
const preview = document.getElementById('image_preview');

fileInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        // แสดงชื่อไฟล์
        fileNameSpan.textContent = file.name;

        // แสดง preview รูป
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.setAttribute('src', e.target.result);
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        fileNameSpan.textContent = 'ยังไม่ได้เลือกไฟล์';
        preview.style.display = 'none';
    }
});

/*---------------------- Dropdown ----------------------*/
const template = document.getElementById('form-row-template');

function renderFormGroups() {
    formGroups.forEach(group => {
        const container = document.getElementById(group.containerId);
        if (!container) return;

        group.options.forEach(opt => {
            let row;
            const type = opt.type || group.type;

            if (type === 'textOnly') {
                row = document.createElement('div');
                row.className = 'form-row';
                row.innerHTML = `<div class="icon">
                    <img src="../assets/icon/${opt.folder}/${opt.icon}" alt="${opt.label}"></div>
                    <label>${opt.label}</label>
                    <input type="text" name="${opt.name}" placeholder="กรอกข้อมูล">`;
            }
            else if (type === 'select') {
                row = document.createElement('div');
                row.className = 'form-row';

                const iconDiv = document.createElement('div');
                iconDiv.className = 'icon';
                const icon = document.createElement('img');
                icon.src = `../assets/icon/${opt.folder}/${opt.icon}`;
                icon.alt = opt.label;
                iconDiv.appendChild(icon);

                const label = document.createElement('label');
                label.textContent = opt.label;

                const select = document.createElement('select');
                select.name = opt.name;

                const placeholderOption = document.createElement('option');
                placeholderOption.value = "";
                placeholderOption.textContent = "เลือกประเภท";
                placeholderOption.disabled = true;
                placeholderOption.selected = true;
                select.appendChild(placeholderOption);

                opt.choices.forEach(choice => {
                    const option = document.createElement('option');
                    option.value = choice;
                    option.textContent = choice;
                    select.appendChild(option);
                });

                row.appendChild(iconDiv);
                row.appendChild(label);
                row.appendChild(select);
            }
            else {
                const clone = template.content.cloneNode(true);
                clone.querySelector('img').src = `../assets/icon/${opt.folder}/${opt.icon}`;
                clone.querySelector('img').alt = opt.label;
                clone.querySelector('label').textContent = opt.label;
                clone.querySelector('input[type="checkbox"]').name = opt.name;
                clone.querySelector('input[type="text"]').name = `${opt.name}_detail`;
                row = clone;
            }

            container.appendChild(row);
        });
    });
}


// formGroups.forEach(group => {
//     const container = document.getElementById(group.containerId);
//     if (!container) return;

//     group.options.forEach(opt => {
//         let row;

//         if (group.type === 'textOnly') {
//             row = document.createElement('div');
//             row.className = 'form-row';
//             row.innerHTML = `<div class="icon">
//         <img src="../assets/icon/${opt.folder}/${opt.icon}" alt="${opt.label}"></div>
//         <label>${opt.label}</label>
//         <input type="text" name="${opt.name}" placeholder="กรอกข้อมูล">`;
//         }
//         else if (group.type === 'select') {
//             row = document.createElement('div');
//             row.className = 'form-row';

//             const iconDiv = document.createElement('div');
//             iconDiv.className = 'icon';
//             const icon = document.createElement('img');
//             icon.src = `../assets/icon/${opt.folder}/${opt.icon}`;
//             icon.alt = opt.label;
//             iconDiv.appendChild(icon);

//             const label = document.createElement('label');
//             label.textContent = opt.label;

//             const select = document.createElement('select');
//             select.name = opt.name;

//             const placeholderOption = document.createElement('option');
//             placeholderOption.value = "";
//             placeholderOption.textContent = "เลือกประเภท";
//             placeholderOption.disabled = true;
//             placeholderOption.selected = true;
//             select.appendChild(placeholderOption);

//             opt.choices.forEach(choice => {
//                 const option = document.createElement('option');
//                 option.value = choice;
//                 option.textContent = choice;
//                 select.appendChild(option);
//             });

//             row.appendChild(iconDiv);
//             row.appendChild(label);
//             row.appendChild(select);
//         }
//         else {
//             const clone = template.content.cloneNode(true);
//             clone.querySelector('img').src = `../assets/icon/${opt.folder}/${opt.icon}`;
//             clone.querySelector('img').alt = opt.label;
//             clone.querySelector('label').textContent = opt.label;
//             clone.querySelector('input[type="checkbox"]').name = opt.name;
//             clone.querySelector('input[type="text"]').name = `${opt.name}_detail`;
//             row = clone;
//         }

//         container.appendChild(row);
//     });
// });
// }

function setupDropdownToggle() {
    document.querySelectorAll('.dropdown-selected').forEach(selected => {
        selected.addEventListener('click', () => {
            const options = selected.nextElementSibling;
            const isOpen = options.classList.contains('show');

            document.querySelectorAll('.dropdown-options').forEach(opt => {
                if (opt !== options) {
                    opt.classList.remove('show');
                    opt.style.maxHeight = null;
                }
            });

            if (!isOpen) {
                options.classList.add('show');
                options.style.maxHeight = options.scrollHeight + "px";
            } else {
                options.classList.remove('show');
                options.style.maxHeight = null;
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderFormGroups();
    setupDropdownToggle();

    // ✅ โหลดข้อมูลหลัง DOM ถูกสร้างแล้ว
    const editIndex = localStorage.getItem("editIndex");
    if (editIndex !== null) {
        const homes = JSON.parse(localStorage.getItem("homes") || "[]");
        const home = homes[editIndex];

        // ✅ ใส่ชื่อโครงการ และ preview รูป
        if (home) {
            document.getElementById("project_name").value = home.name;
            document.getElementById("file-name").textContent = home.imageName || "";

            const preview = document.getElementById("image_preview");
            if (preview && home.imageName) {
                preview.src = `../assets/photo/${home.imageName}`;
                preview.style.display = "block";
            }
        }

        // ✅ ใส่ข้อมูลจากฟอร์ม dropdown
        if (home?.formData) {
            Object.entries(home.formData).forEach(([key, value]) => {
                const input = document.querySelector(`[name="${key}"]`);
                if (input) {
                    if (input.type === "checkbox") {
                        input.checked = value;
                    } else if (input.type !== "file") {
                        input.value = value;
                    }
                }
            });
        }
    }
});


