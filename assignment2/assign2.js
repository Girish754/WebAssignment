var inpinputfieldut = document.getElementById("inputfieldinputfield");
var btn = document.querySelector(".btn_submit");

	btn.addEventListener("click", function()
	 {
		const xhr = new XMLHttpRequest();
		xhr.open('GET','filmslist.json',true);
	
	xhr.onreadystatechange = function ()
		 {
			if (xhr.readyState == 4) 
			{
				if (xhr.status == 200) 
				{
					var data = xhr.responseText;
	                var tableInfo = JSON.parse(data);

	                var table = document.createElement("table");
					table.style.width = '50%';
					table.setAttribute('border', '1');
					// table.setAttribute('cellspacing', '0');
					// table.setAttribute('cellpadding', '5');

					//var tHead = document.createElement("tHead");
					var hRow = document.createElement("tr");

					var col = tableInfo.Mainline.Table.Header.Data.length;	
				
					for (var i = 0; i < col; i++) {
						var th = document.createElement("th");
						console.log(tableInfo.Mainline.Table.Header.Data[i]);
						th.innerHTML = tableInfo.Mainline.Table.Header.Data[i];
						hRow.appendChild(th);
					}
					//tHead.appendChild(hRow);
					table.appendChild(hRow);

					// var tRow = document.createElement("td")

					var rows = tableInfo.Mainline.Table.Row;
					for (var i = 0; i < rows.length; i++) {
						var tRow = document.createElement("tr");
						var row = rows[i];
						var keysInRow = Object.keys(row);
						for (var j=0 ; j<keysInRow.length ; j++) {
							 console.log(keysInRow + "---");

							var tdata = document.createElement("td");
							
							if (keysInRow[j] == "HomePage") {
								var anchor = document.createElement("a");
								anchor.setAttribute('href', row[keysInRow[j]]); 
								anchor.innerHTML = row[keysInRow[j]];
								tdata.appendChild(anchor);
								// tdata.innerHTML = anchor;
							}
							else if (keysInRow[j] == "Logo") {
								var image = document.createElement("img");
								image.setAttribute('src',row[keysInRow[j]]);
								tdata.appendChild(image);
	
							}
							else if (keysInRow[j] == "Hubs") {
								var ul = document.createElement("ul");
								var hub = row[keysInRow[j]].Hub;	
								for (var k = 0; k < hub.length; k++) {
									var liHub = document.createElement("li");
									if (k === 0) {
										var strong = document.createElement("strong");
										strong.innerHTML = hub[k];
										liHub.appendChild(strong);
									}
									else{
										liHub.innerHTML = hub[k];
									}
									ul.appendChild(liHub);
								}
								tdata.appendChild(ul);
							}
							else {
								tdata.innerHTML = row[keysInRow[j]];
							}
							tRow.appendChild(tdata);
						} 	
						table.appendChild(tRow);
					}
					


					var divContainer = document.getElementById("filmListTable");
					divContainer.innerHTML = "";
					divContainer.appendChild(table);
    		    }
    		    if (xhr.status == 400) {
					console.log("File or Not Found")
				}
			}		
		}	
		xhr.send();
		//console.log(inputfield.value);
	//input.value = '';
});	

