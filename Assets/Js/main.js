let tableBody = '';

//OnLoad function
$(function(){

    //Fetches the data
    $.ajax({
        url:"https://70c5b72c-65db-4a66-ba01-3e14763157e8.mock.pstmn.io/",
        type:"GET",
        contentType:"application/json",
        success:function(response){
            let data = response.data;

            //Loops through the data and renders the table
            for(let i = 0; i < data.length; i++){
                let status = "";

                //Checks the status of the projects and renders a new badge/
                if(data[i].status == "On hold")
                {
                    status = '<span class="badge badge-primary status-bg">On Hold</span>'
                }
                else if(data[i].status == "Site Clearing")
                {
                    status = '<span class="badge badge-secondary status-bg">Site Clearing</span>'
                }
                else if(data[i].status == "Completed")
                {
                    status = '<span class="badge badge-success status-bg">Completed</span>'

                }
                else if(data[i].status == "Under construction")
                {
                    status = '<span class="badge badge-warning status-bg">Under Construction</span>'

                }
                else if(data[i].status == "Conceptual")
                {
                    status = '<span class="badge badge-info status-bg">Conceptual</span>'

                }
                else if(data[i].status == "Implementation")
                {
                    status = '<span class="badge badge-dark status-bg">Implementation</span>'

                }

                //Pushes the data in a tabe body.
                tableBody += `<tr><td>${data[i].project_name}</td><td>${data[i].developer}</td><td>${data[i].main_contractor}</td><td>${data[i].lga}</td><td>${data[i].state}</td><td>${status}</td><td>${data[i].sector}</td></tr>`

            };
            //Displays the table body
            $('#tableBody').html(tableBody);
            
            $('#estateTable').DataTable();
        }
    });
});