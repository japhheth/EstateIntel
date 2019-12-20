let tableBody = '';

$(function(){
    $.ajax({
        url:"https://70c5b72c-65db-4a66-ba01-3e14763157e8.mock.pstmn.io/",
        type:"GET",
        contentType:"application/json",
        success:function(response){
           // console.log(response)
            let data = response.data;
            $.each(data,(index,row)=>{
                let status = "";
                if(row.status == "On hold")
                {
                    status = '<span class="badge badge-primary status-bg">On Hold</span>'
                }
                else if(row.status == "Site Clearing")
                {
                    status = '<span class="badge badge-secondary status-bg">Site Clearing</span>'
                }
                else if(row.status == "Completed")
                {
                    status = '<span class="badge badge-success status-bg">Completed</span>'

                }
                else if(row.status == "Under construction")
                {
                    status = '<span class="badge badge-warning status-bg">Under Construction</span>'

                }
                else if(row.status == "Conceptual")
                {
                    status = '<span class="badge badge-info status-bg">Conceptual</span>'

                }
                else if(row.status == "Implementation")
                {
                    status = '<span class="badge badge-dark status-bg">Implementation</span>'

                }
               
                tableBody += `<tr><td>${row.project_name}</td><td>${row.developer}</td><td>${row.main_contractor}</td><td>${row.lga}</td><td>${row.state}</td><td>${status}</td><td>${row.sector}</td></tr>`
            })
            $('#tableBody').html(tableBody);
            $('#estateTable').DataTable();
        }
    })
})