<div class="w__poll--inner">
  
  <h2 class="w__poll--block-title">
    <%= data.name %>
  </h2>

  <img src="<%= img %>" alt="title">
  
  <h3 class="w__poll--question">
    <%= data.teaser %>
  </h3>
  
  <div class="w-poll__content w-poll__statistics" style="position:relative;">
    <% _.forEach(elements, function (e) { %>
      <% if (e.type==='poll_answer') { %>       
        <div class="poll-row">      
          <div class="bar-label">        
            <span class="text">
              <%= e.data.text %>
            </span>        
            <span class="pctg">
              <%= e.procents %>%
            </span>        
          </div>      
          <div class="bar-wrap">
            <div class="bar" style='width:<%= e.procents %>%'>
            </div>
          </div>
        </div>
      <% } %>
    <% }); %>   
  </div>
  
  <div class="w-poll__footer">
   <a href="/%D8%A5%D8%B3%D8%AA%D8%B7%D9%84%D8%A7%D8%B9%D8%A7%D8%AA-%D8%A7%D9%84%D8%B1%D8%A3%D9%8A/all-polls">
   المزيد من إستطلاعات الرأي
   </a>
 </div> 
  
</div>















