<div class="mg-related">
  <h3><%= window.backboneApp.t("mediaGallery", "relatedArticles") %></h3>
  <!--h3>ألبومات سوف تحبينها</h3--><!--
  <% _.forEach(articles, function (a, i) { %>
    --><a href="<%=a.link%>" class="mg-related-item mg-related-item-<%=i%>">
          <div class="mg-related-img">
            <img  src="<%=a.img%>" alt="<%=a.imgAlt%>" />
          </div>
          <p class="mg-related-title">
            <%= a.title %>
          </p>
    </a><!--
  <% }); %>
--></div>