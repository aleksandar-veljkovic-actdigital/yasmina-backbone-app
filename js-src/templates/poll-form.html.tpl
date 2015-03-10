<div class="w__poll--inner">
  <h2 class="w__poll--block-title">
    Poll
  </h2>
  <!--img src="public/assets/images/erase-poll.jpg" alt="title"-->
  <img src="<%= img %>" alt="">
  <h3 class="w__poll--question">
    <%= data.name %>
  </h3>
  <form class="w__poll--form">
    <div class="w__poll--radios">
    <% _.forEach(elements, function (e) { %>
      <% if (e.type==='poll_answer') { %>    
        <label>
          <input value='<%= e.id %>' type="radio" class="" name="radio">    
          <span>
            <%= e.data.text %>
          </span>
        </label>    
      <% } %>
    <% }); %>
    </div>
    <div class="form-err"></div>
    <div class="w-poll__footer">
      <input type="submit" value="صوّتي" class="w__poll--btn-s"> 
    </div>
  </form>
</div>