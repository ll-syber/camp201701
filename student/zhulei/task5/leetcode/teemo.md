# 495. Teemo Attacking

## 说明
团战可以输，提莫必须死

## 题目
给出teemo每次攻击的时间点列表，以及中毒持续的时间，求最后造成的总伤害。   
注意事项

- 假定teemo发动攻击时，敌方立刻进入中毒状态。   
- 中毒状态不叠加，后一次的中毒状态会覆盖前一次的中毒状态

## 解法一
两次攻击间隔小于中毒持续时间时，将间隔时间而不是持续时间计入伤害。

	var findPoisonedDuration = function(timeSeries, duration) {
	    var damage = 0;
	    for (var i = 0; i < timeSeries.length; i++) {
	    	if (i > 0 ) {
	    		var sep = timeSeries[i] - timeSeries[i - 1];
	    		if (sep < duration) {
	    			damage = damage - duration + sep;
	    		}
	    	}
			damage += duration;   	
	    }

	    return damage;
	};