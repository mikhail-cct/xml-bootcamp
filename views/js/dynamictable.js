function dynamic_table(url) {
    $.ajax({
        url: url,
        data: {
            format: 'json'
        },
        error: function () {
            $('#info').html('<p>An error has occurred</p>');
        },
        dataType: 'json',
        success: function (data) {           
            var col = [];
            window.cols = col;
            for (var i = 0; i < data.length; i++) {
                for (var key in data[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }
            col.push("Actons");          
            var table = document.createElement("table");
            table.setAttribute('class');      
            var tr = table.insertRow(-1);                   
            for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th");     
                th.innerHTML = col[i];
                tr.appendChild(th);
            }        
            for (var i = 0; i < data.length; i++) {
                tr = table.insertRow(-1);
                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = data[i][col[j]];
                }
                var d = data[i].id;
                tabCell.innerHTML = '<a href="#" onclick="return EditTable(' + data[i].id + ' )">Edit</a> | <a href="#" onclick="DeleteTable(' + data[i].id + ')">Delete</a></td>'
            }       
            var divContainer = document.getElementById("showData");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
            jQuery('.tables').before('<input type="submit" onclick="return CreateDynamicModelPopup();" class="addme" value="Add New!"></div>');
        },
        type: 'GET'
    });
};//code from tutorials helper 