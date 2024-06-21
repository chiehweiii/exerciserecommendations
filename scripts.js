document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('exerciseForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        var age = parseInt(document.getElementById('age').value);
        var goal = document.getElementById('goal').value;
        var activityDays = parseInt(document.getElementById('activityDays').value);
        var strengthDays = parseInt(document.getElementById('strengthDays').value);
        
        var recommendation = generateExerciseRecommendation({ age, goal, activityDays, strengthDays });
        document.getElementById('exerciseRecommendation').textContent = recommendation;
        document.getElementById('resultContainer').style.display = 'block';
    });
});

function generateExerciseRecommendation(data) {
    var { age, goal, activityDays, strengthDays } = data;
    var recommendation = "";

    if (age >= 5 && age <= 17) {
        if (goal === "general") {
            recommendation = getRecommendation(activityDays, strengthDays, "有氧運動", "肌力訓練");
        } else if (goal === "weight_loss") {
            recommendation = getRecommendation(activityDays, strengthDays, "有氧運動", "肌力訓練");
        } else if (goal === "hiit") {
            recommendation = getRecommendation(activityDays, strengthDays, "間歇訓練", "肌力訓練");
        } else if (goal === "strength") {
            recommendation = getRecommendation(activityDays, strengthDays, "有氧運動及肌力訓練", "肌力訓練");
        }
    } else if (age >= 18 && age <= 64) {
        if (goal === "general") {
            recommendation = getRecommendation(activityDays, strengthDays, "中等強度有氧運動", "肌力訓練");
        } else if (goal === "weight_loss") {
            recommendation = getRecommendation(activityDays, strengthDays, "中高強度有氧運動", "肌力訓練");
        } else if (goal === "hiit") {
            recommendation = getRecommendation(activityDays, strengthDays, "高強度間歇訓練", "肌力訓練");
        } else if (goal === "strength") {
            recommendation = getRecommendation(activityDays, strengthDays, "有氧運動及肌力訓練", "肌力訓練");
        }
    } else if (age >= 65) {
        if (goal === "general") {
            recommendation = getRecommendation(activityDays, strengthDays, "輕度活動", "適當的肌力訓練");
        } else if (goal === "weight_loss") {
            recommendation = getRecommendation(activityDays, strengthDays, "中強度有氧運動", "肌力訓練");
        } else if (goal === "hiit") {
            recommendation = getRecommendation(activityDays, strengthDays, "高強度間歇訓練", "肌力訓練");
        } else if (goal === "strength") {
            recommendation = getRecommendation(activityDays, strengthDays, "有氧運動及肌力訓練", "肌力訓練");
        }
    }

    return recommendation;
}

function getRecommendation(activityDays, strengthDays, aerobicText, strengthText) {
    var recommendation = "";
    
    if (activityDays >= 0 && activityDays <= 2) {
        recommendation = `逐步增加至每週3天，每次至少20-30分鐘的${aerobicText}。`;
    } else if (activityDays >= 3 && activityDays <= 4) {
        recommendation = `保持每週3-4天的活動，逐步增加每次活動時間至30-45分鐘。`;
    } else if (activityDays >= 5 && activityDays <= 7) {
        recommendation = `保持每週5-7天的活動，每週150-300分鐘的${aerobicText}。`;
    }

    if (strengthDays === 0) {
        recommendation += `逐步增加至每週2天，進行${strengthText}。`;
    } else if (strengthDays === 1) {
        recommendation += `逐步增加至每週2天肌力訓練。`;
    } else if (strengthDays >= 2) {
        recommendation += `保持每週至少2天的${strengthText}。`;
    }

    return recommendation;
}
