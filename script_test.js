$.ajax({
   method: 'GET',
   url: 'getContentFromUrl.php', 
   dataType: 'json',
   data: {'ext_url': 'http://51.250.13.229/api/safetyEnterprise/'},
   success: function(data) {   
           
        getTableHeader(Object.keys(data[0]));  
        getTableData(data);   

        function getTableHeader (fields) {
            
            const table = document.querySelector(".table");
            const thead = document.createElement("thead");
            const tr = document.createElement("tr");
            const fragment = document.createDocumentFragment();

            fields.forEach(x => {

                const th = document.createElement("th")
                th.innerHTML = x;
                th.scope = "col";
                fragment.appendChild(th);                
            });
            
            tr.appendChild(fragment);
            thead.appendChild(tr);
            table.appendChild(thead);
        };

        function getTableData (data) {
            
            const table = document.querySelector(".table");
            const tbody = document.createElement("tbody");           

            data.forEach(x => {             
                
                const tr = document.createElement("tr");
                const fragment = document.createDocumentFragment();
                const keys = Object.keys(data[0]);
                keys.forEach(y => {                    
                    const td = document.createElement("td")
                    td.innerHTML = x[y];                
                    fragment.appendChild(td);                
                });
                tr.appendChild(fragment);
                tbody.appendChild(tr);
                table.appendChild(tbody);
        });
        };
   },
   error:function() {
       console.log('Error');
   }   
});

const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["коэф повторяемости","коэф устраняемости","кол-во нарушений","кол-во предписаний","приостановки работ","выполнены в срок","выполнены не в срок","на контроле","просрочено", "выполнено"],
        datasets:[{
            label: 'В2 Групп',
            data: [10.71, .65, 7, 6, 0, 3, 0, 4, 0, 3],
            backgroundColor: [
                'gray'                
            ],
            borderColor: [
                '#80d8ff',
                '#82b1ff',
                '#b388ff',
                '#80d8ff',
                '#ea80fc'
            ],
            borderWidth: 4
        }]
    },
    options: {
        maintaiAspectRatio: false,
    }
})



