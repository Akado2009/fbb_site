from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import PlatformSerializer, DatabaseSerializer, SampleSerializer, SeriesSerializer

from pandora.models import Database, Platform, Sample, Series


class PlatformViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Platform.objects.select_related('database')

    def get_serializer_class(self):
        return PlatformSerializer


class DatabaseViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Database.objects.all()

    def get_serializer_class(self):
        return DatabaseSerializer


class SeriesList(APIView):
    def get(self, request):
        name = request.GET.get('name', '')
        if not name:
            return Response()

        series = Series.objects.select_related('platform', 'platform__database').filter(name=name)
        serializer = SeriesSerializer(series, many=True)
        return Response(serializer.data)


class SampleList(APIView):
    def get(self, request):
        name = request.GET.get('name', '')
        if not name:
            return Response()

        samples = Sample.objects.select_related(
            'series', 'disease', 'tissue', 'series__platform', 'series__platform__database'
        ).prefetch_related('metadata').filter(
            name__icontains=name
        )

        serializer = SampleSerializer(samples, many=True)
        return Response(serializer.data)

