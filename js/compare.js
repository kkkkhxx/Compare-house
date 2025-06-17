document.addEventListener("DOMContentLoaded", () => {
    const compareHomes = JSON.parse(localStorage.getItem("compareHomes") || "[]");
    if (!window.formGroups || compareHomes.length === 0) return;

    const ratings = calculateRatings(compareHomes);

    const tableNameRow = document.getElementById("row-name");
    const tableImageRow = document.getElementById("row-image");
    const tableStarRow = document.getElementById("row-star");
    const container = document.getElementById("dropdown-container");

    compareHomes.forEach((home, index) => {
        const ratingInfo = ratings[index];

        // ➔ ชื่อโครงการ
        const nameCell = document.createElement("td");
        nameCell.textContent = home.name || "-";
        tableNameRow.appendChild(nameCell);

        // ➔ รูปภาพ
        const imageCell = document.createElement("td");
        const img = document.createElement("img");
        img.src = home.imageBase64 || "/assets/photo/default.png";
        img.alt = home.name;
        img.style.maxWidth = "100px";
        imageCell.appendChild(img);
        tableImageRow.appendChild(imageCell);

        // ➔ คะแนนรวม (ดาว)
        const tooltip = `
โครงสร้าง: ${ratingInfo.breakdown.A}
ความปลอดภัย: ${ratingInfo.breakdown.B}
ความสะดวกสบาย: ${ratingInfo.breakdown.C}
เทคโนโลยี: ${ratingInfo.breakdown.D}`.trim();

        const starCell = document.createElement("td");
        starCell.innerHTML = `<div class="home-rating" title="${tooltip.replace(/\n/g, '&#10;')}">
        ${renderStars(ratingInfo.rating)}</div>`;
        tableStarRow.appendChild(starCell);
    });

    // ➔ รายละเอียดคะแนนแบบ dropdown
    const scoreGroup = document.createElement("div");
    scoreGroup.className = "group-block";

    const header = document.createElement("h3");
    header.className = "group-title";
    header.textContent = "กดเพื่อดูเกฑณ์การให้คะแนน";

    const dropdownContent = document.createElement("div");
    dropdownContent.className = "dropdown-content";

    const scoreTable = document.createElement("table");
    scoreTable.classList.add("compare-table");

    const categories = [
        { label: "โครงสร้าง (45%)", key: "A" },
        { label: "ความปลอดภัย (35%)", key: "B" },
        { label: "ความสะดวกสบาย (15%)", key: "C" },
        { label: "เทคโนโลยี (5%)", key: "D" }
    ];

    categories.forEach(category => {
        const row = document.createElement("tr");
        const th = document.createElement("th");
        th.textContent = category.label;
        row.appendChild(th);

        compareHomes.forEach((home, index) => {
            const ratingInfo = ratings[index];
            const td = document.createElement("td");
            td.textContent = ratingInfo.breakdown[category.key];
            row.appendChild(td);
        });

        scoreTable.appendChild(row);
    });

    const note = document.createElement("p");
    note.className = "score-note";
    note.textContent = "**การให้คะแนนหรือน้ำหนักในแต่ละหมวดหัวข้อและรายการมาจากทีมช่าง ต.ตรวจบ้าน ที่มากประสบการณ์ในการตรวจบ้านมามากกว่าหลายพันหลัง";

    dropdownContent.appendChild(scoreTable);
    dropdownContent.appendChild(note);
    scoreGroup.appendChild(header);
    scoreGroup.appendChild(dropdownContent);
    container.appendChild(scoreGroup);

    header.addEventListener("click", () => {
        document.querySelectorAll(".dropdown-content").forEach(dc => {
            if (dc !== dropdownContent) {
                dc.style.maxHeight = null;
                dc.classList.remove("open");
            }
        });

        const isOpen = dropdownContent.classList.contains("open");
        if (isOpen) {
            dropdownContent.style.maxHeight = null;
            dropdownContent.classList.remove("open");
        } else {
            dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
            dropdownContent.classList.add("open");
        }
    });

    formGroups.forEach(group => {
        const groupBlock = document.createElement("div");
        groupBlock.className = "group-block";

        const header = document.createElement("h3");
        header.className = "group-title";
        header.textContent = group.title;

        const dropdownContent = document.createElement("div");
        dropdownContent.className = "dropdown-content";

        const table = document.createElement("table");
        table.classList.add("compare-table");

        group.options.forEach(opt => {
            const row = document.createElement("tr");

            const labelCell = document.createElement("th");
            const wrapper = document.createElement("div");
            wrapper.className = "label-wrapper";

            const iconDiv = document.createElement("div");
            iconDiv.className = "label-icon";
            const icon = document.createElement("img");
            icon.src = `/assets/icon/${opt.folder}/${opt.icon}`;
            icon.alt = opt.label;
            icon.style.width = "24px";
            iconDiv.appendChild(icon);

            const textDiv = document.createElement("div");
            textDiv.className = "label-text";
            textDiv.textContent = opt.label;

            wrapper.appendChild(iconDiv);
            wrapper.appendChild(textDiv);
            labelCell.appendChild(wrapper);
            row.appendChild(labelCell);

            compareHomes.forEach(home => {
                const valueCell = document.createElement("td");
                const value = home.formData?.[opt.name];
                if (group.type === "Checkbox") {
                    const checked = home.formData?.[opt.name];
                    const detail = home.formData?.[`${opt.name}_detail`];
                    valueCell.textContent = detail?.trim()
                        ? detail
                        : (checked ? "✅" : "❌");
                } else {
                    valueCell.textContent = value || "-";
                }
                row.appendChild(valueCell);
            });

            table.appendChild(row);
        });

        dropdownContent.appendChild(table);
        groupBlock.appendChild(header);
        groupBlock.appendChild(dropdownContent);
        container.appendChild(groupBlock);

        header.addEventListener("click", () => {
            document.querySelectorAll(".dropdown-content").forEach(dc => {
                if (dc !== dropdownContent) {
                    dc.style.maxHeight = null;
                    dc.classList.remove("open");
                }
            });

            const isOpen = dropdownContent.classList.contains("open");
            if (isOpen) {
                dropdownContent.style.maxHeight = null;
                dropdownContent.classList.remove("open");
            } else {
                dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
                dropdownContent.classList.add("open");
            }
        });
    });
});

function renderStars(score) {
    const full = Math.round(score / 20);
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        stars += i <= full ? "⭐" : "☆";
    }
    return stars + ` (${score})`;
}
