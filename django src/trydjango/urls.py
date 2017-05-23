from django.conf.urls import include, url
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
    # Examples:
    
    url(r'^find$','tr.views.result'),
    url(r'^log$','tr.views.login'),
    url(r'^admin/', include(admin.site.urls)),
   # url(r'^api$','tr.views.result'),



]