var inpinputfieldut = document.getElementById("inputfieldinputfield");
var btn = document.querySelector(".btn_submit");

	btn.addEventListener("click", function()
	 {
		const xhr = new XMLHttpRequest();
		xhr.open('get','dsafsadfasdads.txt',false);
		

		xhr.onreadystatechange = function ()
		 {
			if (xhr.readyState == 4) 
			{
				if (xhr.status == 200) 
				{
					var data = xhr.responseText;
	                var jsonResponse = JSON.parse(data);
	                console.log(jsonResponse["Row"]);
	                var table = document.createElement('table');
	                table.setAttribute('class', 'history');
	                var properties = ['Title', 'Year', 'Hubs', 'Gross', 'HomePage','Logo']; // changed this
	                var capitalize = function(s) 
	                {
	                    return s.charAt(0).toUpperCase() + s.slice(1);
	                }
	                var tr = document.createElement('tr');
	                for (var i = 0; i < properties.length; i++) 
	                {
	                    var th = document.createElement('th');
	                    th.appendChild(document.createTextNode(capitalize(properties[i])));
	                    tr.appendChild(th);
	                }
	                table.appendChild(tr);
	                var tr, row;
	                console.log("jsonResponse", jsonResponse); // changed this
	                for (var r = 0; r < jsonResponse["presidents"].president.length; r++)
	                 { // changed this
	                    tr = document.createElement('tr');
	                    row = jsonResponse["presidents"].president[r]; // changed this
	                    for (var i = 0; i < properties.length; i++) 
	                    {
	                        var td = document.createElement('td');
	                        td.appendChild(document.createTextNode(row[properties[i]]));
	                        tr.appendChild(td);
	                    }
	                    table.appendChild(tr);
	                }
	                document.getElementById('presidentialTable').appendChild(table);
    		    }
			}

				if (xhr.status == 400) {
					console.log("File or Not Found")
				}
			}	

	xhr.send();	

	//console.log(inputfield.value);
	//input.value = '';
});	

