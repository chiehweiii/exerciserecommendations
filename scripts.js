document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('exerciseForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // 取得表單資料
        var age = document.getElementById('age').value;
        var goal = document.getElementById('goal').value;
        var activityDays = document.getElementById('activityDays').value;
        var strengthDays = document.getElementById('strengthDays').value;
        
        // 請求選項
        var requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                age: age,
                goal: goal,
                activityDays: activityDays,
                strengthDays: strengthDays
            })
        };
        
        // 使用fetch API進行運動建議的計算
        fetch('/calculate', requestOptions)
            .then(response => response.json())
            .then(data => {
                var recommendation = generateExerciseRecommendation(data);
                document.getElementById('exerciseRecommendation').textContent = recommendation;
                document.getElementById('resultContainer').style.display = 'block';
            })
            .catch(error => console.error('Error:', error));
    });
});

function generateExerciseRecommendation(data) {
    var age = data.age;
    var goal = data.goal;
    var activityDays = parseInt(data.activityDays);
    var strengthDays = parseInt(data.strengthDays);
    var recommendation = "";

    // 年齡分類指標
    if (age >= 5 && age <= 17) {
        if (goal === "general") {
            if (activityDays >= 0 && activityDays <= 2) {
                recommendation = "每週增加至3天，每次進行至少20-30分鐘的有氧運動。";
            } else if (activityDays >= 3 && activityDays <= 4) {
                recommendation = "保持每週3-4天的活動，逐步增加每次活動時間至30-45分鐘。";
            } else if (activityDays >= 5 && activityDays <= 7) {
                recommendation = "保持每週5-7天的活動，每次至少60分鐘的中高強度有氧運動。";
            }
            
            if (strengthDays === 0) {
                recommendation += "逐步增加至每週3天，進行增強肌肉骨骼的運動。";
            } else if (strengthDays === 1) {
                recommendation += "逐步增加至每週3天。";
            } else if (strengthDays >= 2) {
                recommendation += "保持每週至少3天的肌力訓練。";
            }
        } else if (goal === "weight_loss") {
            if (activityDays >= 0 && activityDays <= 2) {
                recommendation = "逐步增加至每週5天，每次至少45-60分鐘的有氧運動。";
            } else if (activityDays >= 3 && activityDays <= 4) {
                recommendation = "逐步增加至每週5天，每次45-60分鐘。";
            } else if (activityDays >= 5 && activityDays <= 7) {
                recommendation = "保持每週5-7天，每週250分鐘以上的中高強度有氧運動。";
            }
            
            if (strengthDays === 0) {
                recommendation += "逐步增加至每週2天，進行增強肌肉骨骼的運動。";
            } else if (strengthDays === 1) {
                recommendation += "逐步增加至每週2天。";
            } else if (strengthDays >= 2) {
                recommendation += "保持每週至少2天的肌力訓練。";
            }
        } else if (goal === "hiit") {
            if (activityDays >= 0 && activityDays <= 2) {
                recommendation = "逐步增加至每週3天，每次20-30分鐘的高強度間歇訓練。";
            } else if (activityDays >= 3 && activityDays <= 4) {
                recommendation = "保持每週3天，每次30-45分鐘的高強度間歇訓練。";
            } else if (activityDays >= 5 && activityDays <= 7) {
                recommendation = "保持每週至少3天的高強度間歇訓練，並增加其他日的中等強度活動。";
            }
            
            if (strengthDays === 0) {
                recommendation += "逐步增加至每週2天。";
            } else if (strengthDays === 1) {
                recommendation += "逐步增加至每週2天。";
            } else if (strengthDays >= 2) {
                recommendation += "保持每週至少2天的肌力訓練。";
            }
        } else if (goal === "strength") {
            if (activityDays >= 0 && activityDays <= 2) {
                recommendation = "逐步增加至每週3天，進行有氧運動及肌力訓練。";
            } else if (activityDays >= 3 && activityDays <= 4) {
                recommendation = "保持每週3-4天的活動，並增加肌力訓練次數。";
            } else if (activityDays >= 5 && activityDays <= 7) {
                recommendation = "保持每週5-7天的活動，每週至少3天的肌力訓練。";
            }
            
            if (strengthDays === 0) {
                recommendation += "逐步增加至每週2天。";
            } else if (strengthDays === 1) {
                recommendation += "逐步增加至每週2天。";
            } else if (strengthDays >= 2) {
                recommendation += "保持每週至少2天的肌力訓練。";
            }
        }
    } else if (age >= 18 && age <= 64) {
        if (goal === "general") {
            if (activityDays >= 0 && activityDays <= 2) {
                recommendation = "逐步增加至每週3天，每次至少20-30分鐘的中等強度有氧運動。";
            } else if (activityDays >= 3 && activityDays <= 4) {
                recommendation = "保持每週3-4天的活動，逐步增加每次活動時間至30-45分鐘。";
            } else if (activityDays >= 5 && activityDays <= 7) {
                recommendation = "保持每週5-7天的活動，每週150-300分鐘的中等強度有氧運動。";
            }
            
            if (strengthDays === 0) {
                recommendation += "逐步增加至每週2天，每次包含主要肌群的肌力訓練。";
            } else if (strengthDays === 1) {
                recommendation += "逐步增加至每週2天。";
            } else if (strengthDays >= 2) {
                recommendation += "保持每週至少2天的肌力訓練。";
            }
        } else if (goal === "weight_loss") {
            if (activityDays >= 0 && activityDays <= 2) {
                recommendation = "逐步增加至每週5天，每次至少45-60分鐘的中高強度有氧運動。";
            } else if (activityDays >= 3 && activityDays <= 4) {
                recommendation = "逐步增加至每週5天，每次45-60分鐘。";
            } else if (activityDays >= 5 && activityDays <= 7) {
                recommendation = "保持每週5-7天，每週250分鐘以上的中高強度有氧運動。";
            }
            
            if (strengthDays === 0) {
                recommendation += "逐步增加至每週2天，進行增強肌肉骨骼的運動。";
            } else if (strengthDays === 1) {
                recommendation
