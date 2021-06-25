document.write('<div class="container">');
document.write("<table>");

 var row ="<tr>";
 var col = "<td>";
 
 
for(i=0 ;i<30 ;i++)
{
   document.write(row);
   console.log(row);
    
    for(j=0 ;j<30;j++)
    {
       document.write(col);
    }

}

 document.write("</table>");
 document.write("</div>");