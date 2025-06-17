function calculateRatings(compareHomes) {
    const weights = { A: 45, B: 35, C: 15, D: 5 };
    const itemTypeMap = window.itemTypeMap || {};
    const itemScoreMap = window.itemScoreMap || {};

    return compareHomes.map((home) => {
        const score = { A: 0, B: 0, C: 0, D: 0 };
        const count = { A: 0, B: 0, C: 0, D: 0 };

        for (const key in home.formData) {
            if (key.endsWith("_detail")) continue;
            const type = itemTypeMap[key];
            if (!type) continue;

            const value = home.formData[key];

            // ✅ ถ้าเป็น checkbox → ได้ 1
            if (typeof value === "boolean") {
                if (value) score[type] += 1;
                count[type] += 1;
            }

            // ✅ ถ้าเป็น dropdown → ตรวจค่าใน itemScoreMap
            else if (typeof value === "string" && itemScoreMap[key]) {
                const percent = itemScoreMap[key][value] || 0;
                score[type] += percent;
                count[type] += 1;
            }

            // ❌ ถ้าไม่ตรง → ข้าม
        }

        // คำนวณรวม
        const breakdown = {};
        let total = 0;
        for (const type of ["A", "B", "C", "D"]) {
            const pct = count[type] > 0 ? score[type] / count[type] : 0;
            const points = pct * weights[type];
            breakdown[type] = Math.round(points);
            total += points;
        }

        return {
            name: home.name,
            rating: Math.round(total),
            breakdown
        };
    });
}

window.calculateRatings = calculateRatings;
