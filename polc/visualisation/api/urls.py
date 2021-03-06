from django.conf.urls import url
from django.conf.urls import include
from django.contrib import admin
from django.views.generic.base import RedirectView
from django.conf import settings
from django.conf.urls.static import static

from .views import (
    CandidatesScoreHistAPIView,
    ChartData
)

urlpatterns = [
    url(r'^data/$', ChartData.as_view(), name='vis_data'),
    # url(r'^line_chart/$', CandidatesScoreHistAPIView.as_view(), name='hist'),
    # url(r'^(?P<candidate_id>\d+)/disp/$', graphAPIView.as_view(), name='graph'),
]
