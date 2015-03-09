<div class="mg-related"><!--
  <% _.forEach(articles, function (a, i) { %>
    --><div class="mg-related-item mg-related-item-<%=i%>">
          <div class="mg-related-img">
            <img  src="<%=a.img%>" alt="" />
          </div>
          <p class="mg-related-title">
            <%= a.title %>
          </p>
    </div><!--
  <% }); %>
--></div>