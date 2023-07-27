let ALCHEMY_URL = `https://alchemyapi.io/?r=badge:${BADGE_ID}`;
const ALCHEMY_ANALYTICS_URL = `https://analytics.alchemyapi.io/analytics`

function logBadgeClick() {
	    fetch(`${ALCHEMY_ANALYTICS_URL}/badge-click`, {
    method: 'POST',
	    	headers: {
	        	'Content-Type': 'application/json',
	      	},
		    body: JSON.stringify({
			    badge_id: BADGE_ID,
    }),
  });
	    window.open(ALCHEMY_URL, '_blank').focus();
}

function logBadgeView() {
	    fetch(`${ALCHEMY_ANALYTICS_URL}/badge-view`, {
    method: 'POST',
	    	headers: {
	        	'Content-Type': 'application/json',
	      	},
		    body: JSON.stringify({
			    badge_id: BADGE_ID,
    }),
  });
}

function isBadgeInViewpoint(bounding) {
	    return (
	        bounding.top >= 0
	        && bounding.left >= 0
	        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
	        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
	    );
}

var intervalId = setInterval(() => {
  const badge = document.getElementById('badge-button');
  if (badge && isBadgeInViewpoint(badge.getBoundingClientRect())) {
    logBadgeView();
    clearInterval(intervalId);
  }
}, 2000);