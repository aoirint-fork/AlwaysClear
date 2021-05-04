var cleardownloads = function(state){
	chrome.downloads.erase({state: "complete"});
};

chrome.downloads.onChanged.addListener(function (e) {
	if (typeof e.state !== "undefined") {
		cleardownloads();
	}
});
