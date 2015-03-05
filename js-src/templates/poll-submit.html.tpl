<div class="w__poll">
  
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
   <a href="/إستطلاعات-الرأي/all-polls">
   المزيد من إستطلاعات الرأي
   </a>
 </div> 
  
</div>















